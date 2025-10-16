using SweDemoBackend.Application.UseCases;
using SweDemoBackend.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

var allowedOriginsEnv = Environment.GetEnvironmentVariable("ALLOWED_ORIGINS") ?? string.Empty;

// Split comma-separated origins, trim spaces, and filter out empties
var allowedOrigins = allowedOriginsEnv
    .Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries);

const string FrontendCorsPolicy = "FrontendCorsPolicy";

builder.Services.AddCors(options =>
{
  options.AddPolicy(name: FrontendCorsPolicy, policy =>
  {
    if (allowedOrigins.Length > 0)
    {
      policy
        .WithOrigins(allowedOrigins)
        .AllowAnyHeader()
        .AllowAnyMethod();
    }
  });
});

// Add services to the container.
builder.Services.AddInfrastructure(builder.Configuration);

builder.Services.AddScoped<LegoSetUseCase>();

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddSwaggerGen();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseCors(FrontendCorsPolicy);

app.UseCors();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
