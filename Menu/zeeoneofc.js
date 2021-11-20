exports.allmenu = (pushname, sender, isOwner, isPrem, cekvipp, getLimit, limitawal, limit, balance, getBalance, simbolnya, petik, prefix) => {
return`Hello ${pushname}🤗

• Nama : ${pushname} 
• Nomor : @${sender.split("@")[0]} 
• Status : ${isOwner?`Owner ⚔️`:isPrem?`Premium 🏅`:`Free User`} 
• Expired Prem : ${isOwner?`Unlimited Owner`:isPrem ? `${cekvipp.days}d, ${cekvipp.hours}h, ${cekvipp.minutes}m, ${cekvipp.seconds}s`:'Not Premium'}
• Limit : ${isOwner?`Unlimited`: isPrem ? `Unlimited Premium` : getLimit(sender, limitawal, limit) +' / '+limitawal}
• Balance : $${getBalance(sender, balance)}


*Owner Menu*${petik}
• ${prefix}bc
• ${prefix}exif
• ${prefix}ban
• ${prefix}unban
• ${prefix}block
• ${prefix}unblock
• ${prefix}clearall
• ${prefix}setbiobot
• ${prefix}setnamabot
• ${prefix}resetlimit
• ${prefix}cekapikey
• ${prefix}setthumb
• ${prefix}setmenu [simple/ori]
• ${prefix}prem add @tag waktu
• ${prefix}prem del @tag waktu
• ${prefix}sewa add waktu
• ${prefix}sewa del
• ${prefix}auto ngetik/vn
• ${prefix}setprefix nopref/multi
•  > || x
•  =>
•  $
•  <${petik}

*Download Menu*${petik}
• ${prefix}play [query]
• ${prefix}ytmp3 [url]
• ${prefix}ytmp4 [url]
• ${prefix}video [query]
• ${prefix}igdl [url]
• ${prefix}igstory [username]
• ${prefix}igphoto [url]
• ${prefix}igreel [url]
• ${prefix}igvideo [url]
• ${prefix}igtv [url]
• ${prefix}tiktok [url]
• ${prefix}tiktokaudio [url]
• ${prefix}tiktoknowm [url]
• ${prefix}mediafire [url]${petik}

*Convert Menu*${petik}
• ${prefix}sticker
• ${prefix}swm
• ${prefix}take
• ${prefix}attp
• ${prefix}semoji 🐦
• ${prefix}toimg
• ${prefix}tomp4
• ${prefix}togif
• ${prefix}tomp3
• ${prefix}tovn
• ${prefix}tinyurl
• ${prefix}kontak
• ${prefix}tts Kode Bahasa Teks
• ${prefix}translate Kode Bahasa
• ${prefix}bass
• ${prefix}slow
• ${prefix}fast
• ${prefix}robot
• ${prefix}detikvn
• ${prefix}tupai
• ${prefix}vibrato${petik}

*Editor Menu*${petik}
• ${prefix}memegen teks atas | teks bawah
• ${prefix}stickmeme teks${petik}

*Search Menu*${petik}
• ${prefix}caripesan
• ${prefix}pinterest
• ${prefix}wikipedia
• ${prefix}playstore
• ${prefix}brainly
• ${prefix}yts${petik}

*Storage Menu*${petik}
• ${prefix}addrespon
• ${prefix}delrespon
• ${prefix}listrespon
• ${prefix}listbadword
• ${prefix}addbadword
• ${prefix}delbadword
• ${prefix}addvn
• ${prefix}listvn
• ${prefix}delvn
• ${prefix}addimage
• ${prefix}listimage
• ${prefix}delimage
• ${prefix}addvideo
• ${prefix}listvideo
• ${prefix}delvideo
• ${prefix}addsticker
• ${prefix}liststicker
• ${prefix}delstik${petik}

*Fun Menu*${petik}
• ${prefix}slot
• ${prefix}truth
• ${prefix}dare
• ${prefix}voting @tag | alasan | waktu
• ${prefix}delvote
	vote
	devote${petik}
   
*Group Menu*${petik}
• ${prefix}chatinfo
• ${prefix}afk reason
• ${prefix}hidetag
• ${prefix}notif
• ${prefix}infogc
• ${prefix}jadian
• ${prefix}listonline
• ${prefix}tagall
• ${prefix}ceksewa
• ${prefix}add 628XX
• ${prefix}kick
• ${prefix}promote
• ${prefix}demote
• ${prefix}resetlink
• ${prefix}linkgc
• ${prefix}grup [open/close]
• ${prefix}antibadword [on/off]
• ${prefix}antilink [on/off]
• ${prefix}antitroli [on/off]${petik}
   
*Limit Menu*${petik}
• ${prefix}topbalance
• ${prefix}toplimit
• ${prefix}limit
• ${prefix}level
• ${prefix}balance
• ${prefix}buylimit Nominal
• ${prefix}giftlimit @tag | nominal
• ${prefix}buyprem [need 1k limit]${petik}
   
*Maker Menu*${petik}
• ${prefix}nuliskanan
• ${prefix}nuliskiri
• ${prefix}foliokanan
• ${prefix}foliokiri
• ${prefix}naruto
• ${prefix}shadow
• ${prefix}lovemsg
• ${prefix}doubleheart
• ${prefix}coffecup
• ${prefix}lovetext
• ${prefix}butterfly
• ${prefix}romantic
• ${prefix}smoke
• ${prefix}burnpaper
• ${prefix}grass${petik}

*Others Menu*${petik}
• ${prefix}pantun
• ${prefix}faktaunik
• ${prefix}styletext
• ${prefix}donasi
• ${prefix}asupan
• ${prefix}nulis
• ${prefix}getnumber
• ${prefix}getpic
• ${prefix}inspect
• ${prefix}wame 
• ${prefix}towame${petik}`
}
