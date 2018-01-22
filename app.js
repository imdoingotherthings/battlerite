const Discord = require('discord.js');
const client = new Discord.Client();
const gJSON = require('get-json');
const fetch = require('node-fetch');
const config = require('./config.json');

client.on('ready', function () {
    console.log('ready');
});