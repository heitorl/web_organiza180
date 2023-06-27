import { useContext, useEffect, useState } from "react";
import { Container, TaskLister, Task } from "./style";
import { FaTimes } from "react-icons/fa";
import { UserContext } from "../../providers/UserContext";
import EmptyTask from "../EmptyTask";
import { format } from 'date-fns';
import { TaskContext } from "../../providers/TaskContext";
import { MdOutlineTaskAlt } from "react-icons/md";
import { toast } from "react-hot-toast";
import PropTypes from 'prop-types';
import VerifyDifficulty from "../VerifyDificulty";

const TaskList = ({isCompleted}) => {
  const { user } = useContext(UserContext);
  const { getAllTasksForUser, deleteTask, updateTaskStatus } = useContext(TaskContext);

  const [userTasks, setUserTasks] = useState([]);
  const userId = user.id;
  const status = userTasks.tasks
  
  useEffect(() => {
    const fetchTaskList = async () => {
      try {
        const response = await getAllTasksForUser(userId);
        if (response.tasks) {
          let filteredTasks = response.tasks;
          if (isCompleted) {
            filteredTasks = filteredTasks.filter(task => task.status === "completed");
          } else {
            filteredTasks = filteredTasks.filter(task => task.status !== "completed");
          }
          setUserTasks(() => ({ tasks: filteredTasks }));
        } else {
          console.error('Dados de tarefas ausentes');
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchTaskList();
  }, [getAllTasksForUser, userId, status, isCompleted]);

  const handleTaskDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      const updatedTasks = userTasks.tasks.filter(task => task.id !== taskId);
      setUserTasks({ tasks: updatedTasks });
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateStatus = async (taskId) => {
    try {
      await updateTaskStatus(taskId);

      const updatedTasks = userTasks.tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: "completed" };
        }
        return task;
      });
      
      setUserTasks({ tasks: updatedTasks });
      toast.success('status da tarefa foi alterado para "completada"!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <TaskLister>
        {userTasks.tasks && userTasks.tasks.length ? (
         userTasks.tasks.map((task) => (
            <Task key={task.id}>
              <div className="delete-icon">
                <FaTimes onClick={() => handleTaskDelete(task.id)} />
              </div>
              <div className="ctn-description">
                <h4>{task.description}</h4>
              </div>
              <div className="ctn-info">
                {!isCompleted ? ( 
                  <span style={{ background: '#63B3ED' }}>{task.status}</span>
                ) :
                (
                  <span style={{ background: '#68D391' }}>{task.status}</span>
                )}
                <VerifyDifficulty difficulty={task.dificulty} />

              </div>
              <div className="end">
              <span>Criado: {format(new Date(task.createdAt), 'dd/MM/yyyy')}</span>
              {!isCompleted ? ( 
                  <div className="ctn-end" onClick={() => handleUpdateStatus(task.id)}>
                    <span>Terminar</span>
                    <MdOutlineTaskAlt />
                  </div>
                ) :
                (
                  <div className="ctn-end">
                    <span>Concluído: {format(new Date(task.updatedAt), 'dd/MM/yyyy')}</span>
                    <MdOutlineTaskAlt />
                  </div>
                )}
              </div>
              
            </Task>
          ))
        ) : (
          <EmptyTask />
        )}
      </TaskLister>
    </Container>
  );
};
TaskList.propTypes = {
  isCompleted: PropTypes.bool
};

export default TaskList;