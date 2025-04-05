import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from './AuthContext';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useContext(AuthContext);

  // Set axios headers
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  // Get all projects
  const getProjects = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/api/projects');
      setProjects(res.data.data);
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.error || 'Error fetching projects');
      setLoading(false);
    }
  };

  // Get single project
  const getProject = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/projects/${id}`);
      setProject(res.data.data);
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.error || 'Error fetching project');
      setLoading(false);
    }
  };

  // Create project
  const createProject = async (projectData) => {
    try {
      setLoading(true);
      const res = await axios.post('/api/projects', projectData);
      setProjects([...projects, res.data.data]);
      setLoading(false);
      return { success: true };
    } catch (err) {
      setError(err.response?.data?.error || 'Error creating project');
      setLoading(false);
      return { success: false, error: err.response?.data?.error };
    }
  };

  // Update project
  const updateProject = async (id, projectData) => {
    try {
      setLoading(true);
      const res = await axios.put(`/api/projects/${id}`, projectData);
      setProjects(projects.map(project => 
        project._id === id ? res.data.data : project
      ));
      setLoading(false);
      return { success: true };
    } catch (err) {
      setError(err.response?.data?.error || 'Error updating project');
      setLoading(false);
      return { success: false, error: err.response?.data?.error };
    }
  };

  // Add project update
  const addProjectUpdate = async (id, updateData) => {
    try {
      setLoading(true);
      const res = await axios.post(`/api/projects/${id}/updates`, updateData);
      setProject(res.data.data);
      setLoading(false);
      return { success: true };
    } catch (err) {
      setError(err.response?.data?.error || 'Error adding project update');
      setLoading(false);
      return { success: false, error: err.response?.data?.error };
    }
  };

  // Add sponsor
  const addSponsor = async (id, sponsorData) => {
    try {
      setLoading(true);
      const res = await axios.post(`/api/projects/${id}/sponsors`, sponsorData);
      setProject(res.data.data);
      setLoading(false);
      return { success: true };
    } catch (err) {
      setError(err.response?.data?.error || 'Error adding sponsor');
      setLoading(false);
      return { success: false, error: err.response?.data?.error };
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        project,
        loading,
        error,
        getProjects,
        getProject,
        createProject,
        updateProject,
        addProjectUpdate,
        addSponsor
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext; 