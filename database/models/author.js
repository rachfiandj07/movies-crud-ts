const { SQLContext } = require('rey-common');

const { Model, DataTypes } = SQLContext.getORMProvider();

class Author extends Model {}

Author.init({
  author_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  author_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
    sequelize: SQLContext.getContext(),
    underscored: true,
    paranoid: true,
    timestamps: true,
    tableName: 'authors'
});

Author.associate = (models) => {
  
    Author.hasMany(models.Movies, {
      foreignKey: 'author_id',
      as: 'movies'
    });
};

module.exports = Author;
