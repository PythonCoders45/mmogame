var player = new Player(10, 10)
var stats = {};

stats.coins = localStorage.setItem('coins', 20);
stats.username = localStorage.setItem('username', );;
stats.color = localStorage.setItem('color', 'blue');;
stats.accessories = localStorage.setItem('accessories', ['top hat']);
stats.achivements = localStorage.setItem('achivements', ['Joined!']);

var Player = function (x, y) {
  this.x = x;
  this.y = y;
};

var DrawPlayer = function (player) {
  var playerSprite = '';
  var playerElement = $(playerHtml);

  playerElement.css({
      position: "absolute",
      left: player.x,
      top: player.y
    });

    $("body").append(playerElement);
};

Player.prototype.draw = function () {
  var playerSprite = '';
  this.playerElement = $(playerHtml);

  this.playerElement.css({
      position: "absolute",
      left: player.x,
      top: player.y
    });

    $("body").append(this.playerElement);
};

Player.prototype.moveRight = function () {
    this.x += 5;

    this.carElement.css({
      left: this.x
      top:  this.y
    });
};

Player.prototype.moveLeft = function () {
    this.x -= 5;

    this.carElement.css({
      left: this.x
      top:  this.y
    });
};

Player.prototype.moveUp = function () {
    this.y -= 5;

    this.carElement.css({
      left: this.x
      top:  this.y
    });
};

Player.prototype.moveDown = function () {
    this.y += 5;

    this.carElement.css({
      left: this.x
      top:  this.y
    });
};
