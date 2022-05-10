using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PostWeb.Infrastructure.Migrations
{
    public partial class UpdateModelPost : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "MiddleString",
                table: "Posts",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MiddleString",
                table: "Posts");
        }
    }
}
