const help = (prefix) => {
	return `> *Sticker Commands* <
command : *${prefix}sticker* or *${prefix}stiker*
desc : Convierte imagenes/gif/video en Sticker
usage : Responde a la imagen/gif/video, o envia imagen/gif/video con el comando
command : *${prefix}sticker nobg* or *${prefix}stiker nobg*
desc : Convierte imagenes de sticker con el fondo removido
usage : responder a la imagen o envia la imagen con el comando
command : *${prefix}toimg*
desc : Convierte un sticker a imagen
usage : Responde al sticker
command : *${prefix}tsticker* or *${prefix}tstiker*
desc : Convierte texto a sticker
usage : *${prefix}tsticker text in here*\n

> *Meme Commands* <
command : *${prefix}meme*
desc : meme random [english]
usage : Solo envia el comando

> *Others Commands* <
command : *${prefix}tp*
desc : Text / Logo maker from textpro.me
usage : *${prefix}tp [no] [text]*\nexample : *${prefix}tp 1 YourText*
note : *${prefix}tp list* ( Para mostrar todos los temas )\n
command : *${prefix}ep*
desc : Text / Logo maker from ephoto360.com
usage : *${prefix}ep [no] [text]*\nexample : *${prefix}ep 1 YourText*
note : *${prefix}ep list* ( for show all theme )\n
command : *${prefix}tahta*
desc : Harta Tahta .....
usage : *${prefix}tahta [text]*\nexample : *${prefix}tahta YourText*\n
command : *${prefix}gtts*
desc : convertir texto a voz / audio
usage : *${prefix}gtts [cc] [text]*\nexample : *${prefix}gtts ja On2-chan*\n
command : *${prefix}loli*
desc : Loli random
usage : Solo envia el comando
command : *${prefix}nsfwloli*
desc : nsfw loli random
usage : Solo envia el comando
command : *${prefix}url2img*
desc : tomar capturas de pantalla web
usage : *${prefix}url2img [tipe] [url]*\n
command : *${prefix}simi*
desc : your message will be replied to by simi
usage : *${prefix}simi yourmessage*\n
command : *${prefix}ocr*
desc : take the text in the picture
usage : reply image, or send image with caption\n
command : *${prefix}wait*
desc : Busca anime con una imagen [ What Anime Is This/That ]
usage : Responde o envia la imagen con el comando
command : *${prefix}setprefix*
desc : rReemplaza el prefix
usage : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
note : Este comandos solo puede ser utilizados por el dueño

> *Group Comands* <
command : *${prefix}add*
desc : Añadir miembro
usage : *${prefix}add xxxxxxxxxx*\n
note : Solo se puede usar cuando el bot se convierte en administrador y el que envía el comando es administrador\n
command : *${prefix}kick*
desc : expulsar miembros del grupo
usage : *${prefix}kick @tagmember*\n
note : solo se puede usar cuando el bot se convierte en administrador y quien envía el comando es administrador!\n
command : *${prefix}promote*
desc : Ascender miembros a admin
usage : *${prefix}promote @tagmember*\n
note : solo se puede usar cuando el bot se convierte en administrador y quien envía el comando es administrador!\n
command : *${prefix}demote*
desc : make the group admin as group member
usage : *${prefix}demote @tagmember*\n
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}linkgroup*
desc : tomar el enlace del grupo
usage : Solo manda el comando
note : solo se puede usar cuando el bot se convierte en administrador y quien envía el comando es administrador!\n
command : *${prefix}leave*
desc : Haz que el bot deje el grupo
usage : Solo manda el comando
note : Can only be used by Group admins and Bot owner\n
command : *${prefix}tagall*
desc : Tagea todo el grupo everyone
usage : Solo manda el comando
note : This command can be used if you are a group admin\n
command : *${prefix}simih*
desc : activar el modo simi en el grupo
usage : *${prefix}simih 1* to activate simi mode and *${prefix}simih 0* to deactivate simi mode
note : This command can be used if you are a group admin\n`
}

exports.help = help
