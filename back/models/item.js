module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
        content:{
            type: DataTypes.TEXT, //TEXT는 매우 긴 글
            allowNull:true,
        },
        cost:{
            type:DataTypes.STRING(40),
            allowNull:true,
        },
        modify:{
            type: DataTypes.TEXT, //TEXT는 매우 긴 글
            allowNull:true,
        },
        refund:{
            type: DataTypes.TEXT, //TEXT는 매우 긴 글
            allowNull:true,
        },
        status:{
            type:DataTypes.STRING(40),
            allowNull:true,
        },
    }, {
        charset:'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    Item.associate = (db) => {
        db.Item.belongsTo(db.User); //UserId, Post.addUser, Post.setUser, Post.getUser, Post.removeUser
        
        db.Item.hasMany(db.Image);
        
        db.Item.belongsToMany(db.User, { through: 'Like3', as: 'Itemlikers'}); //liked 와 대응되는 likers
        
    };
    return Item;
};