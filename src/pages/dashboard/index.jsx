import { useContext, useEffect, useState } from "react";
import Greeting from "../../components/Greeting";
import { Container, Content } from "./style";
import { UserContext } from "../../providers/UserContext";
import { DragDropContext } from "react-beautiful-dnd";
import { Column } from "../../components/Column";
import { TaskContext } from "../../providers/TaskContext";
import EmptyTask from "../../components/EmptyTask";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { getAllTasksForUser, deleteTask } = useContext(TaskContext);

  const [userTasks, setUserTasks] = useState(user.tasks);

  const [columns, setColumns] = useState({
    "TO-DO": {
      id: "column-1",
      title: "TO-DO",
      tasks: [],
    },
    "IN-PROGRESS": {
      id: "column-2",
      title: "IN-PROGRESS",
      tasks: [],
    },
    COMPLETED: {
      id: "column-3",
      title: "COMPLETED",
      tasks: [],
    },
  });

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getAllTasksForUser(user.id);
        setUserTasks(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();
  }, [user.id, getAllTasksForUser]);

  // Atualize as colunas com base nas tarefas do usuário
  useEffect(() => {
    const updatedColumns = {
      "TO-DO": {
        ...columns["TO-DO"],
        tasks: userTasks.filter((task) => task.status === "TO-DO"),
      },
      "IN-PROGRESS": {
        ...columns["IN-PROGRESS"],
        tasks: userTasks.filter((task) => task.status === "IN-PROGRESS"),
      },
      COMPLETED: {
        ...columns.COMPLETED,
        tasks: userTasks.filter((task) => task.status === "COMPLETED"),
      },
    };
    setColumns(updatedColumns);
  }, [userTasks]);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    const columnMappings = {
      "column-1": "TO-DO",
      "column-2": "IN-PROGRESS",
      "column-3": "COMPLETED",
    };

    const sourceColumnId = columnMappings[source.droppableId];
    const destinationColumnId = columnMappings[destination.droppableId];

    const sourceColumn = { ...columns[sourceColumnId] };
    const destinationColumn = { ...columns[destinationColumnId] };
    const task = sourceColumn.tasks.find((t) => t.id === draggableId);

    if (sourceColumnId === destinationColumnId) {
      // Reorganize as tarefas na mesma coluna
      sourceColumn.tasks = [...sourceColumn.tasks];
      sourceColumn.tasks.splice(source.index, 1); // Removendo a tarefa da posição original
      sourceColumn.tasks.splice(destination.index, 0, task); // Inserindo a tarefa na nova posição
    } else {
      // Movimentação entre colunas
      sourceColumn.tasks = sourceColumn.tasks.filter(
        (t) => t.id !== draggableId
      );
      destinationColumn.tasks.splice(destination.index, 0, task);
    }

    setColumns((prevColumns) => ({
      ...prevColumns,
      [sourceColumnId]: sourceColumn,
      [destinationColumnId]: destinationColumn,
    }));
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);

      const updatedTasks = await getAllTasksForUser(user.id);

      setUserTasks(updatedTasks);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        <Content>
          {user && user.name && <Greeting name={user.name} />}
          {!userTasks.length ? (
            <div className="modal">
              <EmptyTask />
            </div>
          ) : (
            <div className="ctn-column">
              {Object.values(columns).map((column) => (
                <Column
                  key={column.id}
                  title={column.title}
                  tasks={column.tasks}
                  columnId={column.id}
                  handleDeleteTask={handleDeleteTask}
                />
              ))}
            </div>
          )}
        </Content>
      </DragDropContext>
    </Container>
  );
};

export default Dashboard;
