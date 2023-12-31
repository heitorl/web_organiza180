import { createContext } from "react";
import PropTypes from "prop-types";
import { api } from "../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export const TaskContext = createContext({});

export const TaskProvider = ({ children }) => {
  const navigate = useNavigate();

  const createNewTask = async (formData) => {
    try {
      const status = "TO-DO";

      const newData = { ...formData, status };

      const token = localStorage.getItem("@TOKEN");

      const response = await api.post("/task/createTask", newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);
      toast.success("Tarefa criada com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      console.log(error.response);
    }
  };

  const getAllTasksForUser = async (userId) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.get(`/task/allTask/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.length === 0) return [];

      return response.data;
    } catch (error) {
      console.log(error.response);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const token = localStorage.getItem("@TOKEN");

      await api.delete(`/task/delete/${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Tarefa deletada com sucesso!");
    } catch (error) {
      console.log(error.response);
    }
  };

  const updateTaskStatus = async (taskId, status) => {
    try {
      const token = localStorage.getItem("@TOKEN");

      await api.patch(
        `/task/update/${taskId}`,
        { status: status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        createNewTask,
        getAllTasksForUser,
        deleteTask,
        updateTaskStatus,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

TaskProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
