const { SQLContext } = require('rey-common');

const { Model, DataTypes } = SQLContext.getORMProvider();

class Movies extends Model {}

Movies.init({
  movies_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  author_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  movies_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  content: {
    type: DataTypes.STRING(255),
    allowNull: false,
  }
}, {
    sequelize: SQLContext.getContext(),
    underscored: true,
    paranoid: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    tableName: 'movies'
});

Movies.associate = (models) => {
  
    Movies.belongsTo(models.Author, {
      foreignKey: 'author_id',
      as: 'author'
    });
};

module.exports = Movies;
