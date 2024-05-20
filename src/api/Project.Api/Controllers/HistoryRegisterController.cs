using Microsoft.AspNetCore.Mvc;
using Project.Application.DTOs;
using Project.Application.Interfaces;

namespace Project.API.Controllers;

[ApiController]
[Route("[controller]")]
public class HistoryRegisterController : ControllerBase
{
    private readonly IHistoryRegisterService _historyRegisterService;
    
    public HistoryRegisterController(IHistoryRegisterService historyRegisterService)
    {
        _historyRegisterService = historyRegisterService;
    }

    [HttpPost(Name = "AddHistoryByProjectId")]
    public IActionResult AddHistoryByCode([FromQuery] string code, [FromBody] HistoryRegisterDTO dto)
    {
        try
        {
            _historyRegisterService.AddHistoryByCode(code, dto);
            
            return Ok("Histórico adicionado com sucesso");
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }
}