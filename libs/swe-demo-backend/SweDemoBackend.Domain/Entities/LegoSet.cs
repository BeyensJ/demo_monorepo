using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SweDemoBackend.Domain.Entities
{
  public class LegoSet
  {
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Name { get; set; }
    public int NumberOfPieces { get; set; }
  }
}
