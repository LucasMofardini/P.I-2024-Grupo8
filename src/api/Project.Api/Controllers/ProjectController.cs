using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Project.Application.DTOs;
using Project.Application.Interfaces;

namespace Project.API.Controllers;

[ApiController]
[Route("[controller]")]
public class ProjectController : ControllerBase
{
    private readonly IProjectService _projectService;

    public ProjectController(
        IProjectService projectService)
    {
        _projectService = projectService;
    }
    
    [HttpPost(Name = "CreateProject")]
    public IActionResult CreateProject([FromBody] ProjectDTO dto)
    {
        try
        {
            _projectService.CreateProject(dto);
            
            return Ok($"{dto.Name} - Salvo com Sucesso");
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return BadRequest(e.Message);
        }
    }
    
    [HttpGet(Name = "ListProject")]
    public IActionResult ListProjects()
    {
        try
        {
            return Ok(_projectService.ListProjects());
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return BadRequest(e.Message);
        }
    }
    
    [HttpPut(Name = "UpdateProject")]
    public IActionResult UpdateProject([FromBody] ProjectDTO dto)
    {
        try
        {
            _projectService.UpdateProject(dto);
            
            return Ok($"{dto.Name} - Atualizado com Sucesso");
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return BadRequest(e.Message);
        }
    }
    
    [HttpDelete(Name = "DeleteProjectByCode")]
    public IActionResult DeleteProjectByCode([FromQuery] string code)
    {
        try
        {
            _projectService.DeleteProjectByCode(code);
            
            return Ok($"Projeto do Código {code} - Deletado com Sucesso");
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return BadRequest(e.Message);
        }
    }
}