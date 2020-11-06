const heiwa = require("discord.js");

//////////////////////////////// DEVELOPER HEIWA \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

exports.run = async (client, message, args) => {
  if (!['769108358559957002'].some(role =>message.member.roles.cache.get(role)) &&!message.member.hasPermission("ADMINISTRATOR"))return message.reply(`Bu Komutu Kullanabilmeniz İçin Yetkinizin Daha Yüksek Olması Gerekmektedir!` );

  let member = message.mentions.users.first() || client.users.cache.get(args.join(" "))
  let hei = message.guild.member(member)
  let isim = args[1]
  let yaş = args[2]
  if (!member) return message.channel.send("Lütfen Bir Kullanıcı Giriniz")
  if (!isim) return message.channel.send("Lütfen Bir İsim  Giriniz")
  if (!yaş) return message.channel.send("Lüfen Bir Yaş Giriniz")
  let tag = "✵"
  let kayıtlı = "769108361890758677" // kayıtlı rol istersen let kayıtlı2 = "rol id" diyip member.roles.add(kayıtlı2) diyip <@&${kayıtlı2}> Rolünü ekleyebilirsin Aşağıya Descriptiona
  let kayıtsız = "769108360456568832"//kayıtsız rol


  hei.roles.add(kayıtlı)
  hei.roles.remove(kayıtsız)
  hei.setNickname(`${tag} ${isim} | ${yaş} `)

  const hw = new heiwa.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`<@${message.author.id}> - Tarafından Kayıt Edildi`)
    .setDescription(`<@${hei.user.id}> Adlı Kullanıcının Adını \`${tag} ${isim} | ${yaş}\` Olarak Güncelledim ve <@&${kayıtsız}> Rolünü Alıp <@&${kayıtlı}> Rolünü Verdim`)
    .setFooter("Kayıt Zamanı")
    .setTimestamp()
  client.channels.cache.get('769162249708765224').send(hw) 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [], // farklı kullanımnlar için 'istediğin', 'istediğin'...
};
  permLevel: 0

exports.help = {
  name: "e",
  description: "ERKEK KAYIT",
  usage: "s!e"
};
