module.exports = (sequelize, Sequelize, DataTypes) => {
    const Board = sequelize.define(
      "board", // Model name
      {
        board: { //GSAB ,CBSE
          type: DataTypes.STRING,
          unique: true
        },
      },
      {
        // Options
        timestamps: true,
        underscrored: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
      }
    );
  
    return Board;
  };