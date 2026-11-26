// Artist roster shared by every page. Fields: name, format code, city, label, photo, tag, more (1 = wider network), extra occasions.
// Photos the category, event and Top artists tiles may use as covers. A new artist photo goes on that artist's own card only;
// add its path here later, when we arrange tile covers.
window.AOS_COVERS = ["img/act-ayush.jpg", "img/act-checkmate.jpg", "img/act-diwan.jpg", "img/act-filmysthan.jpg", "img/act-izhar.jpg", "img/act-jyotsna.jpg", "img/act-kartikk.jpg", "img/act-khushi.jpg", "img/act-maneswita.jpg", "img/act-nikhil2.jpg", "img/act-panda.jpg", "img/act-perisha.jpg", "img/act-pianowali.jpg", "img/act-raavana3.jpg", "img/act-ravetek.jpg", "img/act-sahibjeet.jpg", "img/act-sukhbir.jpg", "img/act-stellar.jpg", "img/act-zaad.jpg"];
window.AOS_RAW = [["Checkmate", "live", "Delhi", "", "img/act-checkmate.jpg", ""], ["Filmysthan", "djband", "Delhi", "", "img/act-filmysthan.jpg", ""], ["Khushi Walia Live", "allgirl", "Delhi", "", "img/act-khushi.jpg", ""], ["DJ Perisha", "dj", "Delhi", "", "img/act-perisha.jpg", ""], ["Kartikk", "dj", "Delhi", "", "img/act-kartikk.jpg", ""], ["Panda Music", "dj", "Delhi", "", "img/act-panda.jpg", ""], ["Maneswita", "dj,djperc", "Delhi", "DJ, percussion", "img/act-maneswita.jpg", ""], ["Piano Wali", "lounge,soloinst", "Delhi", "Instrumental, keyboard", "img/act-pianowali.jpg", ""], ["Izhar", "lounge,soloinst,instrband", "Delhi", "Instrumental, violin (duet or trio)", "img/act-izhar.jpg", ""], ["Stellar Strings", "intl,instrband", "Delhi", "", "img/act-stellar.jpg", ""], ["Diwan-e-Khas", "sufibolly", "Delhi", "", "img/act-diwan.jpg", ""], ["Nikhil Majotra", "sufibolly", "Delhi", "", "img/act-nikhil2.jpg", ""], ["Sahibjeet Kaur", "anchor", "Delhi", "", "img/act-sahibjeet.jpg", ""], ["DJ Ravetek", "dj", "Lucknow", "", "img/act-ravetek.jpg", ""], ["DJ Zaad", "dj", "Lucknow", "", "img/act-zaad.jpg", ""], ["Aayush", "lounge,soloinst,instrband", "Lucknow", "Instrumental, violin", "img/act-ayush.jpg", ""], ["Jyotsna Navandar", "allgirl,celeb", "Mumbai", "", "img/act-jyotsna.jpg", "Celebrity artist"], ["Raavana Live", "djperc", "Mumbai", "", "img/act-raavana3.jpg", ""], ["Aayush", "live", "Delhi", "", "", ""], ["Amyr Khandani", "live", "Delhi", "", "", ""], ["The Band Nadaan", "live", "Delhi", "", "", ""], ["Classico & Naina Live", "live", "Delhi", "", "", ""], ["Dark White", "live", "Delhi", "", "", ""], ["Ketan Verma", "live", "Delhi", "", "", ""], ["Navjot", "live", "Delhi", "", "", ""], ["Piyush", "live", "Delhi", "", "", ""], ["Raaul", "live", "Delhi", "", "", ""], ["Saurav", "live", "Delhi", "", "", ""], ["Swarism", "live", "Delhi", "", "", ""], ["Aqua Beats", "djband", "Delhi", "", "", ""], ["Blockbuster", "djband", "Delhi", "", "", ""], ["Filmeewood", "djband", "Delhi", "", "", ""], ["Malhaar", "djband", "Delhi", "", "", ""], ["Tathastu", "djband", "Delhi", "", "", ""], ["DJ Ashu", "dj", "Delhi", "", "", ""], ["DJ Ruddy", "dj", "Delhi", "", "", ""], ["Ananya", "duotrio", "Delhi", "Duo", "", ""], ["Devanshu", "duotrio", "Delhi", "Duo", "", ""], ["Hardil Gulwan", "solosing,duotrio", "Delhi", "Solo to band", "", ""], ["Naman Sharma", "solosing,duotrio", "Delhi", "Solo to band", "", ""], ["Satin Soul Collective", "western,jazz", "Delhi", "", "", ""], ["Lavisha", "anchor", "Delhi", "", "", ""], ["Maddy", "anchor", "Delhi", "", "", ""], ["Megha", "anchor", "Delhi", "", "", ""], ["Shikha Pandey", "anchor", "Delhi", "", "", ""], ["Arush", "live", "Lucknow", "", "", ""], ["The Harmony Band", "live", "Lucknow", "", "", ""], ["Madtown Funk", "live", "Lucknow", "", "", ""], ["Neptune", "live", "Lucknow", "", "", ""], ["Naacheez", "live", "Lucknow", "", "", ""], ["Supriya Collective", "live", "Lucknow", "", "", ""], ["DJ Aahana", "dj", "Lucknow", "", "", ""], ["DJ Ayush", "dj", "Lucknow", "", "", ""], ["DJ Prince", "dj", "Lucknow", "", "", ""], ["DJ Shubh", "dj", "Lucknow", "", "", ""], ["DJ Sufi", "dj", "Lucknow", "", "", ""], ["DJ Tapasvi", "dj", "Lucknow", "", "", ""], ["Shiva", "solosing,duotrio", "Lucknow", "Solo or duo", "", ""], ["Shivansh Srivastava", "solosing", "Lucknow", "Solo", "", ""], ["Vansh", "duotrio", "Lucknow", "Duo", "", ""], ["Ak Singh", "live", "Mumbai", "", "", ""], ["Desi Chord", "live", "Mumbai", "", "", ""], ["Joshua", "live", "Mumbai", "", "", ""], ["Siddharth Singh Live", "live", "Mumbai", "Live band (trio to band)", "", ""], ["A Trebled Soul", "solosing,duotrio", "Mumbai", "Solo to band", "", ""], ["Srishhti Bhitrikothiy", "solosing,duotrio", "Mumbai", "Duo to band", "", ""], ["Suyash Medh", "solosing", "Mumbai", "Solo", "", ""], ["Seher Band", "live", "Bangalore", "", "", ""], ["Jay Patel", "live", "Ahmedabad", "", "", ""], ["Hussain K", "anchor", "Pan-India", "", "img/act-hussain.jpg", "TV celebrity", 1], ["Roshni Chopra", "anchor", "Pan-India", "", "img/act-roshni.jpg", "TV celebrity", 1], ["Shruti Seth", "anchor", "Pan-India", "", "img/act-shruti.jpg", "TV celebrity", 1], ["Sonam C Chabbra", "anchor", "Pan-India", "", "img/act-sonam.jpg", "", 1], ["Kunal Ganjawala", "bollyretro", "Pan-India", "", "img/act-kunalg.jpg", "", 1], ["Sanam", "bollyretro", "Pan-India", "", "img/act-sanam.jpg", "", 1], ["AP Dhillon", "live,celeb", "Pan-India", "", "img/act-apdhillon.jpg", "Celebrity artist", 1], ["Aastha Gill", "live,celeb", "Pan-India", "", "img/act-aastha.jpg", "Celebrity artist", 1], ["Aditya Narayan", "live,celeb", "Pan-India", "", "img/act-aditya.jpg", "Celebrity artist", 1], ["Amit Trivedi", "live,celeb", "Pan-India", "", "img/act-amit.jpg", "Celebrity artist", 1], ["Amrit Maan", "live,celeb", "Pan-India", "", "img/act-amrit.jpg", "Celebrity artist", 1], ["Armaan Malik", "live,celeb", "Pan-India", "", "img/act-armaan.jpg", "Celebrity artist", 1], ["B Praak", "live,celeb", "Pan-India", "", "img/act-bpraak.jpg", "Celebrity artist", 1], ["Baani Sandhu", "live,celeb", "Pan-India", "", "img/act-baani.jpg", "Celebrity artist", 1], ["Badshah", "live,celeb", "Pan-India", "", "img/act-badshah.jpg", "Celebrity artist", 1], ["Daler Mehndi", "live,celeb", "Pan-India", "", "img/act-daler.jpg", "Celebrity artist", 1], ["Darshan Raval", "live,celeb", "Pan-India", "", "img/act-darshan.jpg", "Celebrity artist", 1], ["Garry Sandhu", "live,celeb", "Pan-India", "", "img/act-garry.jpg", "Celebrity artist", 1], ["Gurdeep Mehndi", "live,celeb", "Pan-India", "", "img/act-gurdeep.jpg", "Celebrity artist", 1], ["Jasmine Sandlas", "live,celeb", "Pan-India", "", "img/act-jasmine.jpg", "Celebrity artist", 1], ["Jassi Gill", "live,celeb", "Pan-India", "", "img/act-jassigill.jpg", "Celebrity artist", 1], ["Jonita Gandhi", "live,celeb", "Pan-India", "", "img/act-jonita.jpg", "Celebrity artist", 1], ["Kaur B", "live,celeb", "Pan-India", "", "img/act-kaurb.jpg", "Celebrity artist", 1], ["Meet Bros", "live,celeb", "Pan-India", "", "img/act-meetbros.jpg", "Celebrity artist", 1], ["Miss Pooja", "live,celeb", "Pan-India", "", "img/act-misspooja.jpg", "Celebrity artist", 1], ["Nakash Aziz", "live,celeb", "Pan-India", "", "img/act-nakash.jpg", "Celebrity artist", 1], ["Navraj Hans", "live,celeb", "Pan-India", "", "img/act-navraj.jpg", "Celebrity artist", 1], ["Neha Bhasin", "live,celeb", "Pan-India", "", "img/act-neha.jpg", "Celebrity artist", 1], ["Palak Muchhal", "live,celeb", "Pan-India", "", "img/act-palak.jpg", "Celebrity artist", 1], ["Parmish Verma", "live,celeb", "Pan-India", "", "img/act-parmish.jpg", "Celebrity artist", 1], ["Rahul Vaidya", "live,celeb", "Pan-India", "", "img/act-rahul.jpg", "Celebrity artist", 1], ["Ranjit Bawa", "live,celeb", "Pan-India", "", "img/act-ranjit.jpg", "Celebrity artist", 1], ["Rupali Jagga", "live,celeb", "Pan-India", "", "img/act-rupali.jpg", "Celebrity artist", 1], ["Sara Gurpal", "live,celeb", "Pan-India", "", "img/act-sara.jpg", "Celebrity artist", 1], ["Shaan", "live,celeb", "Pan-India", "", "img/act-shaan.jpg", "Celebrity artist", 1], ["Shreya Ghoshal", "live,celeb", "Pan-India", "", "img/act-shreya.jpg", "Celebrity artist", 1], ["Sonu Nigam", "live,celeb", "Pan-India", "", "img/act-sonu.jpg", "Celebrity artist", 1], ["Sunanda Sharma", "live,celeb", "Pan-India", "", "img/act-sunanda.jpg", "Celebrity artist", 1], ["Sunidhi Chauhan", "live,celeb", "Pan-India", "", "img/act-sunidhi.jpg", "Celebrity artist", 1], ["Yo Yo Honey Singh", "live,celeb", "Pan-India", "", "img/act-honey.jpg", "Celebrity artist", 1], ["Yuvraaj Hans", "live,celeb", "Pan-India", "", "img/act-yuvraaj.jpg", "Celebrity artist", 1], ["DJ Aqeel", "dj,celeb", "Pan-India", "", "img/act-aqeel.jpg", "Celebrity DJ", 1], ["DJ Chetas", "dj,celeb", "Pan-India", "", "img/act-chetas.jpg", "Celebrity DJ", 1], ["DJ Lijo George", "dj,celeb", "Pan-India", "", "img/act-lijo.jpg", "Celebrity DJ", 1], ["DJ Nikhil Chinapa", "dj,celeb", "Pan-India", "", "img/act-nikhil.jpg", "Celebrity DJ", 1], ["DJ Shadow", "dj", "Pan-India", "", "img/act-shadow.jpg", "", 1], ["DJ Yogi", "dj", "Pan-India", "", "img/act-yogi.jpg", "", 1], ["Nucleya", "dj,celeb", "Pan-India", "", "img/act-nucleya.jpg", "Celebrity DJ", 1], ["Progressive Brothers", "dj", "Pan-India", "", "img/act-progressive.jpg", "", 1], ["Gayathri Asokan", "ghazal,celeb", "Pan-India", "", "img/act-gayathri.jpg", "Celebrity artist", 1], ["Kavya Limaye", "ghazal,celeb", "Pan-India", "", "img/act-kavya.jpg", "Celebrity artist", 1], ["Papon", "ghazal,live,celeb", "Pan-India", "", "img/act-papon.jpg", "Celebrity artist", 1], ["Aakash Gupta", "magiccomedy,standup", "Pan-India", "", "img/act-aakash.jpg", "Celebrity stand-up comedian", 1], ["Abhishek Upmanyu", "magiccomedy,standup", "Pan-India", "", "img/act-abhishek.jpg", "Celebrity stand-up comedian", 1], ["Anubhav Singh Bassi", "magiccomedy,standup", "Pan-India", "", "img/act-bassi.jpg", "Celebrity stand-up comedian", 1], ["Gaurav Gupta", "magiccomedy", "Pan-India", "Stand-up comedian", "img/act-gaurav.jpg", "", 1], ["Gaurav Kapoor", "magiccomedy", "Pan-India", "Stand-up comedian", "img/act-gauravk.jpg", "", 1], ["Harsh Gujral", "magiccomedy,standup", "Pan-India", "", "img/act-harsh.jpg", "Celebrity stand-up comedian", 1], ["Rajiv Thakur", "magiccomedy,standup", "Pan-India", "", "img/act-rajiv.jpg", "Celebrity stand-up comedian", 1], ["Dino James", "rap", "Pan-India", "Rapper", "img/act-dino.jpg", "", 1], ["Emiway Bantai", "rap", "Pan-India", "Rapper", "img/act-emiway.jpg", "", 1], ["MC Square", "rap", "Pan-India", "Rapper", "img/act-mcsquare.jpg", "", 1], ["Paradox", "rap", "Pan-India", "Rapper", "img/act-paradox.jpg", "", 1], ["Raja Kumari", "rap", "Pan-India", "Rapper", "img/act-rajakumari.jpg", "", 1], ["L Subramaniam (violin)", "soloinst", "Pan-India", "", "img/act-lsubramaniam.jpg", "", 1], ["Parth Chandiramani (flute)", "soloinst", "Pan-India", "", "img/act-parth.jpg", "", 1], ["Purbayan Chatterjee (sitar)", "soloinst", "Pan-India", "", "img/act-purbayan.jpg", "", 1], ["Raghav Sachar", "soloinst", "Pan-India", "", "img/act-raghav.jpg", "", 1], ["Ronu Majumdar (flute)", "soloinst", "Pan-India", "", "img/act-ronu.jpg", "", 1], ["Salil Bhatt (Satvik Veena)", "soloinst", "Pan-India", "", "img/act-salil.jpg", "", 1], ["Sivamani (percussion)", "soloinst", "Pan-India", "", "img/act-sivamanisolo.jpg", "", 1], ["Stephen Devassy", "soloinst", "Pan-India", "", "img/act-stephen.jpg", "", 1], ["Bismil Ki Mehfil", "sufibolly", "Pan-India", "", "img/act-bismil.jpg", "", 1], ["Divya Kumar", "sufibolly", "Pan-India", "", "img/act-divya.jpg", "", 1], ["Mame Khan", "sufibolly", "Pan-India", "", "img/act-mamekhan.jpg", "", 1], ["Sagar Bhatia", "sufibolly", "Pan-India", "", "img/act-sagar.jpg", "", 1], ["Salman Zaman", "sufibolly", "Pan-India", "", "img/act-salmanzaman.jpg", "", 1], ["Sharib & Toshi (Sabri)", "sufibolly", "Pan-India", "", "img/act-sharibtoshi.jpg", "", 1], ["Lets Nacho Band (Delhi)", "djband", "Pan-India", "", "img/act-nacho.jpg", "", 1], ["Stree Shakti (Anuradha Pal)", "allgirl", "Pan-India", "", "img/act-streeshakti.jpg", "", 1], ["The Womaniaz (Mumbai)", "allgirl", "Pan-India", "", "img/act-womaniaz.jpg", "", 1], ["Amit Siyaram", "anchor", "Pan-India", "", "img/act-amitsiyaram.jpg", "", 1], ["Megha Kedia", "anchor", "Pan-India", "", "img/act-megha.jpg", "", 1], ["Sharon Aamir", "anchor", "Pan-India", "", "img/act-sharon.jpg", "", 1], ["Vishaal Rasquinha", "anchor", "Pan-India", "", "img/act-vishaal.jpg", "", 1], ["Parikrama", "bollyrock", "Pan-India", "", "img/act-parikrama.jpg", "", 1], ["The Yellow Diaries", "bollyrock", "Pan-India", "", "img/act-yellow.jpg", "", 1], ["Zikrr", "bollyrock", "Pan-India", "", "img/act-zikrr.jpg", "", 1], ["Bryden & Parth Choir", "choir", "Pan-India", "", "img/act-bryden.jpg", "", 1], ["El Fe Choir (Chennai)", "choir", "Pan-India", "", "img/act-elfe.jpg", "", 1], ["Nandan Borker Collective", "choir", "Pan-India", "", "img/act-nandan.jpg", "", 1], ["Quavers Chamber Choir", "choir", "Pan-India", "", "img/act-quavers.jpg", "", 1], ["The Bollywood Tales (choir experience)", "choir", "Pan-India", "", "img/act-bollytales.jpg", "", 1], ["DJ Anna Breathe", "dj", "Pan-India", "", "img/act-annabreathe.jpg", "", 1], ["DJ Barkha Kaul", "dj", "Pan-India", "", "img/act-barkha.jpg", "", 1], ["DJ Sukhbir", "dj", "Pan-India", "", "img/act-sukhbir.jpg", "", 1], ["DJ Rhea", "dj", "Pan-India", "", "img/act-rhea.jpg", "", 1], ["DJ Rink", "dj", "Pan-India", "", "img/act-rink.jpg", "", 1], ["Apoorv Singh Verma", "djperc", "Pan-India", "", "img/act-apoorv.jpg", "", 1], ["Hiten Panwar", "djperc", "Pan-India", "", "img/act-hiten.jpg", "", 1], ["Mohsick", "djperc", "Pan-India", "", "img/act-mohsick.jpg", "", 1], ["Taishul", "djperc", "Pan-India", "", "img/act-veronika.jpg", "", 1], ["Blu Birds", "djband", "Pan-India", "", "img/act-blubirds.jpg", "", 1], ["Infinity", "djband", "Pan-India", "", "img/act-infinity.jpg", "", 1], ["Mystic Pop", "djband", "Pan-India", "", "img/act-mysticpop.jpg", "", 1], ["Naachshala", "djband", "Pan-India", "", "img/act-naachshala.jpg", "", 1], ["Power Puff Girls", "djband", "Pan-India", "", "img/act-powerpuff.jpg", "", 1], ["Starboy Shubz", "djband", "Pan-India", "", "img/act-starboy.jpg", "", 1], ["Tamasha", "djband", "Pan-India", "", "img/act-tamasha.jpg", "", 1], ["Urban Turban", "djband", "Pan-India", "", "img/act-urbanturban.jpg", "", 1], ["Aishwarya Majumdar", "devotional", "Pan-India", "", "img/act-aishwarya.jpg", "", 1], ["Hansraj Raghuwanshi", "devotional", "Pan-India", "", "img/act-hansraj.jpg", "", 1], ["Hemant Brijwasi", "devotional", "Pan-India", "", "img/act-hemant.jpg", "", 1], ["Lakhbir Singh Lakkha", "devotional", "Pan-India", "", "img/act-lakhbir.jpg", "", 1], ["Master Saleem", "devotional,celeb", "Pan-India", "", "img/act-saleem.jpg", "Celebrity artist", 1], ["Kumar Satyamm", "ghazal", "Pan-India", "", "img/act-kumar.jpg", "", 1], ["Rathijit Bhattacharjee", "ghazal", "Pan-India", "", "img/act-rathijit.jpg", "", 1], ["Bombay Chamber Orchestra", "instrband", "Pan-India", "", "img/act-bombaychamber.jpg", "", 1], ["Made In India", "instrband", "Pan-India", "", "img/act-madeinindia.jpg", "", 1], ["Music Mansion", "instrband", "Pan-India", "", "img/act-musicmansion.jpg", "", 1], ["The Bombay Tux", "live,western", "Pan-India", "Live fusion band", "img/act-bombaytux.jpg", "", 1], ["Delhi Indie Project", "western", "Pan-India", "Indie", "img/act-delhiindie.jpg", "", 1], ["Kanishk Sethi", "solosing", "Pan-India", "Indie", "img/act-kanishk.jpg", "", 1], ["Kayan", "solosing", "Pan-India", "Indie", "img/act-kayan.jpg", "", 1], ["Suraj Mani", "solosing", "Pan-India", "Indie", "img/act-suraj.jpg", "", 1], ["Chugge Khan and Rajasthan Josh", "rajfusion", "Pan-India", "", "img/act-chugge.jpg", "", 1], ["Deene Khan", "rajfusion", "Pan-India", "", "img/act-deene.jpg", "", 1], ["Kamli Saga", "djband", "Pan-India", "", "img/act-kamli.jpg", "", 1], ["Rana Dholi (folk music and dance)", "rajfusion", "Pan-India", "", "img/act-ranadholi.jpg", "", 1], ["Sadho", "rajfusion", "Pan-India", "", "img/act-sadho.jpg", "", 1], ["Sawai Bhatt", "rajfusion,reality", "Pan-India", "", "img/act-sawai.jpg", "Indian Idol", 1], ["Ankur Chakravorty (violin, Mumbai)", "soloinst", "Pan-India", "", "img/act-ankurc.jpg", "", 1], ["Amaal Mallik", "solosing", "Pan-India", "", "img/act-amaal.jpg", "", 1], ["Anuv Jain", "solosing", "Pan-India", "", "img/act-anuv.jpg", "", 1], ["Lisa Mishra", "solosing", "Pan-India", "", "img/act-lisa.jpg", "", 1], ["Madari", "western", "Pan-India", "", "img/act-madari.jpg", "", 1], ["Osho Jain", "solosing", "Pan-India", "", "img/act-osho.jpg", "", 1], ["Prateek Kuhad", "solosing", "Pan-India", "", "img/act-prateek.jpg", "", 1], ["Ritviz", "solosing", "Pan-India", "", "img/act-ritviz.jpg", "", 1], ["Sharib Toshi", "solosing", "Pan-India", "", "img/act-sharibsolo.jpg", "", 1], ["Shirley Setia", "solosing", "Pan-India", "", "img/act-shirley.jpg", "", 1], ["Zaeden", "solosing", "Pan-India", "", "img/act-zaeden.jpg", "", 1], ["Daksh Band", "sufibolly", "Pan-India", "", "img/act-daksh.jpg", "", 1], ["Damsaaz", "sufibolly", "Pan-India", "", "img/act-damsaaz.jpg", "", 1], ["Jazba", "sufibolly", "Pan-India", "", "img/act-jazba.jpg", "", 1], ["Kavita Seth", "sufibolly", "Pan-India", "", "img/act-kavitaseth.jpg", "", 1], ["Kunaal Wason & Qawaals", "sufibolly", "Pan-India", "", "img/act-kunaal.jpg", "", 1], ["Mizaz", "sufibolly", "Pan-India", "", "img/act-mizaz.jpg", "", 1], ["Qaafila", "sufibolly", "Pan-India", "", "img/act-qaafila.jpg", "", 1], ["Rahul Rana (Saaz E Mehfil)", "sufibolly", "Pan-India", "", "img/act-rahulrana.jpg", "", 1], ["Shaheen Salmani", "sufibolly", "Pan-India", "", "img/act-shaheen.jpg", "", 1], ["The Frequency Project", "sufibolly", "Pan-India", "", "img/act-frequency.jpg", "", 1], ["Ulfat Band", "sufibolly", "Pan-India", "", "img/act-ulfat.jpg", "", 1], ["Qutbi Brothers (Arshad and Adnan Qutbi)", "sufiq", "Pan-India", "", "img/act-qutbi.jpg", "", 1], ["Haji Mohammad Idris", "sufiq", "Pan-India", "", "img/act-idris.jpg", "", 1], ["Hans Raj Hans", "sufiq", "Pan-India", "", "img/act-hansrajhans.jpg", "", 1], ["Nawaz Sabri", "sufiq", "Pan-India", "", "img/act-nawaz.jpg", "", 1], ["Nizami Bandhu", "sufiq", "Pan-India", "", "img/act-nizami.jpg", "", 1], ["Nizami Brothers", "sufiq", "Pan-India", "", "img/act-nizamibrothers.jpg", "", 1], ["Shadab Faridi", "sufiq", "Pan-India", "", "img/act-shadab.jpg", "", 1], ["Ustad Chand Nizami", "sufiq", "Pan-India", "", "img/act-chand.jpg", "", 1], ["Wadali Brothers", "sufiq", "Pan-India", "", "img/act-wadali.jpg", "", 1], ["Aflatunes Band", "western", "Pan-India", "", "img/act-aflatunes.jpg", "", 1], ["Best Kept Secret", "western", "Pan-India", "", "img/act-bks.jpg", "", 1], ["Lylaa x Soul", "western", "Pan-India", "", "img/act-lylaa.jpg", "", 1], ["Motherjane", "western", "Pan-India", "", "img/act-motherjane.jpg", "", 1], ["Abhinav Nagpal", "bollyrock", "Pan-India", "", "img/act-nagpal.jpg", "", 1], ["Abhinav Narula", "bollyrock", "Pan-India", "", "img/act-narula.jpg", "", 1], ["Himonshu Parikh", "bollyrock", "Pan-India", "", "img/act-himonshu.jpg", "", 1], ["Rajan Batra", "bollyrock", "Pan-India", "", "img/act-rajan.jpg", "", 1], ["Sameer Walizada", "bollyrock", "Pan-India", "", "img/act-sameer.jpg", "", 1], ["Sid K", "bollyrock", "Pan-India", "", "img/act-sidk.jpg", "", 1], ["Stuart DaCosta", "bollyrock", "Pan-India", "", "img/act-stuart.jpg", "", 1], ["Ash King", "live,celeb", "Pan-India", "", "img/act-ashking.jpg", "Celebrity artist", 1], ["Babbu Maan", "live,celeb", "Pan-India", "", "img/act-babbu.jpg", "Celebrity artist", 1], ["Gippy Grewal", "live,celeb", "Pan-India", "", "img/act-gippy.jpg", "Celebrity artist", 1], ["Manj Musik", "live,celeb", "Pan-India", "", "img/act-manj.jpg", "Celebrity artist", 1], ["Pav Dharia", "live,celeb", "Pan-India", "", "img/act-pav.jpg", "Celebrity artist", 1], ["Prem Dhillon", "live,celeb", "Pan-India", "", "img/act-prem.jpg", "Celebrity artist", 1], ["Rohanpreet Singh", "live,celeb", "Pan-India", "", "img/act-rohanpreet.jpg", "Celebrity artist", 1], ["Salman Ali", "live,celeb", "Pan-India", "", "img/act-salman.jpg", "Celebrity artist", 1], ["Vibhor Parashar", "live,celeb", "Pan-India", "", "img/act-vibhor.jpg", "Celebrity artist", 1], ["Jassi Gill & Babbal Rai", "duotrio,celeb", "Pan-India", "", "img/act-jassibabbal.jpg", "Celebrity artist", 1], ["SIRAHA Trio (Harmeet Manseta, U Rajesh, Sivamani)", "duotrio,celeb", "Pan-India", "", "img/act-siraha.jpg", "Celebrity artist", 1], ["The SIVAMANI Trio", "duotrio,celeb", "Pan-India", "", "img/act-sivamani.jpg", "Celebrity artist", 1], ["Twin Strings", "duotrio", "Pan-India", "", "img/act-twinstrings.jpg", "", 1], ["Nirakar", "jazz", "Pan-India", "Indo jazz band", "img/act-nirakar.jpg", "", 1], ["SIRAHA Trio", "jazz", "Pan-India", "", "", "", 1], ["Mangesh Desai", "magiccomedy", "Pan-India", "Magic and illusion", "img/act-mangesh.jpg", "", 1], ["Rakesh Syam", "magiccomedy", "Pan-India", "Magic and mentalism", "img/act-rakesh.jpg", "", 1], ["Suhani Shah (Ruhani Shah)", "magiccomedy,celeb", "Pan-India", "Mentalist", "img/act-suhani.jpg", "Celebrity mentalist", 1], ["Ankit Batra", "solosing", "Pan-India", "Musical pheras", "img/act-ankit.jpg", "", 1, ["pheras"]], ["Himanshu Sharma", "solosing", "Pan-India", "Musical pheras", "img/act-himanshu.jpg", "", 1, ["pheras"]], ["Mehul Pandit", "solosing", "Pan-India", "Musical pheras", "img/act-mehul.jpg", "", 1, ["pheras"]], ["Mohit Chopra", "solosing", "Pan-India", "Musical pheras", "img/act-mohit.jpg", "", 1, ["pheras"]], ["Sheena Chawla", "solosing", "Pan-India", "Musical pheras", "img/act-sheena.jpg", "", 1, ["pheras"]], ["Siddharth Mohan", "solosing", "Pan-India", "Musical pheras", "img/act-siddharth.jpg", "", 1, ["pheras"]], ["Anupam Singh (Wow Music)", "solosing", "Pan-India", "", "img/act-anupam.jpg", "", 1], ["Urvashi Radadiya", "devotional,solosing", "Pan-India", "Gujarati folk singer", "img/act-urvashi.jpg", "", 1]];

// Profile pop-up content. One entry per act: "Act name exactly as on the site":
//   either [paragraph, ...]  or  {about: [paragraph, ...], facts: [[label, value], ...], why: [reason, ...]}
// why = 2 to 4 short reasons to book the act, shown as a "Why book" list on its page.
// Facts show as small boxes under the description. Never put phone numbers, emails or fees here.
window.AOS_BIOS = {
  "The Bombay Tux": {
    about: [
      "The Bombay Tux is a Mumbai-based multi-genre fusion band of four exceptionally talented musicians from diverse musical backgrounds. The band has made a strong mark in the entertainment industry with their peppy covers and groovy original compositions, all performed with their signature style and panache.",
      "The band features Dani (producer and keyboardist), Rahul (guitarist and producer), Galvin (guitarist and bassist) and Kaushal (producer and singer-songwriter). Together, they create a vibrant musical experience that captivates audiences.",
      "Known for their stylish stage presence and signature tuxedo look, The Bombay Tux delivers high-energy performances across genres including Bollywood, English pop and rock, blues and more. Their versatile repertoire makes them a perfect choice for sangeet ceremonies, wedding receptions, corporate events, college fests and premium live shows.",
      "The Bombay Tux is available for booking across India. Use Check availability on WhatsApp to confirm your date and event requirements."
    ],
    facts: [
      ["Performance length", "30 to 120 minutes"],
      ["Team size", "4 core members, more added if needed"],
      ["Languages", "English, Hindi"],
      ["Based in", "Mumbai"],
      ["Open to travel", "Worldwide"]
    ],
    why: [
      "A tight four-piece of producers and musicians whose stylish tuxedo look and polished stage presence suit premium events.",
      "Covers Bollywood, English pop and rock and blues, so mixed family and corporate crowds all get songs they know.",
      "A strong fit for sangeets, wedding receptions, corporate events, college fests and premium live shows."
    ]
  },
  "Sonu Nigam": {
    about: [
      "Sonu Nigam is one of India's best-known playback singers, also working as a music director, actor and dubbing artist. He began singing on stage with his father, the singer Agam Kumar Nigam, as a child, and trained in Hindustani classical music under Ustad Ghulam Mustafa Khan before moving to Mumbai to build his career.",
      "His breakthrough came with \"Sandese Aate Hain\" from Border (1997). He has since recorded thousands of songs across many Indian languages, released pop albums and received the Padma Shri in 2022.",
      "Sonu Nigam is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Sandese Aate Hain, Abhi Mujh Mein Kahin"],
      ["Languages", "Hindi, Kannada, Bengali and many more"]
    ],
    why: [
      "One of India's best-known playback voices, so the name alone lifts a wedding, gala or brand evening.",
      "Decades on stage and thousands of recorded songs make a full set of recognisable hits easy to build.",
      "Suits a grand reception, corporate gala or concert-style night where the headline act matters."
    ]
  },
  "Shreya Ghoshal": {
    about: [
      "Shreya Ghoshal is one of India's most celebrated playback singers. Born in Berhampore, West Bengal, she wanted to be a singer from childhood and made her Bollywood debut with Devdas (2002), a performance that won her both a National Film Award and a Filmfare Award for Best Female Playback Singer.",
      "She has since recorded songs in around twenty languages, including \"Barso Re\", \"Deewani Mastani\", \"Ghoomar\" and \"Samjhawan\", won multiple National Film Awards, judged television music shows and performs in concerts around the world.",
      "Shreya Ghoshal is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Barso Re, Deewani Mastani, Ghoomar"],
      ["Languages", "Hindi, Bengali, Tamil, Telugu and more"]
    ],
    why: [
      "A National Film Award winner whose songs are known across generations, which makes her a true headline act.",
      "Her repertoire spans romantic, classical-leaning and dance songs in many languages, so one set can please a mixed audience.",
      "Well suited to weddings, receptions and large brand or award events."
    ]
  },
  "Sunidhi Chauhan": {
    about: [
      "Sunidhi Chauhan is a playback singer from New Delhi who began singing as a child and became a household name after the Mast soundtrack in 1999. She has gone on to sing for hundreds of films and is known for her powerful, versatile voice.",
      "Her best-known songs include \"Dhoom Machale\", \"Beedi\", \"Sheila Ki Jawani\" and \"Kamli\". She has won Filmfare Awards and other honours and is a regular on live stages.",
      "Sunidhi Chauhan is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Dhoom Machale, Beedi, Sheila Ki Jawani"],
      ["Languages", "Hindi and several other Indian languages"]
    ],
    why: [
      "Known for a powerful, versatile voice and a catalogue of dance and party hits.",
      "Regular on live stages, she brings energy that keeps a large crowd on its feet.",
      "A strong choice for sangeets, receptions, New Year parties and corporate shows."
    ]
  },
  "Shaan": {
    about: [
      "Shaan (Shantanu Mukherjee) is a playback singer, composer and television host from a musical family: his grandfather was a lyricist and his father a music director. He began his playback career in 1999 with Pyaar Mein Kabhi Kabhi.",
      "He is known for songs such as \"Chand Sifarish\" from Fanaa, \"Jab Se Tere Naina\" from Saawariya and \"Behti Hawa Sa Tha Woh\" from 3 Idiots. He has released independent albums, including Naujawan, and has been a coach on The Voice India.",
      "Shaan is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Chand Sifarish, Jab Se Tere Naina, Behti Hawa Sa Tha Woh"],
      ["Languages", "Hindi, Bengali, Kannada, Telugu"]
    ],
    why: [
      "A familiar voice with hits like \"Chand Sifarish\" and \"Jab Se Tere Naina\", so guests sing along.",
      "His mix of romantic and upbeat songs works from a cocktail hour to a late dance floor.",
      "Suits weddings, receptions, corporate evenings and festival stages."
    ]
  },
  "Armaan Malik": {
    about: [
      "Armaan Malik is a Mumbai-born singer, songwriter and record producer, and the younger brother of composer Amaal Malik. He has sung for many Hindi films, including the Jai Ho title track and M.S. Dhoni: The Untold Story, and has also worked in Telugu, Kannada and other languages.",
      "He received the Filmfare R. D. Burman Award for New Music Talent in 2016, sang Hindi songs for The Lion King and voiced Aladdin in the Hindi version of the film. He also releases independent and English-language singles.",
      "Armaan Malik is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Jai Ho (title track), M.S. Dhoni: The Untold Story"],
      ["Languages", "Hindi, English, Telugu, Kannada"]
    ],
    why: [
      "A popular young playback singer whose songs appeal strongly to a younger crowd.",
      "Also releases English and independent music, giving his sets range.",
      "Works for sangeets, college fests, brand launches and receptions."
    ]
  },
  "Aditya Narayan": {
    about: [
      "Aditya Narayan is a singer, television host and actor, and the son of playback singer Udit Narayan. He began performing as a child and later became one of Indian television's best-known music-show hosts, fronting Indian Idol, Sa Re Ga Ma Pa and other singing shows.",
      "Aditya Narayan is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Hosting Indian Idol and music reality shows"]
    ],
    why: [
      "A seasoned TV host as well as a singer, so he can sing and keep a crowd engaged between songs.",
      "His hosting experience on Indian Idol and other shows suits events with a programme to run.",
      "A good fit for award nights, corporate shows and large celebrations."
    ]
  },
  "Amit Trivedi": {
    about: [
      "Amit Trivedi is a music composer, singer and lyricist from Mumbai who began his career writing jingles. He made his film debut with Aamir (2008) and broke through with the Dev.D soundtrack, which won him a National Film Award for Best Music Direction.",
      "His film work includes Queen, Dear Zindagi and Andhadhun, and he runs his own independent label, AT Azaad.",
      "Amit Trivedi is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Dev.D, Queen, Dear Zindagi, Andhadhun"],
      ["Languages", "Hindi"]
    ],
    why: [
      "The composer behind Dev.D, Queen and Andhadhun, and a National Film Award winner for music direction.",
      "Performs his own compositions, so the set feels distinctive rather than a standard playlist.",
      "Suits concert-style evenings, brand events and receptions that want a music-led headline."
    ]
  },
  "Darshan Raval": {
    about: [
      "Darshan Raval is a singer, composer and songwriter from Ahmedabad, Gujarat. He first gained national attention on the talent show India's Raw Star in 2014 and has since become a popular film playback singer and pop artist.",
      "His film songs include \"Ek Ladki Ko Dekha Toh Aisa Laga\", \"Chogada\" from Loveyatri, \"Kabhi Tumhe\" from Shershaah and \"Mehrama\" from Love Aaj Kal, and his independent singles include \"Tera Zikr\" and \"Asal Mein\".",
      "Darshan Raval is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Chogada, Kabhi Tumhe, Mehrama, Tera Zikr"],
      ["Languages", "Hindi, Gujarati"]
    ],
    why: [
      "His songs such as \"Chogada\" and \"Kabhi Tumhe\" are well known among younger audiences.",
      "Writes and releases his own music, so shows mix film hits with independent favourites.",
      "Works for sangeets, college fests, brand events and large receptions."
    ]
  },
  "Jonita Gandhi": {
    about: [
      "Jonita Gandhi is a playback singer born in New Delhi and raised in Canada, trained in both Western and Hindustani classical singing. She began with YouTube covers before making her film debut with the title song of Chennai Express (2013).",
      "She is known for \"The Breakup Song\" from Ae Dil Hai Mushkil and the Tamil hit \"Arabic Kuthu\" from Beast, for which she won the SIIMA Award for Best Playback Singer, Female (Tamil), and has worked with A. R. Rahman.",
      "Jonita Gandhi is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Chennai Express title track, The Breakup Song, Arabic Kuthu"],
      ["Languages", "Hindi, Tamil"]
    ],
    why: [
      "A trained singer with big hits like \"The Breakup Song\" and \"Arabic Kuthu\".",
      "Moves easily between Hindi and Tamil crowd-pleasers, so a mixed audience stays engaged.",
      "A strong pick for sangeets, receptions and brand evenings."
    ]
  },
  "Palak Muchhal": {
    about: [
      "Palak Muchhal is a playback singer and lyricist from Indore, widely known for her film songs and for her charity work. Her \"Save Little Hearts\" shows have raised funds for children needing heart surgery.",
      "Her songs include \"Kaun Tujhe\" from M.S. Dhoni: The Untold Story, which won her a Star Screen Award in 2017, tracks from Aashiqui 2 and \"Naiyo Lagda\" from Kisi Ka Bhai Kisi Ki Jaan.",
      "Palak Muchhal is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Kaun Tujhe, Aashiqui 2 songs, Naiyo Lagda"],
      ["Languages", "Hindi, Kannada"]
    ],
    why: [
      "A well-loved playback voice with hits such as \"Kaun Tujhe\" and \"Naiyo Lagda\".",
      "Known for her charity work, which many clients value in a headline artist.",
      "Suits weddings, receptions and family-friendly celebrations."
    ]
  },
  "Rahul Vaidya": {
    about: [
      "Rahul Vaidya is a singer and composer from Nagpur who came to national attention as second runner-up on the first season of Indian Idol. His debut album, Tera Intezar, followed in 2005 with music by Sajid-Wajid.",
      "He has sung for Hindi films and appeared on reality television, finishing as first runner-up on Bigg Boss 14 and reaching the finals of Khatron Ke Khiladi 11.",
      "Rahul Vaidya is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Indian Idol season 1, Bigg Boss 14"],
      ["Languages", "Hindi"]
    ],
    why: [
      "Familiar to TV audiences from Indian Idol and Bigg Boss 14, so guests recognise him on sight.",
      "A singer with film and independent songs, giving sets variety.",
      "Suits sangeets, receptions and corporate or festive evenings."
    ]
  },
  "Nakash Aziz": {
    about: [
      "Nakash Aziz is a singer and composer from Mangaluru who started out making jingles and devotional albums, and worked as an assistant to A. R. Rahman on films including Highway and Raanjhanaa before establishing himself as a playback singer.",
      "He is known for high-energy numbers such as \"Jabra Fan\" from Fan, \"Dhating Nach\" and \"Sari Ke Fall Sa\", and sings in Hindi, Telugu, Tamil, Kannada, Bengali and Marathi.",
      "Nakash Aziz is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Jabra Fan, Dhating Nach, Sari Ke Fall Sa"],
      ["Languages", "Hindi, Telugu, Tamil, Kannada, Bengali, Marathi"]
    ],
    why: [
      "Known for high-energy numbers like \"Jabra Fan\" and \"Dhating Nach\" that fill a dance floor.",
      "Sings in many languages, which helps at weddings with guests from different regions.",
      "Ideal for sangeets, receptions and college fests."
    ]
  },
  "Neha Bhasin": {
    about: [
      "Neha Bhasin is a singer, songwriter and performer who won Coke [V] Popstars in 2002 and was a member of the pop group Viva! before building a career in film music.",
      "She is best known for \"Jag Ghoomeya\" from Sultan and \"Dhunki\" from Mere Brother Ki Dulhan, performs Punjabi folk-inspired numbers and releases independent songs. She has also appeared on Bigg Boss.",
      "Neha Bhasin is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Jag Ghoomeya, Dhunki"],
      ["Languages", "Hindi, Punjabi, Tamil"]
    ],
    why: [
      "A strong live performer, known for \"Jag Ghoomeya\" and Punjabi folk renditions.",
      "Her pop background and TV profile bring stage presence and crowd energy.",
      "Suits sangeets, cocktail nights and brand events."
    ]
  },
  "Meet Bros": {
    about: [
      "Meet Bros is a composer-singer duo of brothers Manmeet and Harmeet Singh from Gwalior, formerly known as Meet Bros Anjjan. They began with independent hits before breaking through in films.",
      "Their best-known songs include \"Baby Doll\" from Ragini MMS 2 and \"Chittiyaan Kalaiyaan\" from Roy, and they continue to release independent and regional music.",
      "Meet Bros is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Baby Doll, Chittiyaan Kalaiyaan"],
      ["Languages", "Hindi"]
    ],
    why: [
      "Composers of \"Baby Doll\" and \"Chittiyaan Kalaiyaan\", so the crowd knows the songs.",
      "A brother act with a party-ready catalogue that suits dance-floor sets.",
      "A good fit for sangeets, receptions, New Year parties and club-style events."
    ]
  },
  "Ash King": {
    about: [
      "Ash King (Ashutosh Ganguly) is a London-raised singer, songwriter and composer of Bengali and Gujarati origin. He made his Hindi film debut with Delhi-6 and has since become a familiar playback voice.",
      "His songs include \"I Love You\" from Bodyguard, \"Aunty Ji\" from Ek Main Aur Ekk Tu, \"Baarish\" from Half Girlfriend and \"Meherban Hua\" from Bang Bang!.",
      "Ash King is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "I Love You, Baarish, Meherban Hua"],
      ["Languages", "Hindi, English"]
    ],
    why: [
      "A voice behind hits like \"Baarish\" and \"Meherban Hua\", with a soulful, romantic sound.",
      "Raised in London, he brings a polished English and Hindi mix.",
      "Suits receptions, cocktail nights and corporate evenings."
    ]
  },
  "Salman Ali": {
    about: [
      "Salman Ali is a singer from Punhana in Haryana's Mewat region, from a family of singers. He was first runner-up on Sa Re Ga Ma Pa Lil Champs in 2011 and won the tenth season of Indian Idol in December 2018.",
      "He has since sung for films, released songs with Salim-Sulaiman and appeared as a captain on Superstar Singer.",
      "Salman Ali is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Winner, Indian Idol 10"],
      ["Languages", "Hindi"]
    ],
    why: [
      "Winner of Indian Idol 10, so he arrives with a ready audience and strong live credentials.",
      "From a family of singers, he has the training to carry a full set.",
      "Works for weddings, receptions and festive or corporate shows."
    ]
  },
  "Rohanpreet Singh": {
    about: [
      "Rohanpreet Singh is a Punjabi singer from Patiala. He was runner-up on Rising Star season 2 and has released Punjabi and Hindi songs and music videos, including \"Bang Gang\", \"Hello Hi\" and \"Sohni Lagdi\".",
      "Rohanpreet Singh is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Rising Star runner-up, Bang Gang, Sohni Lagdi"],
      ["Languages", "Punjabi, Hindi"]
    ],
    why: [
      "A Punjabi singer known for \"Bang Gang\" and \"Sohni Lagdi\", popular with younger crowds.",
      "Rising Star finalist and TV host, comfortable on a large stage.",
      "Suits sangeets, college fests and Punjabi-themed celebrations."
    ]
  },
  "AP Dhillon": {
    about: [
      "AP Dhillon (Amritpal Singh Dhillon) is a Punjabi singer, rapper and producer who grew up in Punjab and moved to Canada as a student. He broke through in 2020 with \"Brown Munde\", released independently with his label Run-Up Records, and the song became a global anthem for the Punjabi diaspora.",
      "His other well-known tracks include \"Excuses\", \"Insane\", \"With You\" and \"Majhail\". In 2023 he became the first Punjabi Canadian to perform at the Juno Awards.",
      "AP Dhillon is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Brown Munde, Excuses, Insane, With You"],
      ["Languages", "Punjabi"]
    ],
    why: [
      "A global Punjabi act with \"Brown Munde\", which guests know instantly.",
      "First Punjabi Canadian to perform at the Juno Awards, so a headline draw for big events.",
      "A strong fit for college fests, brand launches and high-energy parties."
    ]
  },
  "Badshah": {
    about: [
      "Badshah (Aditya Prateek Singh Sisodia) is a rapper, singer, songwriter and producer from Delhi. He began writing rap while studying at Punjab Engineering College and is one of the best-known voices of Indian hip hop and pop, working in Hindi, Punjabi and Haryanvi.",
      "His songs include \"DJ Waley Babu\", \"Kar Gayi Chull\" from Kapoor & Sons, \"Proper Patola\" from Namaste England, \"Paagal\" and \"Garmi\" from Street Dancer 3D. He is also a familiar face on television as a judge on talent shows.",
      "Badshah is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "DJ Waley Babu, Kar Gayi Chull, Paagal, Garmi"],
      ["Languages", "Hindi, Punjabi, Haryanvi"]
    ],
    why: [
      "Hits like \"DJ Waley Babu\" and \"Kar Gayi Chull\" guarantee a loud, singalong dance floor.",
      "One of India's best-known rappers, he brings genuine star power.",
      "Ideal for sangeets, college fests, New Year parties and brand events."
    ]
  },
  "Yo Yo Honey Singh": {
    about: [
      "Yo Yo Honey Singh (Hirdesh Singh) is a rapper, music producer, singer and actor from Punjab, credited with bringing hip hop and Punjabi rap into the mainstream. He studied in New Delhi and built his career as a bhangra and pop producer before moving into Bollywood.",
      "His best-known songs include \"Angreji Beat\", \"Lungi Dance\", \"Dope Shope\", \"Desi Kalakaar\", \"Blue Eyes\" and \"Dheere Dheere\".",
      "Yo Yo Honey Singh is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Angreji Beat, Lungi Dance, Blue Eyes, Desi Kalakaar"],
      ["Languages", "Punjabi, Hindi"]
    ],
    why: [
      "A pioneer of Punjabi rap with party anthems like \"Angreji Beat\" and \"Dheere Dheere\".",
      "His catalogue is built for dance floors, so energy stays high from the first song.",
      "Suits sangeets, college fests, New Year events and brand launches."
    ]
  },
  "Daler Mehndi": {
    about: [
      "Daler Mehndi is a Punjabi singer, songwriter and record producer who helped take bhangra pop to audiences around the world. His debut album Bolo Ta Ra Ra became a landmark of independent Indian pop, and \"Tunak Tunak Tun\" remains one of the most recognisable Punjabi songs.",
      "His other well-known songs include \"Sajan Mere Satrangiya\", \"Dard Di Rab Rab\" and \"Ho Jayegi Balle Balle\", and he has sung for films including Rang De Basanti and Dangal.",
      "Daler Mehndi is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Tunak Tunak Tun, Bolo Ta Ra Ra, Ho Jayegi Balle Balle"],
      ["Languages", "Punjabi, Hindi"]
    ],
    why: [
      "\"Tunak Tunak Tun\" is one of the most recognisable Punjabi songs, an instant crowd-pleaser.",
      "Decades of bhangra-pop stage experience bring easy audience participation.",
      "A great pick for sangeets, baraats and big celebrations."
    ]
  },
  "B Praak": {
    about: [
      "B Praak (Pratik Bachan) is a singer, music director and composer from Chandigarh working in Punjabi and Hindi music. He began as a producer, often working with lyricist Jaani, and became known as a singer with songs such as \"Mann Bharrya\", \"Qismat\" and \"Filhall\".",
      "He won a National Film Award for Best Male Playback Singer for \"Teri Mitti\" from Kesari, and later moved into music direction for Hindi films.",
      "B Praak is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Teri Mitti, Mann Bharrya, Filhall, Qismat"],
      ["Languages", "Punjabi, Hindi"]
    ],
    why: [
      "A National Film Award winner for \"Teri Mitti\", with emotional and romantic songs guests know.",
      "Also a composer, so his shows can mix soulful and upbeat music.",
      "Suits sangeets, receptions and concert-style evenings."
    ]
  },
  "Jasmine Sandlas": {
    about: [
      "Jasmine Sandlas is a Punjabi singer and songwriter, born in Jalandhar and raised in California. She released her first album, The Diamond, in 2008, and her 2012 album Gulabi, made with rapper Bohemia, brought her wider recognition in Punjabi music.",
      "Her Bollywood break came with \"Yaar Na Miley\" from Kick. She is also known for \"Illegal Weapon\" with Garry Sandhu, \"Bamb Jatt\" with Amrit Maan and the experimental album TGPE.",
      "Jasmine Sandlas is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Yaar Na Miley, Illegal Weapon, Bamb Jatt"],
      ["Languages", "Punjabi, Hindi"]
    ],
    why: [
      "A powerful voice with Punjabi hits and Bollywood credits such as \"Yaar Na Miley\".",
      "Known for bold, high-energy stage performances.",
      "Works for sangeets, college fests and club-style nights."
    ]
  },
  "Jassi Gill": {
    about: [
      "Jassie Gill is a Punjabi and Hindi singer and actor from Ludhiana. He released his debut album Batchmate in 2011, and is known for songs such as \"Lancer\", \"Nikle Currant\" and \"Bapu Zimidar\".",
      "He entered Punjabi cinema with Mr & Mrs 420 (2014) and Hindi cinema with Happy Phirr Bhag Jayegi (2018), and has since appeared in films including Panga and Kisi Ka Bhai Kisi Ki Jaan.",
      "Jassi Gill is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Nikle Currant, Lancer, Bapu Zimidar"],
      ["Languages", "Punjabi, Hindi"]
    ],
    why: [
      "A popular Punjabi singer and actor, so his name draws fans as well as guests.",
      "Hits like \"Nikle Currant\" and \"Lancer\" suit a party mood.",
      "Suits sangeets, college fests and Punjabi weddings."
    ]
  },
  "Gippy Grewal": {
    about: [
      "Gippy Grewal is a Punjabi singer, actor and filmmaker from Ludhiana. He began with the album Chakkh Lai, and his collaboration with Yo Yo Honey Singh, \"Angreji Beat\", became a hit that also featured in the Bollywood film Cocktail.",
      "He is a major name in Punjabi cinema, with films such as Carry On Jatta, and has also acted in Hindi films. He runs the production company Humble Motion Pictures and directed Ardaas.",
      "Gippy Grewal is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Angreji Beat, Phulkari, Carry On Jatta"],
      ["Languages", "Punjabi, Hindi"]
    ],
    why: [
      "A Punjabi star of music and cinema, behind the hit \"Angreji Beat\".",
      "His film fame brings extra audience recognition.",
      "A strong fit for Punjabi weddings, sangeets and brand events."
    ]
  },
  "Babbu Maan": {
    about: [
      "Babbu Maan (Tejinder Singh Maan) is a Punjabi singer-songwriter, music director, actor and film producer, known for writing his own lyrics. He made his debut in 1999 with Tu Meri Miss India and has since become one of the most popular names in Punjabi music.",
      "His albums include Saaun Di Jhadi, Ohi Chann Ohi Rataan and Pyaas, one of the best-selling Punjabi albums of its time, and he has also acted in and composed music for films such as Hawayein and Rabb Ne Banaiyan Jodiean.",
      "Babbu Maan is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Pyaas, Saaun Di Jhadi, Ohi Chann Ohi Rataan"],
      ["Languages", "Punjabi"]
    ],
    why: [
      "Writes his own lyrics and has a long-loved Punjabi catalogue.",
      "Pyaas was among the best-selling Punjabi albums of its time.",
      "Suits Punjabi weddings, cultural evenings and large celebrations."
    ]
  },
  "Garry Sandhu": {
    about: [
      "Garry Sandhu is a Punjabi singer, songwriter, rapper and actor from Jalandhar, who began his singing career in 2010 and built his audience in the United Kingdom. He won Best Newcomer and Best Male Act at the Brit Asia TV Music Awards in 2011.",
      "His hits include \"Illegal Weapon\" with Jasmine Sandlas, \"Yeah Baby\" (also used in the film De De Pyaar De as \"Hauli Hauli\") and \"Banda Ban Ja\". He runs his own label, Fresh Media Records.",
      "Garry Sandhu is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Illegal Weapon, Yeah Baby, Banda Ban Ja"],
      ["Languages", "Punjabi, Hindi"]
    ],
    why: [
      "Hits like \"Illegal Weapon\" and \"Yeah Baby\" keep a dance floor busy.",
      "Established UK Asian audience and Bollywood crossover add polish.",
      "Ideal for sangeets, receptions and Punjabi parties."
    ]
  },
  "Amrit Maan": {
    about: [
      "Amrit Maan is a Punjabi singer, songwriter and actor from Goniana Mandi, Punjab. He began as a songwriter, writing \"Jatt Fire Karda\" for Diljit Dosanjh, and released his own debut single, \"Desi Da Drum\", in 2015.",
      "He is known for songs including \"Bambiha Bole\", \"Kaali Camaro\", \"Bamb Jatt\" and \"Trending Nakhra\", and has acted in Punjabi films such as Channa Mereya.",
      "Amrit Maan is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Bambiha Bole, Kaali Camaro, Bamb Jatt"],
      ["Languages", "Punjabi"]
    ],
    why: [
      "Known for energetic songs like \"Bambiha Bole\" and \"Bamb Jatt\" that younger guests love.",
      "Also an actor, giving him easy stage charisma.",
      "Suits sangeets, college fests and Punjabi celebrations."
    ]
  },
  "Ranjit Bawa": {
    about: [
      "Ranjit Bawa is a Punjabi singer and actor from Gurdaspur. He became known through \"Jatt Di Akal\" from his debut album Mitti Da Bawa, which won Best World Album at the Brit Asia TV Music Awards.",
      "His other songs include \"Yaari Chandigarh Waliye\" and \"Impress\", and he has acted in Punjabi films including Toofan Singh and High End Yaariyaan.",
      "Ranjit Bawa is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Jatt Di Akal, Yaari Chandigarh Waliye, Impress"],
      ["Languages", "Punjabi"]
    ],
    why: [
      "\"Jatt Di Akal\" is a Punjabi favourite with Brit Asia award recognition.",
      "A singer-actor with a strong rural-Punjabi appeal.",
      "A good fit for Punjabi weddings, sangeets and cultural events."
    ]
  },
  "Parmish Verma": {
    about: [
      "Parmish Verma is a Punjabi singer, rapper, actor and director from Patiala. He began as a music video director, then moved into acting with Rocky Mental (2017) and released his first singles the same year, including \"Le Chakk Main Aa Gaya\" and \"Gaal Ni Kadni\".",
      "He has acted in films such as Singham and Dil Diyan Gallan, which he also wrote and directed.",
      "Parmish Verma is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Le Chakk Main Aa Gaya, Gaal Ni Kadni, Rocky Mental"],
      ["Languages", "Punjabi"]
    ],
    why: [
      "A singer, rapper and actor, so his shows blend music and screen-star appeal.",
      "Songs like \"Gaal Ni Kadni\" suit a high-energy crowd.",
      "Works for sangeets, college fests and club-style events."
    ]
  },
  "Sunanda Sharma": {
    about: [
      "Sunanda Sharma is a Punjabi pop singer and actress who first gained attention by posting cover versions on YouTube. Her debut single was \"Billi Akh\", and she has since had hits including \"Patake\", \"Morni\", \"Sandal\" and \"Jaani Tera Naa\".",
      "She made her acting debut in the Punjabi film Sajjan Singh Rangroot (2018) and has sung with B Praak and Tanishk Bagchi.",
      "Sunanda Sharma is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Jaani Tera Naa, Patake, Morni, Sandal"],
      ["Languages", "Punjabi"]
    ],
    why: [
      "Punjabi pop hits like \"Jaani Tera Naa\" and \"Morni\" are familiar to younger audiences.",
      "She began on YouTube covers and builds sets around her pop songs.",
      "Suits sangeets, mehendis and party evenings."
    ]
  },
  "Kaur B": {
    about: [
      "Kaur B (Baljinder Kaur) is a Punjabi pop singer who made her debut with \"Just Desi\" in 2013 and became widely known for songs such as \"Paranda\", \"Kaniyan\", \"Mittran De Boot\" and \"Velly Jatt\".",
      "She has collaborated with artists including Ranjit Bawa and Dilpreet Dhillon, and also releases devotional songs.",
      "Kaur B is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Paranda, Kaniyan, Mittran De Boot"],
      ["Languages", "Punjabi, Hindi"]
    ],
    why: [
      "Known for upbeat Punjabi pop like \"Paranda\" and \"Mittran De Boot\".",
      "Also performs devotional songs, adding range for family events.",
      "Suits sangeets, mehendis and Punjabi celebrations."
    ]
  },
  "Miss Pooja": {
    about: [
      "Miss Pooja (Gurinder Kaur Kainth) is a Punjabi singer and actress known for bhangra, pop and folk, and often called the \"Queen of Duets\" for her many duets with male Punjabi singers. She began her professional career in 2006 with the duet \"Jaan Ton Piyari\".",
      "Her songs include \"Wrong Number\", \"Prince N Pooja\" and \"Sohnea\", and she crossed over to Bollywood with \"Second Hand Jawaani\" from Cocktail. She won Best International Act at the UK Asian Music Awards.",
      "Miss Pooja is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Second Hand Jawaani, Wrong Number, Sohnea"],
      ["Languages", "Punjabi, Hindi"]
    ],
    why: [
      "Known as the Queen of Duets, with a bhangra and pop catalogue that fills a floor.",
      "Crossed over to Bollywood with \"Second Hand Jawaani\".",
      "A natural fit for Punjabi weddings, sangeets and parties."
    ]
  },
  "Aastha Gill": {
    about: [
      "Aastha Gill is a Delhi-born singer and songwriter known for Bollywood and Punjabi pop. She made her film debut with \"Dhup Chik\" in Fugly (2014) and became widely known for \"DJ Waley Babu\" and \"Abhi Toh Party Shuru Hui Hai\", both with Badshah.",
      "Her film songs include \"Proper Patola\" from Namaste England, \"Kamariya\" from Stree and \"Happy Happy\" from Blackmail, alongside independent singles such as \"Buzz\" and \"Hermosa\".",
      "Aastha Gill is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "DJ Waley Babu, Proper Patola, Kamariya, Buzz"],
      ["Languages", "Hindi, Punjabi"]
    ],
    why: [
      "Voice behind \"DJ Waley Babu\" and \"Proper Patola\", which instantly lift a crowd.",
      "Equally at home with Bollywood and Punjabi pop.",
      "Suits sangeets, club-style nights and corporate parties."
    ]
  },
  "Baani Sandhu": {
    about: [
      "Baani Sandhu (Rupinder Kaur Sandhu) is a Punjabi singer and actress who studied computer science engineering at Panjab University while pursuing music. Her career began in 2018 with \"Fauji Di Bandook\", and she is best known for \"8 Parche\".",
      "Her other songs include \"Photo\", \"Sarpanchi\", \"Khani Jatti Di\" and \"Punjaban\", and she has collaborated with Dilpreet Dhillon on tracks such as \"Gunday Ik Vaar Fer\". She also acts in Punjabi films.",
      "Baani Sandhu is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "8 Parche, Fauji Di Bandook, Photo"],
      ["Languages", "Punjabi"]
    ],
    why: [
      "Best known for \"8 Parche\", her Punjabi breakout song.",
      "A young Punjabi singer-actress with strong appeal for younger guests.",
      "Suits sangeets, college fests and Punjabi celebrations."
    ]
  },
  "Gurdeep Mehndi": {
    about: [
      "Gurdeep Mehndi is a Delhi-born Punjabi singer, actor and music director, and the son of Daler Mehndi. He has been building his own path since releasing \"Saheli\" with Bohemia in 2014, and his Gurdeepmix project blends rock, funk, blues and jazz with Sufi and Punjabi folk.",
      "He has acted in films including Bala and Meri Shadi Karao, and has recorded a duet with his father on \"Na Na Na\".",
      "Gurdeep Mehndi is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Saheli, Kangna Tera Ni, Gurdeepmix"],
      ["Languages", "Punjabi, Hindi"]
    ],
    why: [
      "From the Mehndi family and a performer in his own right, blending rock and jazz with Sufi and Punjabi folk.",
      "Brings a different, contemporary take on Punjabi sound.",
      "Suits sangeets, receptions and youth-focused events."
    ]
  },
  "Navraj Hans": {
    about: [
      "Navraj Hans is a singer and actor from Jalandhar, Punjab, and the son of singer Hans Raj Hans. He has sung playback for many Bollywood and Punjabi films, including \"Jind Meriye\" from Purani Jeans, and has appeared in Punjabi films such as Punjabian Da King and Canada Di Flight.",
      "His other songs include \"Saiyaan\", \"Jhootha Kahin Ka\" and \"Thok De Killi\", and he released the album Hans Brothers with his brother Yuvraaj Hans.",
      "Navraj Hans is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Jind Meriye, Saiyaan, Jhootha Kahin Ka"],
      ["Languages", "Punjabi, Hindi"]
    ],
    why: [
      "A singer-actor from a respected musical family with Bollywood and Punjabi film credits.",
      "Songs like \"Jind Meriye\" give a warm, romantic option alongside party tracks.",
      "Suits Punjabi weddings, sangeets and receptions."
    ]
  },
  "Rupali Jagga": {
    about: [
      "Rupali Jagga is a pop and playback singer who trained in classical music in the Agra Gharana and came up through television talent shows, including Bhajan Samrat and Indian Idol. She made her Bollywood debut with \"Tere Bin Jeena Kya\" from Operation Romeo.",
      "She has worked with Himesh Reshammiya on songs such as \"Piyaa Rangeela\" and \"Aajaa Bheeg Le Piyyaa\" and has released Hindi-Punjabi singles including \"Tere Piche\".",
      "Rupali Jagga is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Tere Bin Jeena Kya, Piyaa Rangeela, Tere Piche"],
      ["Languages", "Hindi, Punjabi"]
    ],
    why: [
      "Classically trained and a Bollywood playback singer, so strong vocals come standard.",
      "Hindi-Punjabi songs like \"Tere Piche\" suit mixed audiences.",
      "A good fit for receptions, cocktail nights and corporate events."
    ]
  },
  "Sara Gurpal": {
    about: [
      "Sara Gurpal is a Punjabi singer, actress and model from Haryana. She began as a model in 2013 with Ranjit Bawa's \"Jean\", made her film debut in Manje Bistre (2017) and has appeared in several Punjabi films.",
      "Her songs include \"Slow Motion\", \"Lagdi Att\" and \"Ki Main Kalli Aa\". She was also a contestant on Bigg Boss 14.",
      "Sara Gurpal is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Slow Motion, Lagdi Att, Ki Main Kalli Aa"],
      ["Languages", "Punjabi"]
    ],
    why: [
      "A Punjabi singer, actress and model whose songs like \"Slow Motion\" are familiar to young fans.",
      "TV profile from Bigg Boss 14 adds crowd interest.",
      "Suits sangeets, college fests and brand events."
    ]
  },
  "Yuvraaj Hans": {
    about: [
      "Yuvraaj Hans is a Punjabi actor and singer from Jalandhar, the son of singer Hans Raj Hans and the younger brother of Navraj Hans. He made his film debut in Yaar Annmulle (2011), which did well and earned him a debut award.",
      "As a singer he released his debut album Yuvraj in 2015, which included the song \"Paani\", and has since appeared in Punjabi films including Mr & Mrs 420 and Lahoriye.",
      "Yuvraaj Hans is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Yaar Annmulle, Paani"],
      ["Languages", "Punjabi"]
    ],
    why: [
      "A Punjabi actor-singer from a well-known musical family.",
      "Hit song \"Paani\" and film fame give him recognisable appeal.",
      "Suits Punjabi weddings, sangeets and cultural events."
    ]
  },
  "Manj Musik": {
    about: [
      "Manj Musik (Manjeet Singh Ral) is a British Indian composer, singer and music producer. He was one of the composers of the bhangra group RDB, formed with his brothers, before starting his solo career in 2014 and winning Best Urban Single at the Brit Asia TV Music Awards.",
      "He has composed for Hindi films, including \"Whistle Baja\" from Heropanti, produced Guru Randhawa's \"High Rated Gabru\" and founded the label Muzik ONE Records. His own songs include \"Make Some Space\" and \"Gallan\".",
      "Manj Musik is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Whistle Baja, High Rated Gabru, Make Some Space"],
      ["Languages", "Punjabi, Hindi"]
    ],
    why: [
      "A composer-producer behind Bollywood hits, bringing a modern, club-ready Punjabi sound.",
      "Former member of the bhangra group RDB, so he knows how to run a dance floor.",
      "Ideal for sangeets, college fests and New Year parties."
    ]
  },
  "Pav Dharia": {
    about: [
      "Pav Dharia is a Punjabi-Australian singer, songwriter and music video director. He first gained attention with his 2012 debut \"Bewafa\" and the 2013 album Red, which won him Best Non-Resident Punjabi Music Director at the PTC Punjabi Music Awards.",
      "He is best known for \"Na Ja\", released in 2017, and has also sung \"Najaa\" from Sooryavanshi and directed music videos for other Punjabi artists.",
      "Pav Dharia is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Na Ja, Najaa (Sooryavanshi), Bewafa"],
      ["Languages", "Punjabi, Hindi"]
    ],
    why: [
      "\"Na Ja\" is a Punjabi hit with a huge following, plus Bollywood credits.",
      "Writer and director as well as singer, giving his shows a polished feel.",
      "Suits sangeets, receptions and Punjabi celebrations."
    ]
  },
  "Prem Dhillon": {
    about: [
      "Prem Dhillon (Premjeet Singh Dhillon) is a Punjabi singer, songwriter and rapper from Amritsar. His first credit was \"Patt Tenu\" in the film Mr & Mrs 420 Returns, and his debut single, \"Chan Milondi\", followed in 2018.",
      "He is best known for \"Bootcut\", \"Old Skool\" and \"Majha Block\", and his collaboration with Barbie Maan, \"Liv In\", reached the BBC Asian Music Chart.",
      "Prem Dhillon is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Bootcut, Old Skool, Majha Block"],
      ["Languages", "Punjabi"]
    ],
    why: [
      "Songs like \"Bootcut\" and \"Old Skool\" are popular with young Punjabi audiences.",
      "A singer-songwriter-rapper, so sets mix singing and rap.",
      "Suits college fests, sangeets and youth-focused events."
    ]
  },
  "Master Saleem": {
    about: [
      "Master Saleem is a Punjabi devotional, Sufi and playback singer from Shahkot, near Jalandhar. The son of Sufi singer Ustad Puran Shah Koti, he trained from childhood and gave his first public performance at the age of seven.",
      "He returned to the stage in 2000 with the Sufi song \"Aj Hona Deedar Mahi Da\" and has released devotional albums dedicated to Goddess Durga. His film songs include \"Mast Kalandar\" from Heyy Babyy and \"Aahun\" from Love Aaj Kal.",
      "Master Saleem is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Mast Kalandar, Aahun, Aj Hona Deedar Mahi Da"],
      ["Languages", "Punjabi, Hindi"]
    ],
    why: [
      "A respected Punjabi Sufi and devotional voice from a Sufi singing family.",
      "Also known for film songs like \"Mast Kalandar\", so he can switch from devotional to energetic.",
      "A strong fit for jagrans, Sufi nights, weddings and festive evenings."
    ]
  },
  "Papon": {
    about: [
      "Papon (Angaraag Mahanta) is a singer and composer from Assam, the son of folk singers Khagen and Archana Mahanta. He began with Assamese songs in 1998 and formed the folk-fusion band Papon and The East India Company in 2007.",
      "He is known for \"Jiyein Kyun\" from Dum Maaro Dum, \"Kyon\" from Barfi!, \"Moh Moh Ke Dhaage\" from Dum Laga Ke Haisha and \"Bulleya\" from Sultan, and has sung in Hindi, Assamese, Bengali and other languages. He is closely associated with Coke Studio India.",
      "Papon is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Moh Moh Ke Dhaage, Kyon, Jiyein Kyun, Bulleya"],
      ["Languages", "Hindi, Assamese, Bengali"]
    ],
    why: [
      "A distinctive voice behind \"Moh Moh Ke Dhaage\", \"Kyon\" and \"Bulleya\".",
      "Coke Studio fame and folk-fusion roots give sets depth.",
      "Suits concert-style evenings, cultural events and corporate shows."
    ]
  },
  "Jassi Gill & Babbal Rai": {
    about: [
      "A pairing of two Punjabi singer-actors. Jassie Gill is known for \"Nikle Currant\", \"Lancer\" and films such as Happy Phirr Bhag Jayegi and Panga; Babbal Rai is a singer, songwriter and actor from Samrala, Punjab, with albums including Sau Putt and Girlfriend.",
      "Share your date and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Nikle Currant, Lancer (Jassie Gill); Girlfriend (Babbal Rai)"],
      ["Languages", "Punjabi"]
    ],
    why: [
      "Two popular Punjabi singer-actors on one stage, a draw for fans of both.",
      "Punjabi hits and screen fame bring easy crowd recognition.",
      "Suits Punjabi weddings, sangeets and large celebrations."
    ]
  },
  "Sawai Bhatt": {
    about: [
      "Sawai Bhatt is a Rajasthani folk singer and puppeteer from Rajasthan's Nagaur district who rose to national attention on Indian Idol season 12. His rendition of the folk song \"Kesariya Balma\" is among his most-viewed performances.",
      "After the show he released his single \"Sanseinn\", which drew over four million views in its first 24 hours.",
      "Sawai Bhatt is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Kesariya Balma, Sanseinn"],
      ["Languages", "Rajasthani, Hindi"]
    ],
    why: [
      "A Rajasthani folk singer made famous on Indian Idol 12, known for \"Kesariya Balma\".",
      "Authentic folk voice adds colour and tradition to an evening.",
      "Suits welcome moments, mehendis, cultural nights and weddings."
    ]
  },
  "DJ Aqeel": {
    about: [
      "DJ Aqeel is an Indian DJ, singer and composer who began his career around 2000 and became known for his Bollywood remixes, including the early-2000s \"Shake It Daddy Mix\". His DJ Aqeel Forever albums are among his best-known releases.",
      "DJ Aqeel is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Bollywood remixes, Shake It Daddy Mix"]
    ],
    why: [
      "A veteran of the Indian remix scene since around 2000, known for his Bollywood remixes.",
      "\"Shake It Daddy Mix\" and the DJ Aqeel Forever albums give him recognisable material.",
      "Suits sangeets, club nights and parties that want a classic Bollywood-remix feel."
    ]
  },
  "DJ Chetas": {
    about: [
      "DJ Chetas (Chetas Shah) is a Mumbai-born DJ and music producer known for Bollywood mashups and remixes. A 2012 Salman Khan mashup released through T-Series brought him wide attention, and he became the first Indian DJ to enter DJ Mag's Top 100, reaching number 33 in 2016.",
      "He has worked on film music, been an official DJ for the Kolkata Knight Riders in the IPL and released the album Life Is a Mashup.",
      "DJ Chetas is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Bollywood mashups, DJ Mag Top 100"]
    ],
    why: [
      "The first Indian DJ in DJ Mag's Top 100, reaching number 33 in 2016.",
      "Known for Bollywood mashups, so the music is instantly familiar.",
      "Suits sangeets, receptions, club nights and sports or brand events, where he has also played."
    ]
  },
  "DJ Lijo George": {
    about: [
      "Lijo George is a Mumbai-born DJ, producer and composer who moved from DJing into Hindi film music. He is known for mashups with DJ Notorious and for his work with DJ Chetas, including the track \"Jaana Samjho Na\" from Bhool Bhulaiyaa 3.",
      "His film credits include Golmaal Again, Loveyatri, Simmba and Sooryavanshi.",
      "DJ Lijo George is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Bollywood mashups, film music"]
    ],
    why: [
      "A DJ who also composes for Hindi films, so he blends club skills with film-music instinct.",
      "Known for mashups and work with DJ Chetas, including a track from Bhool Bhulaiyaa 3.",
      "Suits sangeets, receptions and party nights."
    ]
  },
  "DJ Nikhil Chinapa": {
    about: [
      "Nikhil Chinapa is a DJ, television host and festival curator, often credited with bringing electronic dance music to a wide Indian audience. He began on television after winning the MTV VJ Hunt and went on to host MTV Select.",
      "In 2001 he launched Submerge, an EDM events company, and was later festival director of Sunburn in Goa. His DJ sets are known for being varied and moody.",
      "DJ Nikhil Chinapa is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "MTV VJ, Submerge, Sunburn Festival"]
    ],
    why: [
      "Credited with bringing electronic dance music to a wide Indian audience.",
      "A former MTV VJ and festival director of Sunburn, he reads a crowd well.",
      "Suits club nights, brand events and festival-style parties."
    ]
  },
  "Nucleya": {
    about: [
      "Nucleya (Udyan Sagar) is an electronic producer and DJ who began in the band Bandish Projekt before launching his solo project. He blends Indian folk sounds with bass music and is often described as a leading figure of India's desi bass scene.",
      "His albums include Bass Rani (2015) and Raja Baja (2016), and he released the EP Baaraat with Ritviz in 2021.",
      "Nucleya is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Bass Rani, Raja Baja, desi bass"]
    ],
    why: [
      "A leading name in India's desi bass scene, blending folk sounds with heavy bass.",
      "Albums like Bass Rani and Raja Baja show a distinctive sound beyond a standard DJ set.",
      "Suits college fests, festivals, New Year parties and brand events."
    ]
  },
  "Gayathri Asokan": {
    about: [
      "Gayatri Asokan is a playback singer from Kerala who sings in Malayalam and performs ghazal, Hindustani classical music and bhajans. Her playback career began in 2000 and she has sung over 350 songs, winning a Kerala State Film Award for Best Singer.",
      "Her interest in ghazal grew through her friendship with the ghazal singer and tabla player Philip Francis. She has hosted the ghazal show Khayal on Media One TV.",
      "Gayathri Asokan is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Ghazal, Malayalam film songs"],
      ["Languages", "Malayalam, Hindi, Urdu"]
    ],
    why: [
      "A Kerala State Film Award winner who also performs ghazal and Hindustani classical music.",
      "Hosts the ghazal show Khayal, showing deep comfort with the form.",
      "Suits intimate evenings, anniversaries, dinners and cultural events."
    ]
  },
  "Kavya Limaye": {
    about: [
      "Kavya Limaye is a young singer who took part in the 13th season of Indian Idol and was second runner-up in the first season of The Voice India Kids. She has also performed ghazals, including the project Nuqoosh, built on the poetry of Ajay Sahaab.",
      "Reviewers have noted the composure of her singing for her age.",
      "Kavya Limaye is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Indian Idol 13, The Voice India Kids"]
    ],
    why: [
      "A young Indian Idol 13 finalist and The Voice India Kids runner-up with notable composure on stage.",
      "Also performs ghazals, adding depth beyond pop.",
      "Suits dinners, cultural evenings and reception cocktail hours."
    ]
  },
  "Aakash Gupta": {
    about: [
      "Aakash Gupta is a stand-up comedian, actor and YouTuber from Delhi. He worked as an auditor before moving into comedy, posted his first stand-up video in 2017 and went on to co-win the second season of Comicstaan, sharing the title with Samay Raina.",
      "His video \"Sarojini Nagar\" topped YouTube's trending list in India, and he has toured across the country and acted in web series including Couple Goals.",
      "Aakash Gupta is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Comicstaan season 2 co-winner"]
    ],
    why: [
      "Co-winner of Comicstaan season 2, so he comes with a proven stand-up reputation.",
      "Relatable Delhi-flavoured observational humour that works for broad audiences.",
      "Suits corporate evenings, college events and private shows."
    ]
  },
  "Abhishek Upmanyu": {
    about: [
      "Abhishek Upmanyu is a stand-up comedian, writer and YouTuber. He trained as a chemical engineer at Panjab University in Chandigarh, then moved to Mumbai to pursue comedy and joined the writing team of On Air with AIB in 2015.",
      "He is known for observational humour and personal storytelling, with specials including Thoda Saaf Bol and Jealous of Sabjiwala.",
      "Abhishek Upmanyu is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Thoda Saaf Bol, On Air with AIB"]
    ],
    why: [
      "A stand-up comedian and former On Air with AIB writer, known for sharp observational material.",
      "Specials like Thoda Saaf Bol show a polished, tested act.",
      "Suits corporate events, college fests and private shows."
    ]
  },
  "Anubhav Singh Bassi": {
    about: [
      "Anubhav Singh Bassi is a stand-up comedian, actor and YouTuber. He studied law and worked as a lawyer, then tried for the civil services before walking into an open mic in 2017 and turning to comedy.",
      "He is known for nostalgic, anecdotal storytelling about school and college life. His first stand-up special, Bas Kar Bassi, streamed on Amazon Prime Video in 2023, and he made his Bollywood debut in Tu Jhoothi Main Makkaar the same year.",
      "Anubhav Singh Bassi is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Bas Kar Bassi, nostalgic storytelling"]
    ],
    why: [
      "A top stand-up name with the Prime Video special Bas Kar Bassi and a Bollywood debut.",
      "Nostalgic school-and-college storytelling lands with a wide crowd.",
      "Suits corporate events, college fests and large shows."
    ]
  },
  "Harsh Gujral": {
    about: [
      "Harsh Gujral is a stand-up comedian and YouTuber from Kanpur who trained as an engineer before taking up comedy, starting at open mics and then quitting his job to perform full-time.",
      "He is known for observational humour and crowd work, his show Jo Bolta Hai, Wohi Hota Hai, and his collaboration with Anubhav Singh Bassi, Harsh & Bassi Unleashed. He made his television debut on Good Night India in 2022.",
      "Harsh Gujral is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Crowd work, Harsh & Bassi Unleashed"]
    ],
    why: [
      "Known for crowd work, so he can tailor a set to the room.",
      "Collaborated with Anubhav Singh Bassi on Harsh & Bassi Unleashed.",
      "Suits corporate offsites, college events and private parties."
    ]
  },
  "Rajiv Thakur": {
    about: [
      "Rajiv Thakur is a stand-up comedian, actor, television host and director. He was a runner-up on the Punjabi comedy show Hasde Hasande Ravo in 2006 and became known through Hindi television, including Comedy Circus and The Great Indian Laughter Challenge.",
      "He has also worked in Punjabi films and appeared on The Great Indian Kapil Show.",
      "Rajiv Thakur is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Comedy Circus, The Great Indian Laughter Challenge"],
      ["Languages", "Hindi, Punjabi"]
    ],
    why: [
      "A television comedian from Comedy Circus and The Great Indian Laughter Challenge.",
      "Works in Hindi and Punjabi, which suits Punjabi-speaking audiences.",
      "Suits family events, corporate evenings and festive shows."
    ]
  },
  "SIRAHA Trio (Harmeet Manseta, U Rajesh, Sivamani)": {
    about: [
      "The SIRAHA Trio brings together jazz pianist Harmeet Manseta, mandolin player U. Rajesh and percussionist Sivamani.",
      "Share your date and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Line-up", "Harmeet Manseta (piano), U. Rajesh (mandolin), Sivamani (percussion)"]
    ],
    why: [
      "A jazz piano, mandolin and world-percussion line-up, an unusual sound for premium events.",
      "Three accomplished musicians give a rich, textured live set.",
      "Suits lounges, receptions, corporate dinners and festivals."
    ]
  },
  "SIRAHA Trio": {
    about: [
      "The SIRAHA Trio brings together jazz pianist Harmeet Manseta, mandolin player U. Rajesh and percussionist Sivamani.",
      "Share your date and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Line-up", "Harmeet Manseta (piano), U. Rajesh (mandolin), Sivamani (percussion)"]
    ],
    why: [
      "A jazz piano, mandolin and world-percussion line-up, an unusual sound for premium events.",
      "Three accomplished musicians give a rich, textured live set.",
      "Suits lounges, receptions, corporate dinners and festivals."
    ]
  },
  "The SIVAMANI Trio": {
    about: [
      "The Sivamani Trio is built around Anandan Sivamani, one of India's best-known percussionists. Born in Chennai, he began drumming at seven under his father, a drummer in the South Indian film industry, and is best known as A. R. Rahman's lead percussionist.",
      "He was awarded the Padma Shri in 2019 and has performed across the world, including on Bombay Dreams.",
      "The SIVAMANI Trio is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Percussion, A. R. Rahman collaborations"],
      ["Based in", "Chennai"]
    ],
    why: [
      "Built around Sivamani, A. R. Rahman's lead percussionist and a Padma Shri recipient.",
      "Percussion-led sets bring rhythm and spectacle to a stage.",
      "Suits receptions, concert-style evenings and corporate galas."
    ]
  },
  "Sivamani (percussion)": {
    about: [
      "Anandan Sivamani is a percussionist from Chennai who began drumming at seven under his father, a drummer in the South Indian film industry. He plays drums, octoban, darbuka and other instruments and is best known as A. R. Rahman's lead percussionist.",
      "He was awarded the Padma Shri in 2019 and has performed across the world, including on Bombay Dreams.",
      "Sivamani is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Percussion, A. R. Rahman collaborations"],
      ["Based in", "Chennai"]
    ],
    why: [
      "A Padma Shri recipient and A. R. Rahman's lead percussionist.",
      "Plays drums, octoban, darbuka and other instruments, so one artist offers real variety.",
      "Suits concert-style evenings, galas and large celebrations."
    ]
  },
  "Suhani Shah (Ruhani Shah)": {
    about: [
      "Suhani Shah is a mentalist, magician and YouTuber who has been performing magic since childhood. She worked as an illusionist for many years before moving into mentalism, which blends psychology, suggestion and showmanship.",
      "Suhani Shah is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Mentalism, magic"]
    ],
    why: [
      "A mentalist and magician performing since childhood, so the act is practised and smooth.",
      "Mind-reading entertains all ages and gives guests something to talk about.",
      "Suits weddings, cocktail hours, corporate evenings and private parties."
    ]
  },
  "Hussain K": {
    about: [
      "Hussain Kuwajerwala is a television actor, host and model, best known for playing Sumit Wadhwa in Kumkum and Chirag Virani in Kyunki Saas Bhi Kabhi Bahu Thi. He won the dance reality show Nach Baliye 2 in 2006.",
      "As a host he fronted Shabaash India and Kuch Kar Dikhana Hai and was a familiar presenter of Indian Idol.",
      "Hussain K is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Kumkum, Indian Idol host, Nach Baliye 2 winner"]
    ],
    why: [
      "A familiar TV face as Sumit Wadhwa in Kumkum and a long-time Indian Idol host.",
      "His hosting experience keeps a programme moving and engages the room.",
      "Suits weddings, award nights and corporate events."
    ]
  },
  "Roshni Chopra": {
    about: [
      "Roshni Chopra is a model, actress and television presenter. She won the reality show Dil Jeetegi Desi Girl and is best known for playing Pia in the serial Kasamh Se.",
      "She has hosted television programmes including Cinemascope and presented cricket coverage on Doordarshan.",
      "Roshni Chopra is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Kasamh Se, Dil Jeetegi Desi Girl"]
    ],
    why: [
      "A TV actress and presenter known as Pia in Kasamh Se and winner of Dil Jeetegi Desi Girl.",
      "Hosting experience on TV and cricket coverage means polished stage presence.",
      "Suits weddings, brand events and corporate evenings."
    ]
  },
  "Shruti Seth": {
    about: [
      "Shruti Seth is an actress, video jockey and television host who began by hosting shows on Channel V. She rose to fame as Jiya Malhotra in the comedy series Shararat and also starred in The Suite Life of Karan & Kabir.",
      "Her film credits include Fanaa and Slumdog Millionaire, and she has hosted shows such as Comedy Circus.",
      "Shruti Seth is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Shararat, Fanaa, Comedy Circus host"]
    ],
    why: [
      "A TV and film actress known from Shararat, Fanaa and Slumdog Millionaire.",
      "Years of hosting, including Comedy Circus, give her easy comic timing.",
      "Suits award nights, weddings and corporate shows."
    ]
  },
  "Sonam C Chabbra": {
    about: [
      "Sonam C Chhabra is a live host, anchor, actor and content creator from Delhi. She graduated from Hansraj College, Delhi University, and earned a master's in mass communication. She has said she began anchoring by chance, when an emcee failed to show up at a college event and friends pushed her to step in.",
      "More than a decade into her career, she was named India's Best Anchor (Female) in 2019 by Business World. She has hosted the television show Safar Kamyabi Ka, made her Bollywood debut in Kirket (2019) and hosts the fashion-entrepreneur reality series Pitch to Get Rich on Jio Hotstar.",
      "She hosts weddings, brand events and corporate shows, and also works as a motivational speaker.",
      "Sonam C Chabbra is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Delhi"],
      ["Known for", "Best Anchor (Female) 2019, Pitch to Get Rich"]
    ],
    why: [
      "Named India's Best Anchor (Female) in 2019 by Business World.",
      "An experienced live host who has hosted TV shows and brand events.",
      "Suits weddings, sangeets and corporate events."
    ]
  },
  "Kunal Ganjawala": {
    about: [
      "Kunal Ganjawala is a playback singer from Pune, working mainly in Hindi and Kannada films and also singing in Marathi, Bengali and other languages. His breakthrough was \"Bheege Honth Tere\" from the 2004 film Murder, which won him the Zee Cine Award for Best Playback Singer (Male).",
      "He sang four songs in Saawariya, directed by his cousin Sanjay Leela Bhansali, and is also known for \"O Humdum Suniyo Re\" and \"Dil Keh Raha Hai\". In Kannada cinema he is known for \"Neene Neene\" from Akash (2005).",
      "Kunal Ganjawala is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Bheege Honth Tere, O Humdum Suniyo Re"],
      ["Languages", "Hindi, Kannada, Marathi, Bengali"]
    ],
    why: [
      "His hit \"Bheege Honth Tere\" won a Zee Cine Award and is still a crowd favourite.",
      "Sings in Hindi, Kannada and other languages, so mixed audiences are covered.",
      "Suits weddings, receptions and festive shows."
    ]
  },
  "Sanam": {
    about: [
      "Sanam is an Indian pop-rock band formed in Mumbai in 2010, made up of lead vocalist Sanam Puri, lead guitarist Samar Puri, bassist Venky S and drummer Keshav Dhanraj. The group won the nationwide pop band hunt Supastars, launched by Times Music in 2010.",
      "They are best known for \"Main Hoon\", featured in the Hindi version of The Amazing Spider-Man 2, and for their covers of classic Bollywood songs such as \"Gulabi Aankhen\", which built their online audience. They released the album Sanam Revolution in 2018, and Sanam Puri also works as a playback singer.",
      "Their sets mix original songs with Bollywood favourites.",
      "Sanam is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Line-up", "Sanam Puri (vocals), Samar Puri (guitar), Venky S (bass), Keshav Dhanraj (drums)"]
    ],
    why: [
      "A pop-rock band whose Bollywood covers and \"Main Hoon\" are known to many.",
      "Won the Times Music Supastars band hunt and plays a polished live set.",
      "Suits sangeets, college fests and corporate parties."
    ]
  },
  "Progressive Brothers": {
    about: [
      "Progressive Brothers is an electronic music duo from New Delhi, made up of Sunny Sharma and Karan Bhalla, who work as producers, DJs, singers and songwriters. They formed in 2012 after leaving careers in banking and insurance to pursue music full time.",
      "Their debut track \"Veda\", made with Richard Durand, was signed to Black Hole Recordings. They were named India's Best Trance DJs for 2012 to 2013 at the Myfavdj Awards, and have played major Indian festivals including Sunburn and VH1 Supersonic. Their sound mixes progressive and electro house with trap and hard style.",
      "They are also listed as Pro Bros.",
      "Progressive Brothers is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Delhi"],
      ["Line-up", "Sunny Sharma, Karan Bhalla"]
    ],
    why: [
      "A Delhi duo named India's Best Trance DJs 2012 to 2013 who have played Sunburn and VH1 Supersonic.",
      "Their sets suit big dance floors.",
      "Suits college fests, New Year parties and club-style events."
    ]
  },
  "Gaurav Gupta": {
    about: [
      "Gaurav Gupta is a stand-up comedian from Uttar Pradesh who trained and practised as a dentist before moving into comedy. He began performing in 2015 and won a radio comedy contest that year, and later appeared on The Great Indian Laughter Challenge in 2017.",
      "His comedy draws on Baniya stereotypes and Delhi life. His solo show Not Just Baniya led to the stand-up special Market Down Hai on Amazon Prime Video, and he has performed in Dubai and on international tours.",
      "Gaurav Gupta is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Not Just Baniya, Market Down Hai"]
    ],
    why: [
      "A dentist-turned comedian whose Delhi-flavoured humour is built on Baniya stereotypes and everyday life.",
      "Has a Prime Video special, Market Down Hai, and performed on The Great Indian Laughter Challenge.",
      "Suits corporate evenings and private shows."
    ]
  },
  "Dino James": {
    about: [
      "Dino James is a rapper, singer, lyricist and composer from Madhya Pradesh, known for storytelling in his songs. Raised in Bhopal, he built his career in Mumbai and signed with Def Jam Recordings India.",
      "His songs include \"Yaadein\", \"Unstoppable\", \"Dooriyan\" and \"Maa\", and he sang \"Kaal Kaal\" for the film Laal Kaptaan (2019). He won Khatron Ke Khiladi season 13 in 2023.",
      "Dino James is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Yaadein, Unstoppable, Khatron Ke Khiladi 13 winner"],
      ["Languages", "Hindi"]
    ],
    why: [
      "A rapper and Khatron Ke Khiladi 13 winner, so he arrives with a TV fan base.",
      "Known for storytelling in songs like \"Yaadein\" and \"Unstoppable\".",
      "Suits college fests, brand events and youth-focused parties."
    ]
  },
  "Emiway Bantai": {
    about: [
      "Emiway Bantai (Bilal Shaikh) is a Mumbai-based independent rapper who raps in Hindi, English, Marathi and Tamil. He began on YouTube in 2013 and released his first rap, \"Aur Bantai\", in 2014. His public feud with rapper Raftaar in 2018 brought him a much wider audience.",
      "His signature track is \"Machayenge\", followed by \"Firse Machayenge\" in 2020, and he featured on \"Asli Hip Hop\" in the film Gully Boy. He has stayed independent throughout his career.",
      "Emiway Bantai is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Machayenge, Firse Machayenge, Asli Hip Hop"],
      ["Languages", "Hindi, English, Marathi, Tamil"]
    ],
    why: [
      "A genuinely independent rapper whose \"Machayenge\" is a streaming favourite.",
      "Rhymes in several languages, widening his appeal.",
      "Suits college fests, club nights and brand events."
    ]
  },
  "MC Square": {
    about: [
      "MC Square (Abhishek Baisla) is a rapper, poet and dancer from Palwal, Haryana, who studied civil engineering and has no formal training in music. He started rapping in 2016, drawing on the folk form Ragini from his hometown, and writes in Haryanvi.",
      "He won MTV Hustle 2.0 in 2022, taking the trophy and a cash prize of Rs 10 lakh; Paradox (Tanishq Singh) was runner-up. His track \"Chehre\" was among his performances on the show.",
      "MC Square is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "MTV Hustle 2.0 winner, Chehre"],
      ["Languages", "Haryanvi, Hindi"]
    ],
    why: [
      "Winner of MTV Hustle 2.0, bringing authentic Haryanvi rap to the stage.",
      "A fresh, high-energy act for younger crowds.",
      "Suits college fests, brand events and club nights."
    ]
  },
  "Paradox": {
    about: [
      "Paradox (Tanishq Singh) is a rapper, lyricist and music composer from Delhi, who grew up in Najafgarh and attended school in Dwarka. He took up hip hop as a teenager and rose to attention on MTV Hustle 2.0 in 2022, finishing as first runner-up on rapper King's team.",
      "He later joined King's music group. His style blends pop and traditional hip hop, and his tracks include \"Jaadugar\", \"Cowboy\" and \"Gang Wale Munde\". He released the project Overthink in 2022.",
      "Paradox is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Delhi"],
      ["Known for", "MTV Hustle 2.0 runner-up, Jaadugar, Cowboy"],
      ["Languages", "Hindi"]
    ],
    why: [
      "MTV Hustle 2.0 runner-up from Delhi with a blend of pop and traditional hip hop.",
      "Tracks like \"Jaadugar\" and \"Cowboy\" suit a party crowd.",
      "Suits college fests and youth-focused events."
    ]
  },
  "Raja Kumari": {
    about: [
      "Raja Kumari (Svetha Yallapragada Rao) is a rapper, singer and songwriter born in California to a Telugu family. She discovered hip hop as a child and was a freestyle MC by fourteen, then began as a songwriter, co-writing \"Centuries\" with Fall Out Boy and receiving a BMI Pop Award in 2016.",
      "Her debut EP The Come Up followed in 2016, and her albums include HBIC, Bloodline and Out of Love. She calls her style \"BollyHood\", blending Indian classical traditions with hip hop. She was a judge on the first season of MTV Hustle and appeared in the film Gully Boy.",
      "Raja Kumari is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "BollyHood, HBIC, MTV Hustle judge"]
    ],
    why: [
      "A songwriter for Fall Out Boy and a rapper whose \"BollyHood\" style mixes Indian classical with hip hop.",
      "Was an MTV Hustle judge and appeared in Gully Boy.",
      "Suits college fests, brand events and festival stages."
    ]
  },
  "L Subramaniam (violin)": {
    about: [
      "Dr. L. Subramaniam is a violinist, composer and conductor from Chennai, one of the most celebrated Indian violinists in both Carnatic and global fusion music. He began learning from his father, Prof. V. Lakshminarayana, and holds a medical doctorate though he chose music as his career.",
      "He has accompanied Carnatic greats, recorded his first fusion album Garland with Svend Asmussen in 1978 and collaborated with Stephane Grappelli, Larry Coryell and Jean-Luc Ponty. In 1983 he composed a Double Concerto for violin and flute, and in 1992 he founded the Lakshminarayana Global Music Festival in memory of his father.",
      "L Subramaniam is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Instrument", "Violin"],
      ["Known for", "Carnatic and global fusion music"]
    ],
    why: [
      "A globally respected violinist who has played with Grappelli and Ponty.",
      "Moves between Carnatic and fusion, so the set can be elegant or adventurous.",
      "Suits classical evenings, galas and cultural events."
    ]
  },
  "Purbayan Chatterjee (sitar)": {
    about: [
      "Purbayan Chatterjee is a sitar player born in Kolkata and based in Mumbai, known for blending Indian classical music with contemporary world music. He learned from his father, Parthapratim Chatterjee, a student of Pandit Nikhil Banerjee and Ustad Ali Akbar Khan, and belongs to the Senia Maihar Gharana.",
      "His albums include Lehar (2008) and Stringstruck, which won Best World Music Album at the Iraa Palm Expo in 2009, and he has performed with tabla maestro Ustad Zakir Hussain and released Saath Saath with bansuri player Rakesh Chaurasia.",
      "Purbayan Chatterjee is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Instrument", "Sitar"],
      ["Based in", "Mumbai"]
    ],
    why: [
      "A sitarist from the Senia Maihar Gharana who blends classical and world music.",
      "Has performed with Ustad Zakir Hussain and released the bestselling album Lehar.",
      "Suits cultural evenings, galas and elegant receptions."
    ]
  },
  "Raghav Sachar": {
    about: [
      "Raghav Sachar is a singer, composer and film scorer from Kolkata, active since 2003 and known as a multi-instrumentalist who started on the harmonica at four. He made his debut as composer and singer with Kabul Express and has worked on films including Rustom, Phhir, Monsoon Shootout and Andhadhun, where he is credited for saxophone and clarinet.",
      "He founded the label Raghav Sachar Music in 2009 and Raghav Sachar Productions in 2011, which works on films, live events and music videos.",
      "Raghav Sachar is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Kabul Express, multi-instrumental performances"]
    ],
    why: [
      "A multi-instrumentalist who started on the harmonica at four, so sets can be visually varied.",
      "Composer and singer with film credits including Andhadhun.",
      "Suits lounges, receptions and corporate evenings."
    ]
  },
  "Ronu Majumdar (flute)": {
    about: [
      "Pandit Ronu Majumdar is a Hindustani classical bansuri (flute) player born in Varanasi, taught by his father and later by Pt. Laxman Prasad Jaipurwale and Pt. Vijay Raghav Rao, with training from his grand-guru Pt. Ravi Shankar. He won first prize at the All India Radio competition in 1981.",
      "A pioneer of Indo-world fusion, he recorded for the Merchant Ivory film In Custody, with music by Zakir Hussain, has over twenty albums to his name and received the Padma Shri in 2025.",
      "Ronu Majumdar is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Instrument", "Bansuri (flute)"],
      ["Known for", "Hindustani classical and Indo-world fusion"]
    ],
    why: [
      "A Padma Shri bansuri master trained in Pt. Ravi Shankar's tradition.",
      "Soothing live flute adds a refined mood to ceremonies and dinners.",
      "Suits weddings, cultural evenings and galas."
    ]
  },
  "Bismil Ki Mehfil": {
    about: [
      "Bismil Ki Mehfil is a modern live Sufi music project built around the singer and songwriter Bismil (Mohd Asif) from Delhi. Bismil and his manager, Vibhor Hasija, created the concept in 2013, while he was still in college, to bring live Sufi music to audiences in a fresher, more intimate way.",
      "Shows blend Sufi, qawwali and ghazal-based music, starting softly and building to high-energy sections where the crowd sings along. Bismil cites Nusrat Fateh Ali Khan and Rahat Fateh Ali Khan as inspirations, and the project has grown into a touring brand, with releases such as \"Ki Kita\" and covers like \"Kehna Galat Galat\".",
      "Bismil Ki Mehfil is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Delhi"],
      ["Known for", "Live Sufi shows, Ki Kita"],
      ["Languages", "Hindi, Urdu, Punjabi"]
    ],
    why: [
      "A Sufi project built to feel intimate yet build to a singalong, so the mood rises through the set.",
      "Shows blend Sufi, qawwali and ghazal, and the group tours widely.",
      "Suits sangeets, corporate evenings and Sufi nights."
    ]
  },
  "Divya Kumar": {
    about: [
      "Divya Kumar is a playback singer who sings in Hindi, Gujarati and Telugu, with a folk and Sufi texture to his voice. His Bollywood debut was around 2012 with \"Aafaton Ke Parinde\" in Ishaqzaade.",
      "He is known for \"Maston Ka Jhund\" from Bhaag Milkha Bhaag, \"Shubhaarambh\" from Kai Po Che and \"Shake Your Bootiya\", and was nominated for Best Male Playback Singer for \"Jee Karda\" from Badlapur. His credits also include Baahubali: The Beginning and Stree 2.",
      "Divya Kumar is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Maston Ka Jhund, Shubhaarambh, Jee Karda"],
      ["Languages", "Hindi, Gujarati, Telugu"]
    ],
    why: [
      "A playback singer with a folk and Sufi texture and credits including Bhaag Milkha Bhaag and Stree 2.",
      "Sings in Hindi, Gujarati and Telugu.",
      "Suits weddings, receptions and festive evenings."
    ]
  },
  "Mame Khan": {
    about: [
      "Mame Khan is a Rajasthani folk singer from the Manganiyar community, born in Satto, a village near Jaisalmer, and the son of the folk singer Ustad Rana Khan. He grew up surrounded by Manganiyar music from childhood.",
      "His wider fame came through Coke Studio @ MTV, where he sang \"Chaudhary\" with Amit Trivedi. He has sung for films including Luck by Chance, I Am, Mirzya and Sonchiriya, won Best Folk Single at the GiMA Awards in 2016 and has been reported as the first Indian folk artist to walk the Cannes red carpet.",
      "Mame Khan is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Chaudhary (Coke Studio), Manganiyar folk"],
      ["Languages", "Rajasthani, Hindi"]
    ],
    why: [
      "A Manganiyar folk singer made famous on Coke Studio with \"Chaudhary\".",
      "Authentic Rajasthani voice and a Sangeet Natak Akademi honour.",
      "Suits welcome ceremonies, cultural evenings and weddings."
    ]
  },
  "Sagar Bhatia": {
    about: [
      "Sagar Bhatia is a Delhi-based qawwali singer, composer and guitarist, known for fusing Sufi music with rock. He began in the Delhi jagran scene and as a guitarist for the singer Narendra Chanchal, and reached the top six of India's Raw Star in 2014.",
      "His Sufi-rock project, Sagar Wali Qawwali, gave its first public performance in July 2022. He made his playback debut with \"Khudaya\" in the Akshay Kumar film Sarfira and is also known for \"Kiven Mukhre Ton\" and \"Mera Ishq\".",
      "Sagar Bhatia is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Delhi"],
      ["Known for", "Sagar Wali Qawwali, Khudaya"],
      ["Languages", "Hindi, Urdu, Punjabi"]
    ],
    why: [
      "A qawwali and Sufi-rock singer-guitarist, so the set has both devotion and rock energy.",
      "A top-six India's Raw Star finalist with Bollywood playback credits.",
      "Suits sangeets, Sufi nights and corporate parties."
    ]
  },
  "Salman Zaman": {
    about: [
      "Salman-Zaman is a brother duo, Salman Khan Niazi and Zaman Khan, who perform Sufi rock and contemporary qawwali in the tradition of the Rampur Sahaswan Gharana. They are billed as \"Sufi Ke Sultan\".",
      "They mix Indian classical traditions with new-age Sufi rock and host a web series, The Salman-Zaman Show.",
      "Salman Zaman is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Line-up", "Salman Khan Niazi, Zaman Khan"],
      ["Known for", "Sufi rock, contemporary qawwali"]
    ],
    why: [
      "A brother duo known as Sufi Ke Sultan, with a Sufi-rock and contemporary qawwali sound.",
      "Rooted in the Rampur Sahaswan Gharana.",
      "Suits Sufi nights, sangeets and cultural events."
    ]
  },
  "Sharib & Toshi (Sabri)": {
    about: [
      "Sharib and Toshi Sabri are brothers who compose and sing together as Sharib-Toshi. Toshi first appeared on Amul STAR Voice of India and became known for \"Maahi\" from Raaz: The Mystery Continues, while Sharib took part in Music Ka Maha Muqqabla on STAR Plus.",
      "As a duo they composed the album of Jashnn and the songs of Ghost (2012) and Yamla Pagla Deewana 2.",
      "Sharib & Toshi is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Line-up", "Sharib Sabri, Toshi Sabri"],
      ["Known for", "Maahi, Jashnn, Yamla Pagla Deewana 2"]
    ],
    why: [
      "Brothers who compose and sing together, known for \"Maahi\" from Raaz: The Mystery Continues.",
      "Composed the albums of Jashnn and Ghost, so they know film-style songwriting.",
      "Suits receptions, sangeets and music evenings."
    ]
  },
  "Sharib Toshi": {
    about: [
      "Sharib and Toshi Sabri are brothers who compose and sing together as Sharib-Toshi. Toshi first appeared on Amul STAR Voice of India and became known for \"Maahi\" from Raaz: The Mystery Continues, while Sharib took part in Music Ka Maha Muqqabla on STAR Plus.",
      "As a duo they composed the album of Jashnn and the songs of Ghost (2012) and Yamla Pagla Deewana 2.",
      "Sharib Toshi is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Line-up", "Sharib Sabri, Toshi Sabri"],
      ["Known for", "Maahi, Jashnn, Yamla Pagla Deewana 2"]
    ],
    why: [
      "Brothers who compose and sing together, known for \"Maahi\" from Raaz: The Mystery Continues.",
      "Composed the albums of Jashnn and Ghost, so they know film-style songwriting.",
      "Suits receptions, sangeets and music evenings."
    ]
  },
  "Stree Shakti (Anuradha Pal)": {
    about: [
      "Stree Shakti is an all-female Indian classical percussion and fusion ensemble founded by the tabla player Anuradha Pal in Mumbai on International Women's Day in 1996, to give women a platform in Indian music. It blends the instruments and repertoires of the Hindustani and Carnatic traditions.",
      "The group performed at the WOMAD Festival in the UK in 1999, in a show broadcast by the BBC to audiences in many countries, and has played festivals including the Bangkok International Festival. Its releases include the album Passion (2000).",
      "Stree Shakti is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Mumbai"],
      ["Led by", "Anuradha Pal (tabla)"]
    ],
    why: [
      "An all-female percussion ensemble led by tabla player Anuradha Pal, performing since 1996.",
      "Played WOMAD UK in 1999, a performance broadcast by the BBC.",
      "Suits cultural events, corporate galas and celebrations that want a distinctive act."
    ]
  },
  "Vishaal Rasquinha": {
    about: [
      "Vishaal Rasquinha is a Mumbai-based emcee, anchor and voiceover artist. He is best known for hosting the 2021 wedding of Vicky Kaushal and Katrina Kaif, and has hosted events for clients including the Rajasthan Royals, the IPL and the United Nations in India.",
      "He has been named Best Wedding Emcee at the WeddingSutra awards in more than one year.",
      "Vishaal Rasquinha is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Mumbai"],
      ["Known for", "Wedding and corporate hosting"]
    ],
    why: [
      "Hosted the Vicky Kaushal and Katrina Kaif wedding and has been named Best Wedding Emcee at WeddingSutra awards.",
      "Also hosts for the IPL, Rajasthan Royals and the United Nations in India.",
      "Suits weddings, sangeets and corporate events."
    ]
  },
  "Parikrama": {
    about: [
      "Parikrama is a Delhi rock band formed in 1991 by Subir Malik, Nitin Malik and Sonam Sherpa, and one of the longest-running rock bands in India. They began with classic rock covers, developed a blues-based rock style and later added shades of metal.",
      "Their songs include \"But It Rained\", \"Till I'm No One Again\", \"Whiskey Blues\" and \"Open Skies\". They toured internationally with Iron Maiden and played the Download Festival in England in 2007.",
      "Parikrama is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Delhi"],
      ["Known for", "But It Rained, Open Skies"],
      ["Formed", "1991"]
    ],
    why: [
      "One of India's longest-running rock bands, formed in 1991.",
      "Toured with Iron Maiden and played the Download Festival in England.",
      "Suits college fests, concerts and corporate rock nights."
    ]
  },
  "The Yellow Diaries": {
    about: [
      "The Yellow Diary is a Mumbai alternative pop-rock band formed in 2015, with Rajan Batra as lead vocalist and lyricist, Himonshu Parikh as singer-keyboardist and composer, and Stuart DaCosta on bass. Their sound blends rock, electronic and Indian classical influences.",
      "They signed with Sony Music in 2017 and released the EP Marz, followed by singles including \"Roz Roz\" with Shilpa Rao and their debut album In Case We Forget in 2025. They opened for A. R. Rahman's Wonderment Tour and have played Lollapalooza India.",
      "The Yellow Diaries is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Mumbai"],
      ["Known for", "Roz Roz, Marz, In Case We Forget"]
    ],
    why: [
      "A pop-rock band that opened for A. R. Rahman's Wonderment Tour and has played Lollapalooza India.",
      "Signed to Sony Music, with a polished set of original songs.",
      "Suits corporate evenings, college fests and cocktail nights."
    ]
  },
  "Zikrr": {
    about: [
      "Zikrr is a Delhi fusion rock band formed in 2012 by a group of schoolmates, playing Sufi and Punjabi folk songs in a rock setting. They began with covers of Sufi legends such as Nusrat Fateh Ali Khan, mixed with Punjabi folk and Bollywood songs, and their later work blends rock with Indian classical ragas.",
      "The band has seven members and is known for songs such as \"Bam Bhole Bam\" and \"Yaraane\".",
      "Zikrr is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Delhi"],
      ["Known for", "Sufi rock, Bam Bhole Bam"]
    ],
    why: [
      "A seven-piece Sufi-rock band from Delhi known for \"Bam Bhole Bam\".",
      "Mixes Sufi, Punjabi folk and Bollywood, so one set covers many tastes.",
      "Suits sangeets, weddings and corporate evenings."
    ]
  },
  "Bryden & Parth Choir": {
    about: [
      "Bryden-Parth is a cross-genre act from Bengaluru, formed by the guitarist Bryden Lewis, who played in the prog band Slain, and the flautist Parth Chandiramani, who met in 2012 while touring with the Raghu Dixit Project. Their live show brings together a band and an 11-member choir.",
      "Their sound draws on Western and Indian classical backgrounds, with gospel-influenced harmonies, and their debut album is Chameleon World.",
      "Bryden & Parth Choir is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Bengaluru"],
      ["Line-up", "Bryden Lewis (guitar), Parth Chandiramani (flute), choir"]
    ],
    why: [
      "A band and an 11-member choir on one stage, which is visually and sonically rich.",
      "Gospel-inspired harmonies set it apart from standard cover acts.",
      "Suits receptions, corporate events and festivals."
    ]
  },
  "Parth Chandiramani (flute)": {
    about: [
      "Parth Chandiramani is a flautist who, with the guitarist Bryden Lewis, forms the Bengaluru cross-genre duo Bryden-Parth. The two met in 2012 while touring with the Raghu Dixit Project.",
      "Their live show adds a choir to the band, mixing Western and Indian classical influences, and their debut album is Chameleon World.",
      "Parth Chandiramani is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Instrument", "Flute"],
      ["Based in", "Bengaluru"]
    ],
    why: [
      "A flautist who brings a warm, distinctive voice to live arrangements.",
      "Part of the Bengaluru cross-genre duo Bryden-Parth and trained across Indian and Western styles.",
      "Suits ceremonies, cocktail hours and lounge evenings."
    ]
  },
  "El Fe Choir (Chennai)": {
    about: [
      "El Fé Choir is a Chennai vocal group, live band and choir founded by the playback singer, vocal arranger and producer Roe Vincent around 2009 to 2010. Vincent is known for singing \"Adiye\" from Kadal and \"Hey\" from Vanakkam Chennai.",
      "The group has worked on film music, including 3 (Moonu) and Maan Karate, and performs at weddings, corporate events and college fests.",
      "El Fe Choir is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Chennai"],
      ["Founded by", "Roe Vincent"]
    ],
    why: [
      "A vocal group, live band and choir with film credits including Moonu and Maan Karate.",
      "Founded by playback singer and vocal arranger Roe Vincent.",
      "Suits weddings, corporate events and college fests."
    ]
  },
  "Prateek Kuhad": {
    about: [
      "Prateek Kuhad is a singer-songwriter from Jaipur who makes independent music in Hindi and English, ranging from indie folk to adult pop. He took up the guitar as a teenager, studied maths and economics at New York University and became a notable name in the Indian indie scene with the 2013 EP Raat Raazi and the 2015 album Tokens & Charms.",
      "He is best known for \"cold/mess\", which appeared on Barack Obama's list of favourite music of 2019, and for \"Kasoor\". He was the first Indian artist signed to Elektra Records, released the album The Way That Lovers Do in 2022 and has written for films, including \"Kho Gaye Hum Kahan\" and \"Saansein\".",
      "Prateek Kuhad is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "cold/mess, Kasoor, Tokens & Charms"],
      ["Languages", "Hindi, English"]
    ],
    why: [
      "His song \"cold/mess\" made Barack Obama's list of favourite music of 2019.",
      "An intimate indie sound that suits attentive audiences.",
      "Suits cocktail evenings, corporate events and concert-style nights."
    ]
  },
  "Anuv Jain": {
    about: [
      "Anuv Jain is an indie singer-songwriter and composer known for simple, chord-based songs about love and heartbreak, built on acoustic guitar or ukulele. He began writing songs at sixteen and has never had formal musical training.",
      "His songs include \"Baarishein\", \"Husn\", \"Alag Aasmaan\" and \"Gul\". He was named to the Forbes India 30 Under 30 list in 2023 and is one of India's most-streamed indie artists.",
      "Anuv Jain is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Baarishein, Husn, Alag Aasmaan, Gul"],
      ["Languages", "Hindi"]
    ],
    why: [
      "One of India's most-streamed indie artists, named to Forbes India 30 Under 30 in 2023.",
      "Simple acoustic songs like \"Baarishein\" and \"Husn\" that guests sing along to.",
      "Suits receptions, cocktail nights and college fests."
    ]
  },
  "Ritviz": {
    about: [
      "Ritviz Srivastava is a singer-songwriter, electronic musician and producer from Pune, trained in Hindustani classical music as a child; his parents were a classical vocalist and a tabla player. His breakout came in 2017 to 2018 with \"Udd Gaye\", which won a party-anthem competition run by Bacardi.",
      "His songs include \"Liggi\" and \"Sun Toh\", and his releases include the EPs Yuv, Ved, Dev and Baaraat and the debut album Mimmi. He has played festivals including Sunburn and EDC Las Vegas and curated the YUV Fest.",
      "Ritviz is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Udd Gaye, Liggi, Sun Toh"],
      ["Languages", "Hindi, English"]
    ],
    why: [
      "Known for \"Udd Gaye\" and \"Liggi\", and trained in Hindustani classical music.",
      "Has played festivals including Sunburn and EDC Las Vegas.",
      "Suits college fests, festivals and brand events."
    ]
  },
  "Amaal Mallik": {
    about: [
      "Amaal Mallik is a music composer, singer and lyricist working mainly in Hindi cinema. He is the son of music director Daboo Malik, the grandson of Sardar Malik and the elder brother of singer Armaan Malik, and began learning music at around eight.",
      "He made his film composing debut in 2014 with Jai Ho, and his credits include M.S. Dhoni: The Untold Story and Kabir Singh. He also releases independent pop singles.",
      "Amaal Mallik is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Jai Ho, M.S. Dhoni: The Untold Story, Kabir Singh"],
      ["Languages", "Hindi"]
    ],
    why: [
      "A composer-singer whose film credits include M.S. Dhoni: The Untold Story and Kabir Singh.",
      "From a family of music directors, with strong song-writing instincts.",
      "Suits receptions, concert evenings and brand events."
    ]
  },
  "Shirley Setia": {
    about: [
      "Shirley Setia is a singer and actress from New Zealand, born in India and raised in Auckland. She became known through YouTube, where she was nicknamed the \"pyjama popstar\" by the New Zealand Herald, and went on to sing and act in Indian films.",
      "Her screen work includes Maska and Nikamma, and her music is a mix of Hindi and English songs.",
      "Shirley Setia is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "YouTube covers, Maska, Nikamma"],
      ["Languages", "Hindi, English"]
    ],
    why: [
      "A singer-actress who built her audience on YouTube.",
      "Her Hindi and English sets work for mixed crowds.",
      "Suits receptions, cocktail nights and youth-focused events."
    ]
  },
  "Hans Raj Hans": {
    about: [
      "Hans Raj Hans is a Punjabi folk and Sufi singer from Jalandhar who also sings film songs and Punjabi pop. He trained as a young man under Ustad Puran Shahkoti, who gave him the surname \"Hans\", and later recorded Gurbani and devotional songs.",
      "He sang with Nusrat Fateh Ali Khan in the film Kachche Dhaage, received the Padma Shri and a Sangeet Natak Akademi Award, and was reportedly the first Punjabi singer formally invited to perform at Gaddafi Stadium in Lahore, in 1997.",
      "Hans Raj Hans is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Jalandhar"],
      ["Known for", "Punjabi folk, Sufi, Padma Shri"],
      ["Languages", "Punjabi, Hindi"]
    ],
    why: [
      "A Padma Shri-winning Punjabi folk and Sufi singer.",
      "Sang with Nusrat Fateh Ali Khan in Kachche Dhaage.",
      "Suits Punjabi weddings, Sufi nights and cultural events."
    ]
  },
  "Qutbi Brothers (Arshad and Adnan Qutbi)": {
    about: [
      "The Qutbi Brothers are a qawwali group led by Haji Mohammad Idris, who performs with his two sons, Arshad and Adnan. Idris began his career in the 1970s, and his sons joined him on stage from the age of four or five. Arshad is the co-lead singer, with an emphasis on Sufi qawwali, and Adnan holds a postgraduate degree from the University of Delhi.",
      "They describe themselves as the inheritors of a centuries-old qawwali tradition. They report a non-stop 12-hour qawwali performance at the Sangeet Natak Akademi in Delhi in 2016, were included in the Limca Book of Records and are graded at the top level by All India Radio. They have also toured abroad.",
      "Qutbi Brothers is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Delhi"],
      ["Line-up", "Haji Mohammad Idris, Arshad Qutbi, Adnan Qutbi"]
    ],
    why: [
      "A father-and-sons qawwali group with a reported non-stop 12-hour qawwali performance in 2016.",
      "Graded at the top level by All India Radio.",
      "Suits Sufi nights, sangeets and corporate evenings."
    ]
  },
  "Haji Mohammad Idris": {
    about: [
      "Haji Mohammad Idris is a qawwali singer who leads the Qutbi Brothers with his sons Arshad and Adnan. His career began in the 1970s, and he has taught his sons to carry the qawwali tradition forward.",
      "The group performs Sufi qawwali and Sufi-Bollywood sets and has toured abroad.",
      "Haji Mohammad Idris is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Delhi"],
      ["Leads", "Qutbi Brothers"]
    ],
    why: [
      "The senior qawwal who leads the Qutbi Brothers and has performed for decades.",
      "Teaches his sons the tradition, so the act has authentic lineage.",
      "Suits Sufi nights, sangeets and festive gatherings."
    ]
  },
  "Nizami Bandhu": {
    about: [
      "Nizami Bandhu is a qawwali group made up of Ustad Chand Nizami and his nephews Shadab and Sohrab Faridi Nizami, the Darbari Qawwals of the shrine of Hazrat Nizamuddin Auliya in Delhi. Their wider fame came partly from the family's appearance in the film Rockstar, which was shot at the Nizamuddin shrine.",
      "They perform Sufi qawwali in the tradition of the Nizamuddin dargah.",
      "Nizami Bandhu is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Delhi"],
      ["Line-up", "Ustad Chand Nizami, Shadab Faridi Nizami, Sohrab Faridi Nizami"]
    ],
    why: [
      "Darbari qawwals of the Hazrat Nizamuddin Auliya shrine in Delhi.",
      "A family known beyond the dargah, including in the film Rockstar.",
      "Suits Sufi nights, weddings and cultural evenings."
    ]
  },
  "Ustad Chand Nizami": {
    about: [
      "Ustad Chand Nizami is a qawwali singer and, with his nephews Shadab and Sohrab Faridi Nizami, one of the Darbari Qawwals of the shrine of Hazrat Nizamuddin Auliya in Delhi. The group is known as Nizami Bandhu.",
      "The family appeared in the film Rockstar, which was shot at the Nizamuddin shrine.",
      "Ustad Chand Nizami is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Delhi"],
      ["Group", "Nizami Bandhu"]
    ],
    why: [
      "A senior qawwal who leads the Nizami Bandhu tradition at the Nizamuddin shrine.",
      "Authentic dargah style gives an evening real spiritual depth.",
      "Suits Sufi nights, weddings and cultural evenings."
    ]
  },
  "Shadab Faridi": {
    about: [
      "Shadab Faridi Nizami is a qawwali singer who performs with his uncle Ustad Chand Nizami and his brother Sohrab as the group Nizami Bandhu, the Darbari Qawwals of the shrine of Hazrat Nizamuddin Auliya in Delhi.",
      "The family appeared in the film Rockstar, which was shot at the Nizamuddin shrine.",
      "Shadab Faridi is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Delhi"],
      ["Group", "Nizami Bandhu"]
    ],
    why: [
      "A qawwal from the Darbari Nizami family of the Nizamuddin shrine.",
      "Performs alongside his uncle and brother as Nizami Bandhu.",
      "Suits Sufi nights, weddings and cultural evenings."
    ]
  },
  "Kavita Seth": {
    about: [
      "Kavita Seth is a singer from Bareilly, Uttar Pradesh, known for Sufi music and ghazals as well as Hindi film playback. A performance at a Sufi festival led to her first film song, for Vaada (2005), and she later moved to Mumbai.",
      "She has won the Filmfare Award for Best Female Playback Singer twice: for \"Iktara\" from Wake Up Sid and for \"Rangisari\" from Jugjugg Jeeyo, which she also composed with her son Kanishk Seth. Her 2008 album Sufiana is built on verses by Rumi.",
      "Kavita Seth is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Iktara, Rangisari, Sufiana"],
      ["Languages", "Hindi"]
    ],
    why: [
      "A two-time Filmfare Best Female Playback Singer winner for \"Iktara\" and \"Rangisari\".",
      "Her Sufi and ghazal depth, including the Rumi-based album Sufiana, suits reflective evenings.",
      "Suits receptions, Sufi nights and cultural concerts."
    ]
  },
  "Motherjane": {
    about: [
      "Motherjane is a rock band from Kochi, Kerala, formed in 1996 by drummer John Thomas, guitarist Mithun Raju and bassist Clyde Rozario. They are known for progressive rock with Carnatic influences.",
      "Their debut album Insane Biography (2002) won Best Indian Rock Album, and their second album Maktub (2008) reached global charts. Suraj Mani joined as vocalist and wrote the band's original songs, beginning with \"Disillusioned\". The band reunited in 2024 and released the EP 1 1 1.",
      "Motherjane is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Kochi"],
      ["Known for", "Insane Biography, Maktub, progressive rock"]
    ],
    why: [
      "A Kochi rock band formed in 1996, with Carnatic-influenced progressive rock.",
      "Debut album Insane Biography won Best Indian Rock Album.",
      "Suits college fests, concerts and corporate rock nights."
    ]
  },
  "Suraj Mani": {
    about: [
      "Suraj Mani is a singer and songwriter who joined the Kochi rock band Motherjane as vocalist after meeting the band at the Ancient Mariner in Kochi, and wrote the band's original songs beginning with \"Disillusioned\".",
      "He also performs as an indie singer.",
      "Suraj Mani is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Motherjane vocalist"]
    ],
    why: [
      "Vocalist of Motherjane who wrote the band's original songs from \"Disillusioned\".",
      "Brings rock-band stage experience to a solo set.",
      "Suits college fests, lounges and cocktail evenings."
    ]
  },
  "Lisa Mishra": {
    about: [
      "Lisa Mishra is a singer, songwriter and actress born in Odisha and raised in Chicago. She began posting cover versions on YouTube in 2007 and became known for the reprise of \"Tareefan\" in Veere Di Wedding (2018).",
      "Her songs include \"Chandigarh Mein\" from Good Newwz, \"The Wakhra Song\" from Judgementall Hai Kya and \"Coka 2.0\" from Liger. She signed with Universal Music India's VYRL Originals in 2019 and released her debut single, \"Nai Chaida\", in 2020.",
      "Lisa Mishra is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Tareefan, Chandigarh Mein, The Wakhra Song"],
      ["Languages", "Hindi, Punjabi, English"]
    ],
    why: [
      "Known for the \"Tareefan\" reprise and \"Chandigarh Mein\", party songs people recognise.",
      "Signed to Universal Music India's VYRL Originals, with her own releases.",
      "Suits sangeets, receptions and brand events."
    ]
  },
  "Stephen Devassy": {
    about: [
      "Stephen Devassy is a pianist, keytarist, keyboardist, composer and music director from Kerala, active since 1998. He began his own band, Seven, at nineteen, and has worked with A. R. Rahman, Hariharan and Shankar-Ehsaan-Loy, joining Rahman's Jai Ho tour.",
      "He founded Musik Lounge, an audio technology school and studio in Chennai, and his profile says he has performed in more than 60 countries.",
      "Stephen Devassy is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Instrument", "Piano, keytar, keyboards"],
      ["Known for", "Rahman's Jai Ho tour, Musik Lounge"]
    ],
    why: [
      "A pianist and keyboardist who has worked with A. R. Rahman and joined his Jai Ho tour.",
      "Performed in more than 60 countries, according to his profile.",
      "Suits receptions, concerts and corporate evenings."
    ]
  },
  "Salil Bhatt (Satvik Veena)": {
    about: [
      "Salil Bhatt is a classical musician from Jaipur and the creator of the Satvik Veena, an instrument that resembles a cello. He belongs to the tenth generation of the Bhatt family of musicians and is the son and disciple of the Grammy-winning Mohan Veena player Pandit Vishwa Mohan Bhatt.",
      "He gave his first solo concert at seventeen, in Birmingham, and his official site says he was the first Indian musician to perform in the Bavarian and Icelandic parliaments.",
      "Salil Bhatt is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Instrument", "Satvik Veena"],
      ["Based in", "Jaipur"]
    ],
    why: [
      "Creator of the Satvik Veena, an instrument people rarely see live.",
      "Tenth-generation musician from a celebrated Bhatt family.",
      "Suits classical evenings, ceremonies and cultural events."
    ]
  },
  "Hansraj Raghuwanshi": {
    about: [
      "Hansraj Raghuwanshi is a devotional singer from Himachal Pradesh, known mainly for Shiva bhajans. He became popular in 2019 with \"Mera Bhola Hai Bhandari\", which spread widely on social media.",
      "He made his film singing debut in Pal Pal Dil Ke Paas, released \"Duntara\" with Richa Sharma in 2020 and has sung a bhajan for OMG 2.",
      "Hansraj Raghuwanshi is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Mera Bhola Hai Bhandari, Shiva bhajans"]
    ],
    why: [
      "A Shiva bhajan singer who became popular with \"Mera Bhola Hai Bhandari\".",
      "Film singing credits including Pal Pal Dil Ke Paas.",
      "Suits jagrans, Shivratri events and devotional evenings."
    ]
  },
  "Lakhbir Singh Lakkha": {
    about: [
      "Lakhbir Singh Lakkha is a bhajan and jagran singer of Punjabi origin, known for energetic Mata Rani devotional music. He began singing professionally at the Shiv temple in Deoghar, Jharkhand, and is based in Mumbai.",
      "He is known for Navratri bhajans such as \"Pyara Saja Hai\" and \"Maiya Ka Chola\", has performed abroad and released the album Maa Shakti Teri Mahima Apar Jai Jai Purnagiri Darbar in 2022.",
      "Lakhbir Singh Lakkha is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Mata Rani bhajans, Navratri jagrans"],
      ["Based in", "Mumbai"]
    ],
    why: [
      "A bhajan and jagran singer known for energetic Mata Rani devotional music.",
      "Navratri favourites like \"Maiya Ka Chola\" bring communal energy.",
      "Suits chowkis, jagrans and festive devotional nights."
    ]
  },
  "Hemant Brijwasi": {
    about: [
      "Hemant Brijwasi is a singer who won the reality show Rising Star 2 in 2018. His father is also a singer, and his three younger brothers sing as well.",
      "He has sung playback for films including Soorma (2018) and Manikarnika, and performs bhajans at jagran events.",
      "Hemant Brijwasi is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Rising Star 2 winner"],
      ["Languages", "Hindi"]
    ],
    why: [
      "Winner of Rising Star 2 and a playback singer for Soorma and Manikarnika.",
      "Performs bhajans at jagran events as well as film songs.",
      "Suits jagrans, family functions and festive shows."
    ]
  },
  "Urvashi Radadiya": {
    about: [
      "Urvashi Radadiya is a Gujarati folk singer, often called \"Kathiawar's cuckoo\", who began singing at a young age and performs live across Gujarat, from Gandhinagar to Kutch.",
      "Her releases include songs such as \"Gamdu\" and \"Gajanand\", and she has also performed for Gujarati audiences in Australia.",
      "Urvashi Radadiya is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Gujarati folk"],
      ["Languages", "Gujarati"]
    ],
    why: [
      "A popular Gujarati folk voice, called \"Kathiawar's cuckoo\".",
      "Her live shows across Gujarat show comfort with large garba-style crowds.",
      "Suits garba nights, weddings and cultural events."
    ]
  },
  "Wadali Brothers": {
    about: [
      "The Wadali Brothers are Sufi singers from Guru Ki Wadali, near Amritsar in Punjab, from a family that has sung the messages of Sufi saints for five generations. They began as bhajan singers at a temple in Jalandhar, and made their Bollywood debut with songs by Gulzar for the film Pinjar.",
      "Puranchand Wadali received the Padma Shri in 2005, and the duo shared the Sangeet Natak Akademi Award. Since the death of Pyarelal Wadali in 2018, Puranchand has continued the music with his son Lakhwinder Wadali, who trained under his father and uncle and performs with him in concerts in India and abroad to keep the gharana's tradition alive.",
      "Wadali Brothers is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Line-up", "Puranchand Wadali, Lakhwinder Wadali"],
      ["Known for", "Sufi singing, Padma Shri"],
      ["Languages", "Punjabi, Urdu, Hindi"]
    ],
    why: [
      "A fifth-generation Sufi family from Guru Ki Wadali, now carried on by Puranchand Wadali and his son Lakhwinder.",
      "Puranchand is a Padma Shri recipient, so the lineage is authentic.",
      "Suits Sufi nights, weddings and cultural evenings."
    ]
  },
  "Nizami Brothers": {
    about: [
      "The Nizami Brothers are a Delhi qawwali group led by Faizan Nizami, Zeeshan Nizami and Khwaja Hasan Nizami. They were finalists on India's Got Talent season 8, and their renditions led to repeat appearances on the show.",
      "Their family is reported to descend from court singers to the Mughal emperors, and they perform Sufi qawwali for weddings, shows and festivals.",
      "Nizami Brothers is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Delhi"],
      ["Line-up", "Faizan Nizami, Zeeshan Nizami, Khwaja Hasan Nizami"],
      ["Known for", "India's Got Talent season 8 finalists"]
    ],
    why: [
      "Finalists on India's Got Talent season 8, so they come with TV credibility.",
      "A Delhi qawwali group with a stage-ready presentation.",
      "Suits Sufi nights, weddings and corporate evenings."
    ]
  },
  "Daksh Band": {
    about: [
      "Daksh is a Delhi band playing Sufi rock with a Bollywood flavour. It was founded by Kavish Mishra, who chose the name, which means dexterous in Hindi and carries the sense of perfection. The members set out to build a professional career in music rather than treat it as a school pastime.",
      "Wedding listings place the band's live performances from around 2007, in a high-energy Sufi rock fusion style.",
      "Daksh Band is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Delhi"],
      ["Known for", "Sufi rock, Bollywood covers"]
    ],
    why: [
      "A Delhi Sufi-rock band that mixes Bollywood favourites with Sufi energy.",
      "Has been performing live since around 2007.",
      "Suits sangeets, receptions and corporate parties."
    ]
  },
  "The Frequency Project": {
    about: [
      "The Frequency Project is a live band from Delhi playing Sufi and Bollywood music. A booking listing says it has performed for more than eight years at all kinds of events.",
      "It headlined a Sufi night at Ministry of Sound in Noida in April 2023.",
      "The Frequency Project is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Delhi"],
      ["Known for", "Sufi and Bollywood live sets"]
    ],
    why: [
      "A Delhi live band for Sufi and Bollywood sets, with a sold-out Sufi night at Ministry of Sound in 2023.",
      "Over eight years of live event experience, per its listing.",
      "Suits receptions, lounges and corporate parties."
    ]
  },
  "Aflatunes Band": {
    about: [
      "Aflatunes is a Mumbai a cappella collective of beatmakers and vocalists, including beatmakers Roy Navarun, Anish Nair, Nilay Singh, Dany Marshall and Jaimish Ashar and vocalists Aruna Jade, Jennifer Fernandes and Ruchee Varghese. They gained attention with a cappella covers of Hindi classics such as \"Sar Jo Tera Chakraye\" and \"Mile Sur Mera Tumhara\".",
      "They released \"AflaRani\", a medley of tracks from Nucleya's Bass Rani EP, with Shraddha Sharma and Enkore.",
      "Aflatunes Band is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Mumbai"],
      ["Known for", "A cappella covers, AflaRani"]
    ],
    why: [
      "An a cappella collective of beatmakers and vocalists, a fresh alternative to a standard band.",
      "Known for Hindi-classic covers and the AflaRani medley of Nucleya's Bass Rani tracks.",
      "Suits receptions, corporate events and college fests."
    ]
  },
  "Best Kept Secret": {
    about: [
      "Best Kept Secret is a Bengaluru band playing electro-pop, rock and funk, and is known for its Coldplay tribute set. Its live shows draw on pop, disco, blues and rock. The band was formerly known as One Nite Stand.",
      "The current line-up includes lead vocalist Behram Siganporia, guitarist Hemanth Diwakaran, drummer Abhilash EK and keyboardist Steve Rajan. The band opened for Bryan Adams in Bengaluru in December 2024.",
      "Best Kept Secret is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Bengaluru"],
      ["Known for", "Coldplay tribute set, pop-rock covers"]
    ],
    why: [
      "A Bengaluru pop-rock band known for its Coldplay tribute set.",
      "Opened for Bryan Adams in Bengaluru in 2024.",
      "Suits corporate events, lounges and college fests."
    ]
  },
  "Delhi Indie Project": {
    about: [
      "Delhi Indie Project is a Delhi experimental indie rock band launched in 2015, with Ashish Chauhan as founder and lead vocalist. It reports more than a thousand gigs in India and abroad and blends Sufi, Bollywood, folk and Punjabi music with jazz, blues, funk and Latin influences.",
      "The band opened for Bryan Adams in Delhi in December 2024 and has played the South Asian Band Festival, Delhi International Arts Fest and Dubai Festival. Its releases include \"Lakshya\" and a reprise of \"Main Teri Yaad\" with Srijita Konar.",
      "Delhi Indie Project is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Delhi"],
      ["Known for", "Lakshya, opening for Bryan Adams"]
    ],
    why: [
      "A Delhi band with over a thousand gigs, so very stage-ready.",
      "Opened for Bryan Adams in Delhi in December 2024.",
      "Suits corporate evenings, college fests and cocktail nights."
    ]
  },
  "Madari": {
    about: [
      "Madari is a Delhi Hindi rock band that blends Bollywood, pop and rock into a raw sound. The name refers to an entertainer who juggles many things, which the band says reflects its approach to music.",
      "It is listed as a live band for events, with sets of around 90 to 120 minutes.",
      "Madari is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Delhi"],
      ["Set length", "90 to 120 minutes"]
    ],
    why: [
      "A Delhi Hindi rock band that blends Bollywood, pop and rock.",
      "Typical sets run 90 to 120 minutes, suiting a full evening.",
      "Suits college fests, corporate events and parties."
    ]
  },
  "Kanishk Sethi": {
    about: [
      "Kanishk Seth is a composer, singer and songwriter based in Mumbai, whose work blends electronic music with Indian classical styles. He comes from a musical family: his mother is the Sufi and playback singer Kavita Seth.",
      "He gained wider attention with the fusion album Trance With Khusrow (2015), made with his mother, and sang \"Rangisari\" from Jugjugg Jeeyo with her. His credits also include \"Ki Jaana\" from Double XL and \"Khumaari\" from Kesari Chapter 2.",
      "Kanishk Sethi is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Mumbai"],
      ["Known for", "Trance With Khusrow, Rangisari"]
    ],
    why: [
      "A Mumbai composer-singer who blends electronic and Indian classical styles.",
      "Co-created Trance With Khusrow and sang \"Rangisari\" with Kavita Seth.",
      "Suits lounges, receptions and corporate evenings."
    ]
  },
  "Kayan": {
    about: [
      "Kayan is the stage name of Ambika Nayak, a Mumbai singer, songwriter and DJ who is also classically trained as a dancer and singer; her mother is a Hindustani classical vocalist. She began releasing her own music as Kayan in 2020 and was soon one of the most-streamed independent female artists on Spotify in India.",
      "Her singles include \"Cool Kids\", \"Please\", \"Be Alright\" and \"No Shade\" with the Singapore rapper Yung Raja. She has been named to Forbes 30 Under 30 and was selected for the YouTube Music Foundry.",
      "Kayan is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Mumbai"],
      ["Known for", "Cool Kids, Please, No Shade"],
      ["Languages", "English, Hindi"]
    ],
    why: [
      "A Mumbai singer-songwriter named to Forbes 30 Under 30 and chosen for YouTube Music Foundry.",
      "Hits like \"Cool Kids\" and \"No Shade\" suit a younger crowd.",
      "Suits lounges, brand events and cocktail evenings."
    ]
  },
  "Aishwarya Majumdar": {
    about: [
      "Aishwarya Majmudar is a singer from Ahmedabad, Gujarat, who rose to fame by winning the 2007-08 season of the reality show STAR Voice of India - Chhote Ustad at the age of fifteen. She comes from a musical family: her mother and grandmother both hold Sangeet Visharad qualifications in Indian classical music.",
      "She has sung playback for Hindi films, performs traditional Gujarati songs, has released more than fifteen independent albums in Hindi, Gujarati and Marathi and has won the Gujarat State Award for Best Playback Singer three times.",
      "Aishwarya Majumdar is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Ahmedabad"],
      ["Known for", "STAR Voice of India - Chhote Ustad winner"],
      ["Languages", "Gujarati, Hindi, Marathi"]
    ],
    why: [
      "Winner of STAR Voice of India - Chhote Ustad and a three-time Gujarat State Award winner.",
      "Sings in Hindi, Gujarati and Marathi, which suits mixed family audiences.",
      "Suits garba nights, weddings and cultural events."
    ]
  },
  "DJ Barkha Kaul": {
    about: [
      "Barkha Kaul is a Delhi DJ who moved into DJing in 2008 after about eleven years as a model. Her profile describes her sets as Bollywood, hip hop and commercial house.",
      "She has worked with DJ Glory on a Darshan Raval mashup and with Darshan Raval on \"Ek Tarfa\", and has been featured among India's women DJs.",
      "DJ Barkha Kaul is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Delhi"],
      ["Known for", "Bollywood, hip hop and commercial house sets"]
    ],
    why: [
      "A Delhi DJ who plays Bollywood, hip hop and commercial house.",
      "Has worked on a mashup and a song with Darshan Raval.",
      "Suits sangeets, club nights and parties."
    ]
  },
  "Apoorv Singh Verma": {
    about: [
      "Apoorv Singh Verma performs as a DJ, drummer, percussionist and rapper in a one-man show, The Apoorv Singh Show, which combines DJing, drums, percussion, rap and liquid, fire and powder drums. He began on the reality show MTV Rock On and now also works as a composer and lyricist.",
      "He has appeared on India's Got Talent, played drums on Sa Re Ga Ma Pa Lil Champs and led the band for Kailash Kher's group Avdhu. He has also made the indie track \"Daastan\" with the singer Amit Mishra.",
      "Apoorv Singh Verma is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Mumbai"],
      ["Known for", "The Apoorv Singh Show, MTV Rock On"]
    ],
    why: [
      "A one-man show combining DJing, drums, percussion and rap.",
      "Experience as a bandleader for Kailash Kher's band and on India's Got Talent.",
      "Suits sangeets, receptions and brand events."
    ]
  },
  "DJ Rhea": {
    about: [
      "DJ Rhea is a Bengaluru DJ and percussionist whose vendor profile lists more than five years of experience and events including the Filmfare Awards South and IPL post-parties for Kolkata Knight Riders.",
      "Her sets cover commercial, Punjabi, hip hop, EDM, house and Bollywood.",
      "DJ Rhea is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Bengaluru"],
      ["Known for", "DJ and live percussion"]
    ],
    why: [
      "A DJ and percussionist, so the set can add live rhythm.",
      "Her profile lists Filmfare Awards South and IPL KKR post-parties among past events.",
      "Suits sangeets, club nights and parties."
    ]
  },
  "Tamasha": {
    about: [
      "Tamasha is a performance-led wedding and events band that describes itself as an experimental alternative rock and pop act. Its line-up combines three vocalists, a DJ, live percussionists, dholis and a violinist, and it has performed in cities across India and abroad.",
      "Its profile names Manish as lead vocalist, Anurag and Sukhmani as vocalists, Sukhbir and Shail as DJs, Sultan on violin and Vipin on instruments.",
      "Tamasha is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Line-up", "Vocalists, DJ, dhol, violin, percussion"],
      ["Known for", "Wedding and sangeet performances"]
    ],
    why: [
      "A wedding-focused band with vocalists, DJs, dholis, percussion and violin.",
      "Performs across Indian cities and abroad.",
      "Suits sangeets, receptions and baraats."
    ]
  },
  "Made In India": {
    about: [
      "Made In India is an instrumental band from the Delhi region that blends Indian classical music with Western and jazz influences.",
      "Made In India is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Delhi NCR"],
      ["Known for", "Instrumental Indian classical and jazz fusion"]
    ],
    why: [
      "An instrumental band mixing Indian classical with jazz and Western influences.",
      "Delhi NCR-based, which helps with local weddings and events.",
      "Suits ceremonies, cocktail hours and dinners."
    ]
  },
  "Rajan Batra": {
    about: [
      "Rajan Batra is the lead vocalist and lyricist of The Yellow Diary, a Mumbai alternative pop-rock band formed in 2015. The band signed with Sony Music in 2017 and released the EP Marz, followed by singles including \"Roz Roz\" with Shilpa Rao.",
      "Rajan Batra is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Mumbai"],
      ["Band", "The Yellow Diary"]
    ],
    why: [
      "Lead vocalist and lyricist of The Yellow Diary, a Sony Music pop-rock band.",
      "Known for \"Roz Roz\" with Shilpa Rao.",
      "Suits corporate evenings, cocktail nights and college fests."
    ]
  },
  "Himonshu Parikh": {
    about: [
      "Himonshu Parikh is the singer-keyboardist and composer of The Yellow Diary, a Mumbai alternative pop-rock band formed in 2015. The band blends rock, electronic and Indian classical music, and opened for A. R. Rahman's Wonderment Tour.",
      "Himonshu Parikh is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Mumbai"],
      ["Band", "The Yellow Diary"]
    ],
    why: [
      "Singer-keyboardist and composer of The Yellow Diary.",
      "The band opened for A. R. Rahman's Wonderment Tour.",
      "Suits lounges, receptions and corporate evenings."
    ]
  },
  "Stuart DaCosta": {
    about: [
      "Stuart DaCosta is the bassist of The Yellow Diary, a Mumbai alternative pop-rock band formed in 2015. The band released its debut album In Case We Forget in 2025 and has played Lollapalooza India.",
      "Stuart DaCosta is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Mumbai"],
      ["Band", "The Yellow Diary"]
    ],
    why: [
      "Bassist of The Yellow Diary, which released the album In Case We Forget in 2025.",
      "Band has played Lollapalooza India.",
      "Suits corporate evenings, lounges and college fests."
    ]
  },
  "Chugge Khan and Rajasthan Josh": {
    about: [
      "Rajasthan Josh is a collective of Manganiyar musicians from the Barmer and Jaisalmer districts of Rajasthan, formed in 2009 and led by Chugge Khan. The group brings together three strains of music that are rarely heard together: qawwali, Manganiyar court music and a big, boisterous Rajasthani brass band.",
      "Chugge Khan plays traditional Rajasthani instruments such as the morchang, khartal and bhappang and writes Rajasthani folk lyrics. The group's repertoire reaches into Sufi qawwali, bhajans, Sindhi and Punjabi folk and contemporary fusion, and its album Rajasthan Josh: Chugge Khan and Band was released in 2012.",
      "Chugge Khan and Rajasthan Josh is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Line-up", "Manganiyar musicians led by Chugge Khan"],
      ["Known for", "Manganiyar folk, qawwali and brass-band fusion"],
      ["Languages", "Rajasthani, Hindi, Punjabi, Sindhi"]
    ],
    why: [
      "A Manganiyar collective blending qawwali, court music and a Rajasthani brass band.",
      "Formed in 2009 and released the album Rajasthan Josh in 2012.",
      "Suits baraats, welcome moments, weddings and festivals."
    ]
  },
  "Deene Khan": {
    about: [
      "Deene Khan is a folk and Sufi singer from a Manganiyar family of master singers in Rajasthan, taught by his father Ramjan Khan. His career began in Chelak, a village near Jaisalmer, and his repertoire covers traditional folk and Sufi songs in the Manganiyar style.",
      "Deene Khan is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Manganiyar folk and Sufi singing"],
      ["Languages", "Rajasthani, Hindi"]
    ],
    why: [
      "A Manganiyar folk and Sufi singer from a family of master singers.",
      "Taught by his father Ramjan Khan, so the style is authentic.",
      "Suits weddings, cultural evenings and Sufi nights."
    ]
  },
  "Sadho": {
    about: [
      "Sadho is a Delhi folk-pop ensemble that aims to represent and revive Indian classical music, traditional genres, Sufi and folk for a younger audience. Its repertoire spans Sufi, qawwali, Bollywood, folk, ghazal and classical music.",
      "The band performs at weddings, corporate events and stage shows.",
      "Sadho is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Delhi"],
      ["Known for", "Folk-pop, Sufi and qawwali sets"]
    ],
    why: [
      "A Delhi folk-pop ensemble reviving Sufi, qawwali, ghazal and folk for younger audiences.",
      "Performs at weddings, corporate events and stage shows.",
      "Suits sangeets, corporate evenings and Sufi nights."
    ]
  },
  "Rana Dholi (folk music and dance)": {
    about: [
      "Rana Dholi is a Rajasthani folk entertainment group offering folk music along with Ghoomar and Kalbeliya dance, with packages for weddings and events. The Dholi community takes its name from the dhol, the barrel-shaped drum at the heart of its music, and claims descent from the poet Chand Bardai.",
      "Rana Dholi is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Rajasthani folk music, Ghoomar and Kalbeliya dance"],
      ["Languages", "Rajasthani, Hindi"]
    ],
    why: [
      "A Rajasthani folk group offering music with Ghoomar and Kalbeliya dance.",
      "Dhol-led music brings colour and energy to an entry.",
      "Suits baraats, welcome moments and cultural events."
    ]
  },
  "Osho Jain": {
    about: [
      "Osho Jain is an indie singer-songwriter, composer and producer born in Indore and based in Mumbai. He began as lead singer and songwriter of the indie rock band Aankh Micholi and moved to a solo career in 2016, sharing covers and originals on YouTube.",
      "He is known for poetic Hindi and Urdu lyrics and songs such as \"Khush To Hai Na\", \"Khud Se\" and \"Tu Aisa Kaise Hai\". His debut album Saar has nine tracks, five of them duets, mostly with Sanchi Mannotra.",
      "Osho Jain is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Mumbai"],
      ["Known for", "Khush To Hai Na, Khud Se, Saar"],
      ["Languages", "Hindi, Urdu"]
    ],
    why: [
      "An indie singer-songwriter with poetic Hindi and Urdu lyrics.",
      "Known for \"Khush To Hai Na\" and the album Saar.",
      "Suits cocktail nights, lounges and intimate events."
    ]
  },
  "Zaeden": {
    about: [
      "Zaeden is the stage name of Sahil Sharma, a singer and producer from Gurugram who began as a DJ at fourteen and later studied sound engineering in Mumbai. In 2016 he was a closing act at David Guetta's Mumbai concert, and he is one of the few Indian artists to have played Belgium's Tomorrowland festival.",
      "He moved from electronic music to singing and songwriting around 2019, released his debut album Genesis 1:1 in 2021 and is also known for \"Aa Mil\" with Lisa Mishra and \"Tere Jaane Se\" with Ankit Tiwari.",
      "Zaeden is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Genesis 1:1, Aa Mil, Tomorrowland"],
      ["Languages", "Hindi, English"]
    ],
    why: [
      "A singer and producer who was a closing act at David Guetta's Mumbai concert and played Tomorrowland.",
      "Electronic-pop sets with songs like \"Aa Mil\" suit a party crowd.",
      "Suits college fests, club nights and brand events."
    ]
  },
  "Twin Strings": {
    about: [
      "Twin Strings is a Delhi indie act that began with twin brothers Sagar and Sahil, who were later joined by Manav and Mohit. They started during their engineering studies and left it to take up music full time.",
      "They are known for acoustic covers and original songs, and have collaborated with brands and institutions including Netflix, Google and the Indian Army.",
      "Twin Strings is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Delhi"],
      ["Known for", "Acoustic covers and originals"]
    ],
    why: [
      "A Delhi indie act known for acoustic covers and originals.",
      "Has collaborated with Netflix, Google and the Indian Army.",
      "Suits lounges, receptions and corporate evenings."
    ]
  },
  "Nirakar": {
    about: [
      "Nirakar is an Indian jazz band, listed as based in London, that formed in 2004 to build a sound for ambient listening. Its music blends traditional North Indian melodies with contemporary jazz and Latin grooves.",
      "The band has played corporate events, weddings and private functions.",
      "Nirakar is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Indo jazz"]
    ],
    why: [
      "A jazz band blending North Indian melodies with jazz and Latin grooves.",
      "Has played corporate events and weddings.",
      "Suits cocktail hours, dinners and corporate evenings."
    ]
  },
  "Mangesh Desai": {
    about: [
      "Mangesh Desai is a stand-up illusionist and mentalist who began performing magic at the age of five. His act combines magic and mind reading with comedy, and he has performed across India and as an on-board magician on American cruise ships.",
      "He is a partner in Magic Terminal, which describes itself as India's first magic training company, has appeared on talent shows including India's Got Talent, and gave a TEDxPanchgani talk titled \"Understanding illusions, improving decisions\".",
      "Mangesh Desai is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Known for", "Illusion and mentalism with comedy"],
      ["Languages", "Hindi, English"]
    ],
    why: [
      "A stand-up illusionist and mentalist performing since the age of five.",
      "Has performed on American cruise ships and gave a TEDx talk on illusions.",
      "Suits weddings, corporate events and family shows."
    ]
  },
  "Rakesh Syam": {
    about: [
      "Rakesh Syam is a mentalist and mind reader based in Mumbai whose act mixes telepathy-style mind reading with close-up illusions that can be customised for each event. His profile says he has headlined on Carnival Cruise Lines for more than a decade and performed at corporate conferences.",
      "Rakesh Syam is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Mumbai"],
      ["Known for", "Mentalism and mind reading"]
    ],
    why: [
      "A Mumbai mentalist whose profile lists more than a decade headlining on Carnival Cruise Lines.",
      "Customisable close-up illusions fit different venues.",
      "Suits cocktail hours, corporate events and private parties."
    ]
  },
  "Ankit Batra": {
    about: [
      "Ankit Batra is a Delhi singer, composer and guitarist who left an engineering career and a corporate job in 2010 to take up music full time. He is described as a pioneer of musical pheras in India, where the wedding mantras are sung in a musical style while their meaning is explained.",
      "He is best known for his devotional rendition of the Achyutam Keshavam bhajan and is also booked for Mata ki chowki, Sai sandhya and Sufi-Bollywood evenings. He sang the Vedic mantras at the 2026 wedding of Nupur Sanon and Stebin Ben in Udaipur.",
      "Ankit Batra is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Delhi"],
      ["Known for", "Musical pheras, Achyutam Keshavam"],
      ["Languages", "Hindi, Sanskrit"]
    ],
    why: [
      "A pioneer of musical pheras, singing the wedding mantras with their meaning.",
      "Known for the Achyutam Keshavam bhajan and celebrity-wedding coverage.",
      "Suits musical pheras, chowkis and sai sandhyas."
    ]
  },
  "Mehul Pandit": {
    about: [
      "Mehul Pandit is a Bengaluru singer whose wedding act sings during the pheras and the wedding chants as well as across the ceremony and reception. Clients praise his Punjabi folk performances and his ability to get the whole reception dancing.",
      "He travels for destination weddings.",
      "Mehul Pandit is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Bengaluru"],
      ["Known for", "Musical pheras, Punjabi folk"]
    ],
    why: [
      "Sings through the pheras and wedding chants as well as the reception.",
      "Clients praise his Punjabi folk performances and crowd energy.",
      "Suits weddings, pheras and receptions."
    ]
  },
  "Siddharth Mohan": {
    about: [
      "Siddharth Mohan is a devotional singer and composer from New Delhi who sings bhajans and works in playback. He began singing at eleven, was encouraged by Sri Sri Ravi Shankar, and trained as an engineer and worked for a multinational company before taking up music full time. He plays flute and guitar.",
      "His albums include Shukrana, Nithya and Shivansh, released through labels such as Saregama, The Art of Living and T-Series, and he works closely with the composers Bawa-Gulzar.",
      "Siddharth Mohan is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Delhi"],
      ["Known for", "Bhajans, Shukrana, Nithya"],
      ["Languages", "Hindi, Punjabi, Tamil"]
    ],
    why: [
      "A devotional singer encouraged by Sri Sri Ravi Shankar from childhood.",
      "Albums like Shukrana and Nithya release through labels including Saregama and T-Series.",
      "Suits pheras, chowkis and devotional evenings."
    ]
  },
  "Bombay Chamber Orchestra": {
    about: [
      "The Bombay Chamber Orchestra is one of India's oldest active Western classical orchestras. It grew out of the Bombay Philharmonia and was set up in 1962 by Jini Dinshaw as an educational trust, offering free coaching to young local musicians.",
      "It is often described as the longest-running orchestra in Mumbai's history.",
      "Bombay Chamber Orchestra is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Mumbai"],
      ["Founded", "1962"],
      ["Style", "Western classical orchestra"]
    ],
    why: [
      "India's oldest active Western classical orchestra, founded in 1962.",
      "A full orchestral sound makes a statement at formal events.",
      "Suits galas, receptions and corporate dinners."
    ]
  },
  "Hiten Panwar": {
    about: [
      "Hiten Panwar is a percussionist based in Delhi NCR who plays more than fifteen percussion instruments, including the darbuka, cajon, tabla and drums. He was earlier part of bands including Nasha and Nasya before becoming a solo percussionist.",
      "He is known for blending traditional rhythms with contemporary music, and adds live percussion over recorded or DJ sets.",
      "Hiten Panwar is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Delhi NCR"],
      ["Instruments", "Darbuka, cajon, tabla, drums and more"]
    ],
    why: [
      "A percussionist who plays over fifteen instruments including darbuka, cajon, tabla and drums.",
      "Can add live percussion over a DJ or recorded set.",
      "Suits sangeets, receptions and club-style events."
    ]
  },
  "Mohsick": {
    about: [
      "Mohsick is the stage name of Mohsin Khan, a percussionist and live act based in Mumbai. He performs live percussion alongside DJs, blending percussion with electronic dance music at clubs, private events and festivals, and has performed with DJ Ekant.",
      "He also makes original music.",
      "Mohsick is available for booking through Artisans of Sound. Share your date, city and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Based in", "Mumbai"],
      ["Known for", "Live percussion with DJs"]
    ],
    why: [
      "A live percussionist who performs alongside DJs.",
      "Blends percussion with electronic dance music for clubs and festivals.",
      "Suits sangeets, parties and club-style events."
    ]
  }
};

// Other spellings people search for. Used only by the search box, never shown. "Act name exactly as on the site": "other spelling, other spelling"
window.AOS_ALIASES = {
  "Qutbi Brothers (Arshad and Adnan Qutbi)": "Qutubi Brothers, Kutubi Brothers",
  "Nizami Bandhu": "Sohrab Faridi, Sohrab Faridi Nizami, Ustad Chand Nizami, Chand Nizami",
  "Damsaaz": "Dam Saaz, Dum Saaz"
};
