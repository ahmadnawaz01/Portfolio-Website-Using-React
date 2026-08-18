import React, { useState } from 'react';
import styled from 'styled-components';
import { useData } from '../context/DataContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const AdminContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #F4F1FA;
  color: #332F3A;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  font-family: 'DM Sans', sans-serif;
`;

const Card = styled.div`
  width: 100%;
  max-width: 1000px;
  background: #F4F1FA;
  box-shadow: 
    20px 20px 45px #cdc6d9,
    -20px -20px 45px #ffffff,
    inset 4px 4px 8px rgba(219, 39, 119, 0.05),
    inset -4px -4px 8px rgba(255, 255, 255, 0.9);
  border-radius: 36px;
  padding: 36px;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-family: 'Nunito', sans-serif;
  font-size: 32px;
  font-weight: 900;
  color: #332F3A;
  margin-bottom: 20px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  background: #F4F1FA;
  box-shadow: inset 4px 4px 8px #cdc6d9, inset -4px -4px 8px #ffffff;
  border: none;
  outline: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  color: #332F3A;
  border-radius: 18px;
  padding: 14px 18px;
  margin-bottom: 16px;
  transition: all 0.2s ease;

  &:focus {
    box-shadow: inset 4px 4px 8px #cdc6d9, inset -4px -4px 8px #ffffff, 0 0 0 2px #DB2777;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  background: #F4F1FA;
  box-shadow: inset 4px 4px 8px #cdc6d9, inset -4px -4px 8px #ffffff;
  border: none;
  outline: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  color: #332F3A;
  border-radius: 18px;
  padding: 14px 18px;
  margin-bottom: 16px;
  min-height: 100px;
  resize: vertical;

  &:focus {
    box-shadow: inset 4px 4px 8px #cdc6d9, inset -4px -4px 8px #ffffff, 0 0 0 2px #DB2777;
  }
`;

const Label = styled.label`
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: 14px;
  color: #635F69;
  margin-bottom: 6px;
  display: block;
`;

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #F472B6 0%, #DB2777 100%);
  color: white;
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: 15px;
  border: none;
  border-radius: 20px;
  padding: 12px 24px;
  cursor: pointer;
  box-shadow: 
    6px 6px 14px #cdc6d9,
    -6px -6px 14px #ffffff;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.96);
  }
`;

const SecondaryButton = styled.button`
  background: #F4F1FA;
  color: #635F69;
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: 14px;
  border: none;
  border-radius: 18px;
  padding: 10px 20px;
  cursor: pointer;
  box-shadow: 4px 4px 10px #cdc6d9, -4px -4px 10px #ffffff;
  transition: all 0.2s ease;

  &:hover {
    color: #DB2777;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.96);
  }
`;

const DangerButton = styled.button`
  background: #EF4444;
  color: white;
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: 13px;
  border: none;
  border-radius: 14px;
  padding: 8px 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const TabContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 24px;
`;

const Tab = styled.button`
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: 15px;
  padding: 10px 20px;
  border-radius: 18px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${({ $active }) => ($active ? '#FFFFFF' : '#635F69')};
  background: ${({ $active }) =>
    $active ? 'linear-gradient(135deg, #F472B6 0%, #DB2777 100%)' : '#F4F1FA'};
  box-shadow: ${({ $active }) =>
    $active
      ? '6px 6px 14px #cdc6d9, -6px -6px 14px #ffffff'
      : '4px 4px 8px #cdc6d9, -4px -4px 8px #ffffff'};
`;

const ItemCard = styled.div`
  background: #F4F1FA;
  box-shadow: inset 4px 4px 8px #cdc6d9, inset -4px -4px 8px #ffffff;
  border-radius: 24px;
  padding: 20px;
  margin-bottom: 16px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: #F4F1FA;
  box-shadow: 20px 20px 45px #cdc6d9, -20px -20px 45px #ffffff;
  border-radius: 28px;
  padding: 28px;
  width: 100%;
  max-width: 800px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('admin_authenticated') === 'true';
  });
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const {
    Bio,
    skills,
    experiences,
    education,
    projects,
    updateBio,
    updateSkills,
    updateExperiences,
    updateEducation,
    updateProjects,
    resetToDefaults,
  } = useData();

  const [activeTab, setActiveTab] = useState('bio');
  const [showExportModal, setShowExportModal] = useState(false);
  const [exportedCode, setExportedCode] = useState('');

  // Form local states
  const [bioForm, setBioForm] = useState({ ...Bio });
  const [skillsForm, setSkillsForm] = useState(JSON.parse(JSON.stringify(skills)));
  const [projectsForm, setProjectsForm] = useState(JSON.parse(JSON.stringify(projects)));
  const [expForm, setExpForm] = useState(JSON.parse(JSON.stringify(experiences)));
  const [eduForm, setEduForm] = useState(JSON.parse(JSON.stringify(education)));

  const handleOpenExportModal = () => {
    const code = `// Updated constants.js generated from Admin Dashboard\nexport const Bio = ${JSON.stringify(Bio, null, 2)};\n\nexport const skills = ${JSON.stringify(skills, null, 2)};\n\nexport const experiences = ${JSON.stringify(experiences, null, 2)};\n\nexport const education = ${JSON.stringify(education, null, 2)};\n\nexport const projects = ${JSON.stringify(projects, null, 2)};\n`;
    setExportedCode(code);
    setShowExportModal(true);
  };

  const handleDownloadConstants = () => {
    const blob = new Blob([exportedCode], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'constants.js';
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Downloaded updated constants.js file!');
  };

  const handleCopyConstants = () => {
    navigator.clipboard.writeText(exportedCode);
    toast.success('Copied updated constants.js code to clipboard!');
  };

  const envUser = import.meta.env.VITE_ADMIN_USERNAME || 'admin';
  const envPass = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';

  const handleLogin = (e) => {
    e.preventDefault();
    if (usernameInput === envUser && passwordInput === envPass) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_authenticated', 'true');
      toast.success('Successfully logged in as Admin!');
    } else {
      toast.error('Invalid username or password!');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_authenticated');
    toast.info('Logged out from Admin dashboard');
  };

  const saveBio = (e) => {
    e.preventDefault();
    const formattedBio = {
      ...bioForm,
      roles: Array.isArray(bioForm.roles)
        ? bioForm.roles
        : bioForm.roles.split(',').map((r) => r.trim()).filter(Boolean),
    };
    updateBio(formattedBio);
    toast.success('Bio information updated successfully!');
  };

  const saveSkills = () => {
    updateSkills(skillsForm);
    toast.success('Skills updated successfully!');
  };

  const saveProjects = () => {
    updateProjects(projectsForm);
    toast.success('Projects updated successfully!');
  };

  const saveExperiences = () => {
    updateExperiences(expForm);
    toast.success('Experiences updated successfully!');
  };

  const saveEducation = () => {
    updateEducation(eduForm);
    toast.success('Education updated successfully!');
  };

  if (!isAuthenticated) {
    return (
      <AdminContainer>
        <Card style={{ maxWidth: '420px', textAlign: 'center' }}>
          <Title>Admin Login</Title>
          <form onSubmit={handleLogin}>
            <div style={{ textAlign: 'left' }}>
              <Label>Username</Label>
              <Input
                type="text"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                placeholder="Enter admin username"
                required
              />
              <Label>Password</Label>
              <Input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter admin password"
                required
              />
            </div>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '10px' }}>
              <PrimaryButton type="submit" style={{ width: '100%' }}>Login</PrimaryButton>
            </div>
          </form>
          <div style={{ marginTop: '20px' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#DB2777', fontWeight: 800, fontSize: '14px' }}>
              ← Back to Portfolio
            </Link>
          </div>
        </Card>
      </AdminContainer>
    );
  }

  return (
    <AdminContainer>
      <div style={{ width: '100%', maxWidth: '1000px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title style={{ margin: 0 }}>Admin Dashboard</Title>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link to="/">
            <SecondaryButton>View Site</SecondaryButton>
          </Link>
          <PrimaryButton onClick={handleOpenExportModal}>
            📥 Export constants.js
          </PrimaryButton>
          <SecondaryButton onClick={() => {
            if (window.confirm('Reset all website data to initial defaults?')) {
              resetToDefaults();
              window.location.reload();
            }
          }}>
            Reset Defaults
          </SecondaryButton>
          <DangerButton onClick={handleLogout}>Logout</DangerButton>
        </div>
      </div>

      <Card>
        <TabContainer>
          <Tab $active={activeTab === 'bio'} onClick={() => setActiveTab('bio')}>👤 Bio & Info</Tab>
          <Tab $active={activeTab === 'skills'} onClick={() => setActiveTab('skills')}>⚡ Skills</Tab>
          <Tab $active={activeTab === 'projects'} onClick={() => setActiveTab('projects')}>💼 Projects</Tab>
          <Tab $active={activeTab === 'experiences'} onClick={() => setActiveTab('experiences')}>🏢 Experience</Tab>
          <Tab $active={activeTab === 'education'} onClick={() => setActiveTab('education')}>🎓 Education</Tab>
        </TabContainer>

        {/* TAB 1: BIO */}
        {activeTab === 'bio' && (
          <form onSubmit={saveBio}>
            <Label>Full Name</Label>
            <Input
              value={bioForm.name || ''}
              onChange={(e) => setBioForm({ ...bioForm, name: e.target.value })}
            />

            <Label>Roles (comma separated)</Label>
            <Input
              value={Array.isArray(bioForm.roles) ? bioForm.roles.join(', ') : bioForm.roles || ''}
              onChange={(e) => setBioForm({ ...bioForm, roles: e.target.value })}
            />

            <Label>Description</Label>
            <Textarea
              value={bioForm.description || ''}
              onChange={(e) => setBioForm({ ...bioForm, description: e.target.value })}
            />

            <Label>Skills Subtitle (Skill duration text)</Label>
            <Input
              value={bioForm.skilldur || ''}
              onChange={(e) => setBioForm({ ...bioForm, skilldur: e.target.value })}
            />

            <Label>Github URL</Label>
            <Input
              value={bioForm.github || ''}
              onChange={(e) => setBioForm({ ...bioForm, github: e.target.value })}
            />

            <Label>LinkedIn URL</Label>
            <Input
              value={bioForm.linkedin || ''}
              onChange={(e) => setBioForm({ ...bioForm, linkedin: e.target.value })}
            />

            <Label>Resume Link (Google Drive / File URL)</Label>
            <Input
              value={bioForm.resume || ''}
              onChange={(e) => setBioForm({ ...bioForm, resume: e.target.value })}
            />

            <Label>Instagram URL</Label>
            <Input
              value={bioForm.insta || ''}
              onChange={(e) => setBioForm({ ...bioForm, insta: e.target.value })}
            />

            <Label>Twitter URL</Label>
            <Input
              value={bioForm.twitter || ''}
              onChange={(e) => setBioForm({ ...bioForm, twitter: e.target.value })}
            />

            <Label>Facebook URL</Label>
            <Input
              value={bioForm.facebook || ''}
              onChange={(e) => setBioForm({ ...bioForm, facebook: e.target.value })}
            />

            <PrimaryButton type="submit" style={{ width: '100%', marginTop: '10px' }}>
              Save Bio Details
            </PrimaryButton>
          </form>
        )}

        {/* TAB 2: SKILLS */}
        {activeTab === 'skills' && (
          <div>
            {skillsForm.map((cat, cIdx) => (
              <ItemCard key={cIdx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <Label style={{ fontSize: '16px', color: '#DB2777' }}>Skill Category #{cIdx + 1}</Label>
                  <DangerButton onClick={() => {
                    const newSkills = skillsForm.filter((_, idx) => idx !== cIdx);
                    setSkillsForm(newSkills);
                  }}>Remove Category</DangerButton>
                </div>
                <Input
                  value={cat.title}
                  placeholder="Category Title"
                  onChange={(e) => {
                    const newForm = [...skillsForm];
                    newForm[cIdx].title = e.target.value;
                    setSkillsForm(newForm);
                  }}
                />

                <Label style={{ marginTop: '10px' }}>Skills in Category:</Label>
                {cat.skills.map((sItem, sIdx) => (
                  <div key={sIdx} style={{ display: 'flex', gap: '10px', marginBottom: '8px' }}>
                    <Input
                      value={sItem.name}
                      placeholder="Skill Name"
                      onChange={(e) => {
                        const newForm = [...skillsForm];
                        newForm[cIdx].skills[sIdx].name = e.target.value;
                        setSkillsForm(newForm);
                      }}
                      style={{ marginBottom: 0, flex: 1 }}
                    />
                    <Input
                      value={sItem.image}
                      placeholder="Image URL"
                      onChange={(e) => {
                        const newForm = [...skillsForm];
                        newForm[cIdx].skills[sIdx].image = e.target.value;
                        setSkillsForm(newForm);
                      }}
                      style={{ marginBottom: 0, flex: 2 }}
                    />
                    <DangerButton onClick={() => {
                      const newForm = [...skillsForm];
                      newForm[cIdx].skills = newForm[cIdx].skills.filter((_, idx) => idx !== sIdx);
                      setSkillsForm(newForm);
                    }}>X</DangerButton>
                  </div>
                ))}
                <SecondaryButton
                  style={{ marginTop: '8px', fontSize: '12px' }}
                  onClick={() => {
                    const newForm = [...skillsForm];
                    newForm[cIdx].skills.push({ name: 'New Skill', image: '' });
                    setSkillsForm(newForm);
                  }}
                >
                  + Add Skill to Category
                </SecondaryButton>
              </ItemCard>
            ))}

            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              <SecondaryButton
                onClick={() => {
                  setSkillsForm([...skillsForm, { title: 'New Category', skills: [] }]);
                }}
              >
                + Add New Skill Category
              </SecondaryButton>
              <PrimaryButton onClick={saveSkills}>Save All Skills</PrimaryButton>
            </div>
          </div>
        )}

        {/* TAB 3: PROJECTS */}
        {activeTab === 'projects' && (
          <div>
            {projectsForm.map((proj, pIdx) => (
              <ItemCard key={pIdx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <Label style={{ fontSize: '16px', color: '#DB2777' }}>Project #{proj.id || pIdx + 1}: {proj.title}</Label>
                  <DangerButton onClick={() => {
                    const updated = projectsForm.filter((_, idx) => idx !== pIdx);
                    setProjectsForm(updated);
                  }}>Delete Project</DangerButton>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <Label>Title</Label>
                    <Input
                      value={proj.title || ''}
                      onChange={(e) => {
                        const updated = [...projectsForm];
                        updated[pIdx].title = e.target.value;
                        setProjectsForm(updated);
                      }}
                    />
                  </div>
                  <div>
                    <Label>Date</Label>
                    <Input
                      value={proj.date || ''}
                      onChange={(e) => {
                        const updated = [...projectsForm];
                        updated[pIdx].date = e.target.value;
                        setProjectsForm(updated);
                      }}
                    />
                  </div>
                </div>

                <Label>Description</Label>
                <Textarea
                  value={proj.description || ''}
                  onChange={(e) => {
                    const updated = [...projectsForm];
                    updated[pIdx].description = e.target.value;
                    setProjectsForm(updated);
                  }}
                />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <Label>Image URL</Label>
                    <Input
                      value={proj.image || ''}
                      onChange={(e) => {
                        const updated = [...projectsForm];
                        updated[pIdx].image = e.target.value;
                        setProjectsForm(updated);
                      }}
                    />
                  </div>
                  <div>
                    <Label>Category</Label>
                    <Input
                      value={proj.category || ''}
                      onChange={(e) => {
                        const updated = [...projectsForm];
                        updated[pIdx].category = e.target.value;
                        setProjectsForm(updated);
                      }}
                    />
                  </div>
                </div>

                <Label>Tags (comma separated)</Label>
                <Input
                  value={Array.isArray(proj.tags) ? proj.tags.join(', ') : proj.tags || ''}
                  onChange={(e) => {
                    const updated = [...projectsForm];
                    updated[pIdx].tags = e.target.value.split(',').map((t) => t.trim()).filter(Boolean);
                    setProjectsForm(updated);
                  }}
                />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <Label>Github URL</Label>
                    <Input
                      value={proj.github || ''}
                      onChange={(e) => {
                        const updated = [...projectsForm];
                        updated[pIdx].github = e.target.value;
                        setProjectsForm(updated);
                      }}
                    />
                  </div>
                  <div>
                    <Label>Live Webapp URL</Label>
                    <Input
                      value={proj.webapp || ''}
                      onChange={(e) => {
                        const updated = [...projectsForm];
                        updated[pIdx].webapp = e.target.value;
                        setProjectsForm(updated);
                      }}
                    />
                  </div>
                </div>
              </ItemCard>
            ))}

            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              <SecondaryButton
                onClick={() => {
                  const newProj = {
                    id: Date.now(),
                    title: 'New Project',
                    date: '2026',
                    description: 'Project description goes here...',
                    image: '',
                    tags: ['React', 'Python'],
                    category: 'machine learning',
                    github: '',
                    webapp: '',
                  };
                  setProjectsForm([newProj, ...projectsForm]);
                }}
              >
                + Add New Project
              </SecondaryButton>
              <PrimaryButton onClick={saveProjects}>Save All Projects</PrimaryButton>
            </div>
          </div>
        )}

        {/* TAB 4: EXPERIENCE */}
        {activeTab === 'experiences' && (
          <div>
            {expForm.map((exp, eIdx) => (
              <ItemCard key={eIdx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <Label style={{ fontSize: '16px', color: '#DB2777' }}>Experience #{eIdx + 1}: {exp.role}</Label>
                  <DangerButton onClick={() => {
                    const updated = expForm.filter((_, idx) => idx !== eIdx);
                    setExpForm(updated);
                  }}>Delete Experience</DangerButton>
                </div>

                <Label>Role</Label>
                <Input
                  value={exp.role || ''}
                  onChange={(e) => {
                    const updated = [...expForm];
                    updated[eIdx].role = e.target.value;
                    setExpForm(updated);
                  }}
                />

                <Label>Company</Label>
                <Input
                  value={exp.company || ''}
                  onChange={(e) => {
                    const updated = [...expForm];
                    updated[eIdx].company = e.target.value;
                    setExpForm(updated);
                  }}
                />

                <Label>Date</Label>
                <Input
                  value={exp.date || ''}
                  onChange={(e) => {
                    const updated = [...expForm];
                    updated[eIdx].date = e.target.value;
                    setExpForm(updated);
                  }}
                />

                <Label>Description</Label>
                <Textarea
                  value={exp.desc || ''}
                  onChange={(e) => {
                    const updated = [...expForm];
                    updated[eIdx].desc = e.target.value;
                    setExpForm(updated);
                  }}
                />

                <Label>Skills (comma separated)</Label>
                <Input
                  value={Array.isArray(exp.skills) ? exp.skills.join(', ') : exp.skills || ''}
                  onChange={(e) => {
                    const updated = [...expForm];
                    updated[eIdx].skills = e.target.value.split(',').map((s) => s.trim()).filter(Boolean);
                    setExpForm(updated);
                  }}
                />

                <Label>Image URL</Label>
                <Input
                  value={exp.img || ''}
                  onChange={(e) => {
                    const updated = [...expForm];
                    updated[eIdx].img = e.target.value;
                    setExpForm(updated);
                  }}
                />
              </ItemCard>
            ))}

            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              <SecondaryButton
                onClick={() => {
                  setExpForm([
                    {
                      id: Date.now(),
                      role: 'New Role',
                      company: 'Company Name',
                      date: '2026',
                      desc: 'Description...',
                      skills: [],
                      img: '',
                    },
                    ...expForm,
                  ]);
                }}
              >
                + Add New Experience
              </SecondaryButton>
              <PrimaryButton onClick={saveExperiences}>Save Experiences</PrimaryButton>
            </div>
          </div>
        )}

        {/* TAB 5: EDUCATION */}
        {activeTab === 'education' && (
          <div>
            {eduForm.map((edu, edIdx) => (
              <ItemCard key={edIdx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <Label style={{ fontSize: '16px', color: '#DB2777' }}>Education #{edIdx + 1}: {edu.school}</Label>
                  <DangerButton onClick={() => {
                    const updated = eduForm.filter((_, idx) => idx !== edIdx);
                    setEduForm(updated);
                  }}>Delete Education</DangerButton>
                </div>

                <Label>School / Institution</Label>
                <Input
                  value={edu.school || ''}
                  onChange={(e) => {
                    const updated = [...eduForm];
                    updated[edIdx].school = e.target.value;
                    setEduForm(updated);
                  }}
                />

                <Label>Degree</Label>
                <Input
                  value={edu.degree || ''}
                  onChange={(e) => {
                    const updated = [...eduForm];
                    updated[edIdx].degree = e.target.value;
                    setEduForm(updated);
                  }}
                />

                <Label>Date</Label>
                <Input
                  value={edu.date || ''}
                  onChange={(e) => {
                    const updated = [...eduForm];
                    updated[edIdx].date = e.target.value;
                    setEduForm(updated);
                  }}
                />

                <Label>Grade (Optional)</Label>
                <Input
                  value={edu.grade || ''}
                  onChange={(e) => {
                    const updated = [...eduForm];
                    updated[edIdx].grade = e.target.value;
                    setEduForm(updated);
                  }}
                />

                <Label>Description</Label>
                <Textarea
                  value={edu.desc || ''}
                  onChange={(e) => {
                    const updated = [...eduForm];
                    updated[edIdx].desc = e.target.value;
                    setEduForm(updated);
                  }}
                />

                <Label>Image URL</Label>
                <Input
                  value={edu.img || ''}
                  onChange={(e) => {
                    const updated = [...eduForm];
                    updated[edIdx].img = e.target.value;
                    setEduForm(updated);
                  }}
                />
              </ItemCard>
            ))}

            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              <SecondaryButton
                onClick={() => {
                  setEduForm([
                    {
                      id: Date.now(),
                      school: 'University Name',
                      degree: 'Degree Title',
                      date: '2026',
                      grade: '',
                      desc: 'Description...',
                      img: '',
                    },
                    ...eduForm,
                  ]);
                }}
              >
                + Add New Education
              </SecondaryButton>
              <PrimaryButton onClick={saveEducation}>Save Education</PrimaryButton>
            </div>
          </div>
        )}
      </Card>

      {showExportModal && (
        <ModalOverlay onClick={() => setShowExportModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, color: '#332F3A', margin: 0 }}>
                Export updated constants.js
              </h2>
              <DangerButton onClick={() => setShowExportModal(false)}>✕ Close</DangerButton>
            </div>
            <p style={{ margin: 0, color: '#635F69', fontSize: '14px' }}>
              Copy this updated JavaScript code or download the file to replace your <code>src/data/constants.js</code> in your project codebase.
            </p>
            <Textarea
              value={exportedCode}
              readOnly
              style={{ flex: 1, minHeight: '300px', fontFamily: 'monospace', fontSize: '13px', whiteSpace: 'pre' }}
            />
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <SecondaryButton onClick={handleCopyConstants}>
                📋 Copy Code
              </SecondaryButton>
              <PrimaryButton onClick={handleDownloadConstants}>
                📥 Download constants.js
              </PrimaryButton>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </AdminContainer>
  );
};

export default AdminPage;
