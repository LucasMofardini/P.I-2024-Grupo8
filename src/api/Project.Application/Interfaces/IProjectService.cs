using Project.Application.DTOs;

namespace Project.Application.Interfaces;

public interface IProjectService
{
    void CreateProject(ProjectDTO dto);
    void UpdateProjectByCode(ProjectDTO dto);
    void DeleteProjectByCode(string code);
    List<Domain.Project> ListProjects();
}   