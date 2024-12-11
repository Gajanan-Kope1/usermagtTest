module.exports = (sequelize, Sequelize, DataTypes) => {
    const User = sequelize.define(
      "user", // Model name
      {
        userName: {
          type: DataTypes.STRING,
          unique: true
        },
        institute: {
          type: DataTypes.ENUM('Playhouse', 'School', 'College', 'Competitive Exam Center'),
        },

        // //college
        degreeType: {
          type: DataTypes.ENUM('Bachlor', 'Master'),
        },
        university: {
          type: DataTypes.STRING,
        },
        //school
        medium: {
          type: DataTypes.ENUM('English', 'Hindi'),
        },
        class_category: {
          type: DataTypes.ENUM('Pre-primary', 'Primary', 'Secondary', 'Higher Secondary'),
        },
        standerd: {
          type: DataTypes.STRING,
        },
        subjects: {
          type: DataTypes.STRING,  // Array of strings
        },

        //compptatie exam
        examType: DataTypes.STRING,

        boardId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'boards', // Name of the board model/table
            key: 'id',
          },
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
  
    return User;
  };