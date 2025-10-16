using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SweDemoBackend.Contracts.Dtos
{
  public class LegoSetDto
  {
    public Guid Id { get; set; }
    public string Name { get; set; }
    public int NumberOfPieces { get; set; }
  }
}
