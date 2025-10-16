using SweDemoBackend.Domain.Entities;

namespace SweDemoBackend.Application.Interfaces.Repositories
{
  public interface ILegoSetRepository
  {
    Task<IEnumerable<LegoSet>> GetLegoSetsAsync(CancellationToken ct = default);
  }
}
