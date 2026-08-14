import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Bio as defaultBio,
  skills as defaultSkills,
  experiences as defaultExperiences,
  education as defaultEducation,
  projects as defaultProjects,
} from '../data/constants';

const DataContext = createContext();

const STORAGE_KEY = 'portfolio_custom_data_v1';

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Error loading stored portfolio data:', e);
    }
    return {
      Bio: defaultBio,
      skills: defaultSkills,
      experiences: defaultExperiences,
      education: defaultEducation,
      projects: defaultProjects,
    };
  });

  const saveData = (newData) => {
    setData(newData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch (e) {
      console.error('Error saving portfolio data:', e);
    }
  };

  const updateBio = (newBio) => {
    const updated = { ...data, Bio: newBio };
    saveData(updated);
  };

  const updateSkills = (newSkills) => {
    const updated = { ...data, skills: newSkills };
    saveData(updated);
  };

  const updateExperiences = (newExperiences) => {
    const updated = { ...data, experiences: newExperiences };
    saveData(updated);
  };

  const updateEducation = (newEducation) => {
    const updated = { ...data, education: newEducation };
    saveData(updated);
  };

  const updateProjects = (newProjects) => {
    const updated = { ...data, projects: newProjects };
    saveData(updated);
  };

  const resetToDefaults = () => {
    const defaultData = {
      Bio: defaultBio,
      skills: defaultSkills,
      experiences: defaultExperiences,
      education: defaultEducation,
      projects: defaultProjects,
    };
    saveData(defaultData);
  };

  return (
    <DataContext.Provider
      value={{
        Bio: data.Bio,
        skills: data.skills,
        experiences: data.experiences,
        education: data.education,
        projects: data.projects,
        updateBio,
        updateSkills,
        updateExperiences,
        updateEducation,
        updateProjects,
        resetToDefaults,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
