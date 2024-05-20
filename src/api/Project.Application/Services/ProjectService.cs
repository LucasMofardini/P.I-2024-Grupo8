using Project.Application.DTOs;
using Project.Application.Interfaces;
using Project.Infrastructure.Data;

namespace Project.Application.Services;

public class ProjectService : IProjectService
{
    private readonly Context _context;

    public ProjectService(Context context)
    {
        _context = context;
    }

    public void CreateProject(ProjectDTO dto)
    {
        var project = GetProjectByCode(dto.Code);

        if (project is not null && project.Code == dto.Code)
        {
            throw new Exception("Já existe um projeto com esse código");
        }

        var createProject = new Domain.Project
        {
            Name = dto.Name,
            Budget = dto.Budget,
            Code = dto.Code
        };

        _context.Project.Add(createProject);
        _context.SaveChanges();
    }

    public void UpdateProjectByCode(ProjectDTO dto)
    {
        var project = GetProjectByCode(dto.Code);

        if (project is null || project.Code != dto.Code)
            throw new Exception("Código não encontrado");

        var updateProject = new Domain.Project
        {
            Id = project.Id,
            Name = dto.Name,
            Budget = dto.Budget,
            Code = dto.Code
        };

        _context.Project.Update(updateProject);
        _context.SaveChanges();
    }

    public List<Domain.Project> ListProjects()
    {
        return _context.Project.ToList();
    }

    public void DeleteProjectByCode(string code)
    {
        var project = GetProjectByCode(code);

        if (project is null)
            throw new Exception("Código não encontrado");
        
        
        
        var a = 

        _context.Project.Remove(project);
        _context.SaveChanges();
    }

    private Domain.Project? GetProjectByCode(string code)
    {
        return _context.Project.FirstOrDefault(x => x.Code == code);
    }
}