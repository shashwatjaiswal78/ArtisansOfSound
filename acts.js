// Artist roster shared by every page. Fields: name, format code, city, label, photo, tag, more (1 = wider network), extra occasions.
// Photos the category, event and Top artists tiles may use as covers. A new artist photo goes on that artist's own card only;
// add its path here later, when we arrange tile covers.
window.AOS_COVERS = ["img/act-ayush.jpg", "img/act-checkmate.jpg", "img/act-diwan.jpg", "img/act-filmysthan.jpg", "img/act-izhar.jpg", "img/act-jyotsna.jpg", "img/act-kartikk.jpg", "img/act-khushi.jpg", "img/act-maneswita.jpg", "img/act-nikhil2.jpg", "img/act-panda.jpg", "img/act-perisha.jpg", "img/act-pianowali.jpg", "img/act-raavana3.jpg", "img/act-ravetek.jpg", "img/act-sahibjeet.jpg", "img/act-stellar.jpg", "img/act-zaad.jpg"];
window.AOS_RAW = [["Checkmate", "live", "Delhi", "", "img/act-checkmate.jpg", ""], ["Filmysthan", "djband", "Delhi", "", "img/act-filmysthan.jpg", ""], ["Khushi Walia Live", "allgirl", "Delhi", "", "img/act-khushi.jpg", ""], ["DJ Perisha", "dj", "Delhi", "", "img/act-perisha.jpg", ""], ["Kartikk", "dj", "Delhi", "", "img/act-kartikk.jpg", ""], ["Panda Music", "dj", "Delhi", "", "img/act-panda.jpg", ""], ["Maneswita", "dj,djperc", "Delhi", "DJ, percussion", "img/act-maneswita.jpg", ""], ["Piano Wali", "lounge,soloinst", "Delhi", "Instrumental, keyboard", "img/act-pianowali.jpg", ""], ["Izhar", "lounge,soloinst,instrband", "Delhi", "Instrumental, violin (duet or trio)", "img/act-izhar.jpg", ""], ["Stellar Strings", "intl,instrband", "Delhi", "", "img/act-stellar.jpg", ""], ["Diwan-e-Khas", "sufibolly", "Delhi", "", "img/act-diwan.jpg", ""], ["Nikhil Majotra", "sufibolly", "Delhi", "", "img/act-nikhil2.jpg", ""], ["Sahibjeet Kaur", "anchor", "Delhi", "", "img/act-sahibjeet.jpg", ""], ["DJ Ravetek", "dj", "Lucknow", "", "img/act-ravetek.jpg", ""], ["DJ Zaad", "dj", "Lucknow", "", "img/act-zaad.jpg", ""], ["Aayush", "lounge,soloinst,instrband", "Lucknow", "Instrumental, violin", "img/act-ayush.jpg", ""], ["Jyotsna Navandar", "allgirl,celeb", "Mumbai", "", "img/act-jyotsna.jpg", "Celebrity artist"], ["Raavana Live", "djperc", "Mumbai", "", "img/act-raavana3.jpg", ""], ["Aayush", "live", "Delhi", "", "", ""], ["Amyr Khandani", "live", "Delhi", "", "", ""], ["The Band Nadaan", "live", "Delhi", "", "", ""], ["Classico & Naina Live", "live", "Delhi", "", "", ""], ["Dark White", "live", "Delhi", "", "", ""], ["Ketan Verma", "live", "Delhi", "", "", ""], ["Navjot", "live", "Delhi", "", "", ""], ["Piyush", "live", "Delhi", "", "", ""], ["Raaul", "live", "Delhi", "", "", ""], ["Saurav", "live", "Delhi", "", "", ""], ["Swarism", "live", "Delhi", "", "", ""], ["Aqua Beats", "djband", "Delhi", "", "", ""], ["Blockbuster", "djband", "Delhi", "", "", ""], ["Filmeewood", "djband", "Delhi", "", "", ""], ["Malhaar", "djband", "Delhi", "", "", ""], ["Tathastu", "djband", "Delhi", "", "", ""], ["DJ Ashu", "dj", "Delhi", "", "", ""], ["DJ Ruddy", "dj", "Delhi", "", "", ""], ["Ananya", "duotrio", "Delhi", "Duo", "", ""], ["Devanshu", "duotrio", "Delhi", "Duo", "", ""], ["Hardil Gulwan", "solosing,duotrio", "Delhi", "Solo to band", "", ""], ["Naman Sharma", "solosing,duotrio", "Delhi", "Solo to band", "", ""], ["Satin Soul Collective", "western,jazz", "Delhi", "", "", ""], ["Lavisha", "anchor", "Delhi", "", "", ""], ["Maddy", "anchor", "Delhi", "", "", ""], ["Megha", "anchor", "Delhi", "", "", ""], ["Shikha Pandey", "anchor", "Delhi", "", "", ""], ["Arush", "live", "Lucknow", "", "", ""], ["The Harmony Band", "live", "Lucknow", "", "", ""], ["Madtown Funk", "live", "Lucknow", "", "", ""], ["Neptune", "live", "Lucknow", "", "", ""], ["Naacheez", "live", "Lucknow", "", "", ""], ["Supriya Collective", "live", "Lucknow", "", "", ""], ["DJ Aahana", "dj", "Lucknow", "", "", ""], ["DJ Ayush", "dj", "Lucknow", "", "", ""], ["DJ Prince", "dj", "Lucknow", "", "", ""], ["DJ Shubh", "dj", "Lucknow", "", "", ""], ["DJ Sufi", "dj", "Lucknow", "", "", ""], ["DJ Tapasvi", "dj", "Lucknow", "", "", ""], ["Shiva", "solosing,duotrio", "Lucknow", "Solo or duo", "", ""], ["Shivansh Srivastava", "solosing", "Lucknow", "Solo", "", ""], ["Vansh", "duotrio", "Lucknow", "Duo", "", ""], ["Ak Singh", "live", "Mumbai", "", "", ""], ["Desi Chord", "live", "Mumbai", "", "", ""], ["Joshua", "live", "Mumbai", "", "", ""], ["Siddharth Singh Live", "live", "Mumbai", "Live band (trio to band)", "", ""], ["A Trebled Soul", "solosing,duotrio", "Mumbai", "Solo to band", "", ""], ["Srishhti Bhitrikothiy", "solosing,duotrio", "Mumbai", "Duo to band", "", ""], ["Suyash Medh", "solosing", "Mumbai", "Solo", "", ""], ["Seher Band", "live", "Bangalore", "", "", ""], ["Jay Patel", "live", "Ahmedabad", "", "", ""], ["Hussain K", "anchor", "Pan-India", "", "img/act-hussain.jpg", "TV celebrity", 1], ["Roshni Chopra", "anchor", "Pan-India", "", "img/act-roshni.jpg", "TV celebrity", 1], ["Shruti Seth", "anchor", "Pan-India", "", "img/act-shruti.jpg", "TV celebrity", 1], ["Sonam C Chabbra", "anchor", "Pan-India", "", "img/act-sonam.jpg", "", 1], ["Kunal Ganjawala", "bollyretro", "Pan-India", "", "img/act-kunalg.jpg", "", 1], ["Sanam", "bollyretro", "Pan-India", "", "img/act-sanam.jpg", "", 1], ["AP Dhillon", "live,celeb", "Pan-India", "", "img/act-apdhillon.jpg", "Celebrity artist", 1], ["Aastha Gill", "live,celeb", "Pan-India", "", "img/act-aastha.jpg", "Celebrity artist", 1], ["Aditya Narayan", "live,celeb", "Pan-India", "", "img/act-aditya.jpg", "Celebrity artist", 1], ["Amit Trivedi", "live,celeb", "Pan-India", "", "img/act-amit.jpg", "Celebrity artist", 1], ["Amrit Maan", "live,celeb", "Pan-India", "", "img/act-amrit.jpg", "Celebrity artist", 1], ["Armaan Malik", "live,celeb", "Pan-India", "", "img/act-armaan.jpg", "Celebrity artist", 1], ["B Praak", "live,celeb", "Pan-India", "", "img/act-bpraak.jpg", "Celebrity artist", 1], ["Baani Sandhu", "live,celeb", "Pan-India", "", "img/act-baani.jpg", "Celebrity artist", 1], ["Badshah", "live,celeb", "Pan-India", "", "img/act-badshah.jpg", "Celebrity artist", 1], ["Daler Mehndi", "live,celeb", "Pan-India", "", "img/act-daler.jpg", "Celebrity artist", 1], ["Darshan Raval", "live,celeb", "Pan-India", "", "img/act-darshan.jpg", "Celebrity artist", 1], ["Garry Sandhu", "live,celeb", "Pan-India", "", "img/act-garry.jpg", "Celebrity artist", 1], ["Gurdeep Mehndi", "live,celeb", "Pan-India", "", "img/act-gurdeep.jpg", "Celebrity artist", 1], ["Jasmine Sandlas", "live,celeb", "Pan-India", "", "img/act-jasmine.jpg", "Celebrity artist", 1], ["Jassi Gill", "live,celeb", "Pan-India", "", "img/act-jassigill.jpg", "Celebrity artist", 1], ["Jonita Gandhi", "live,celeb", "Pan-India", "", "img/act-jonita.jpg", "Celebrity artist", 1], ["Kaur B", "live,celeb", "Pan-India", "", "img/act-kaurb.jpg", "Celebrity artist", 1], ["Meet Bros", "live,celeb", "Pan-India", "", "img/act-meetbros.jpg", "Celebrity artist", 1], ["Miss Pooja", "live,celeb", "Pan-India", "", "img/act-misspooja.jpg", "Celebrity artist", 1], ["Nakash Aziz", "live,celeb", "Pan-India", "", "img/act-nakash.jpg", "Celebrity artist", 1], ["Navraj Hans", "live,celeb", "Pan-India", "", "img/act-navraj.jpg", "Celebrity artist", 1], ["Neha Bhasin", "live,celeb", "Pan-India", "", "img/act-neha.jpg", "Celebrity artist", 1], ["Palak Muchhal", "live,celeb", "Pan-India", "", "img/act-palak.jpg", "Celebrity artist", 1], ["Parmish Verma", "live,celeb", "Pan-India", "", "img/act-parmish.jpg", "Celebrity artist", 1], ["Rahul Vaidya", "live,celeb", "Pan-India", "", "img/act-rahul.jpg", "Celebrity artist", 1], ["Ranjit Bawa", "live,celeb", "Pan-India", "", "img/act-ranjit.jpg", "Celebrity artist", 1], ["Rupali Jagga", "live,celeb", "Pan-India", "", "img/act-rupali.jpg", "Celebrity artist", 1], ["Sara Gurpal", "live,celeb", "Pan-India", "", "img/act-sara.jpg", "Celebrity artist", 1], ["Shaan", "live,celeb", "Pan-India", "", "img/act-shaan.jpg", "Celebrity artist", 1], ["Shreya Ghoshal", "live,celeb", "Pan-India", "", "img/act-shreya.jpg", "Celebrity artist", 1], ["Sonu Nigam", "live,celeb", "Pan-India", "", "img/act-sonu.jpg", "Celebrity artist", 1], ["Sunanda Sharma", "live,celeb", "Pan-India", "", "img/act-sunanda.jpg", "Celebrity artist", 1], ["Sunidhi Chauhan", "live,celeb", "Pan-India", "", "img/act-sunidhi.jpg", "Celebrity artist", 1], ["Yo Yo Honey Singh", "live,celeb", "Pan-India", "", "img/act-honey.jpg", "Celebrity artist", 1], ["Yuvraaj Hans", "live,celeb", "Pan-India", "", "img/act-yuvraaj.jpg", "Celebrity artist", 1], ["DJ Aqeel", "dj,celeb", "Pan-India", "", "img/act-aqeel.jpg", "Celebrity DJ", 1], ["DJ Chetas", "dj,celeb", "Pan-India", "", "img/act-chetas.jpg", "Celebrity DJ", 1], ["DJ Lijo George", "dj,celeb", "Pan-India", "", "img/act-lijo.jpg", "Celebrity DJ", 1], ["DJ Nikhil Chinapa", "dj,celeb", "Pan-India", "", "img/act-nikhil.jpg", "Celebrity DJ", 1], ["DJ Shadow", "dj", "Pan-India", "", "img/act-shadow.jpg", "", 1], ["DJ Yogi", "dj", "Pan-India", "", "img/act-yogi.jpg", "", 1], ["Nucleya", "dj,celeb", "Pan-India", "", "img/act-nucleya.jpg", "Celebrity DJ", 1], ["Progressive Brothers", "dj", "Pan-India", "", "img/act-progressive.jpg", "", 1], ["Gayathri Asokan", "ghazal,celeb", "Pan-India", "", "img/act-gayathri.jpg", "Celebrity artist", 1], ["Kavya Limaye", "ghazal,celeb", "Pan-India", "", "img/act-kavya.jpg", "Celebrity artist", 1], ["Papon", "ghazal,live,celeb", "Pan-India", "", "img/act-papon.jpg", "Celebrity artist", 1], ["Aakash Gupta", "magiccomedy,standup", "Pan-India", "", "img/act-aakash.jpg", "Celebrity stand-up comedian", 1], ["Abhishek Upmanyu", "magiccomedy,standup", "Pan-India", "", "img/act-abhishek.jpg", "Celebrity stand-up comedian", 1], ["Anubhav Singh Bassi", "magiccomedy,standup", "Pan-India", "", "img/act-bassi.jpg", "Celebrity stand-up comedian", 1], ["Gaurav Gupta", "magiccomedy", "Pan-India", "Stand-up comedian", "img/act-gaurav.jpg", "", 1], ["Gaurav Kapoor", "magiccomedy", "Pan-India", "Stand-up comedian", "img/act-gauravk.jpg", "", 1], ["Harsh Gujral", "magiccomedy,standup", "Pan-India", "", "img/act-harsh.jpg", "Celebrity stand-up comedian", 1], ["Rajiv Thakur", "magiccomedy,standup", "Pan-India", "", "img/act-rajiv.jpg", "Celebrity stand-up comedian", 1], ["Dino James", "rap", "Pan-India", "Rapper", "img/act-dino.jpg", "", 1], ["Emiway Bantai", "rap", "Pan-India", "Rapper", "img/act-emiway.jpg", "", 1], ["MC Square", "rap", "Pan-India", "Rapper", "img/act-mcsquare.jpg", "", 1], ["Paradox", "rap", "Pan-India", "Rapper", "img/act-paradox.jpg", "", 1], ["Raja Kumari", "rap", "Pan-India", "Rapper", "img/act-rajakumari.jpg", "", 1], ["L Subramaniam (violin)", "soloinst", "Pan-India", "", "img/act-lsubramaniam.jpg", "", 1], ["Parth Chandiramani (flute)", "soloinst", "Pan-India", "", "img/act-parth.jpg", "", 1], ["Purbayan Chatterjee (sitar)", "soloinst", "Pan-India", "", "img/act-purbayan.jpg", "", 1], ["Raghav Sachar", "soloinst", "Pan-India", "", "img/act-raghav.jpg", "", 1], ["Ronu Majumdar (flute)", "soloinst", "Pan-India", "", "img/act-ronu.jpg", "", 1], ["Salil Bhatt (Satvik Veena)", "soloinst", "Pan-India", "", "img/act-salil.jpg", "", 1], ["Sivamani (percussion)", "soloinst", "Pan-India", "", "img/act-sivamanisolo.jpg", "", 1], ["Stephen Devassy", "soloinst", "Pan-India", "", "img/act-stephen.jpg", "", 1], ["Bismil Ki Mehfil", "sufibolly", "Pan-India", "", "img/act-bismil.jpg", "", 1], ["Divya Kumar", "sufibolly", "Pan-India", "", "img/act-divya.jpg", "", 1], ["Mame Khan", "sufibolly", "Pan-India", "", "img/act-mamekhan.jpg", "", 1], ["Sagar Bhatia", "sufibolly", "Pan-India", "", "img/act-sagar.jpg", "", 1], ["Salman Zaman", "sufibolly", "Pan-India", "", "img/act-salmanzaman.jpg", "", 1], ["Sharib & Toshi (Sabri)", "sufibolly", "Pan-India", "", "img/act-sharibtoshi.jpg", "", 1], ["Lets Nacho Band (Delhi)", "djband", "Pan-India", "", "img/act-nacho.jpg", "", 1], ["Stree Shakti (Anuradha Pal)", "allgirl", "Pan-India", "", "img/act-streeshakti.jpg", "", 1], ["The Womaniaz (Mumbai)", "allgirl", "Pan-India", "", "img/act-womaniaz.jpg", "", 1], ["Amit Siyaram", "anchor", "Pan-India", "", "img/act-amitsiyaram.jpg", "", 1], ["Megha Kedia", "anchor", "Pan-India", "", "img/act-megha.jpg", "", 1], ["Sharon Aamir", "anchor", "Pan-India", "", "img/act-sharon.jpg", "", 1], ["Vishaal Rasquinha", "anchor", "Pan-India", "", "img/act-vishaal.jpg", "", 1], ["Parikrama", "bollyrock", "Pan-India", "", "img/act-parikrama.jpg", "", 1], ["The Yellow Diaries", "bollyrock", "Pan-India", "", "img/act-yellow.jpg", "", 1], ["Zikrr", "bollyrock", "Pan-India", "", "img/act-zikrr.jpg", "", 1], ["Bryden & Parth Choir", "choir", "Pan-India", "", "img/act-bryden.jpg", "", 1], ["El Fe Choir (Chennai)", "choir", "Pan-India", "", "img/act-elfe.jpg", "", 1], ["Nandan Borker Collective", "choir", "Pan-India", "", "img/act-nandan.jpg", "", 1], ["Quavers Chamber Choir", "choir", "Pan-India", "", "img/act-quavers.jpg", "", 1], ["The Bollywood Tales (choir experience)", "choir", "Pan-India", "", "img/act-bollytales.jpg", "", 1], ["DJ Anna Breathe", "dj", "Pan-India", "", "img/act-annabreathe.jpg", "", 1], ["DJ Barkha Kaul", "dj", "Pan-India", "", "img/act-barkha.jpg", "", 1], ["DJ Rhea", "dj", "Pan-India", "", "img/act-rhea.jpg", "", 1], ["DJ Rink", "dj", "Pan-India", "", "img/act-rink.jpg", "", 1], ["Apoorv Singh Verma", "djperc", "Pan-India", "", "img/act-apoorv.jpg", "", 1], ["Hiten Panwar", "djperc", "Pan-India", "", "img/act-hiten.jpg", "", 1], ["Mohsick", "djperc", "Pan-India", "", "img/act-mohsick.jpg", "", 1], ["Taishul", "djperc", "Pan-India", "", "img/act-veronika.jpg", "", 1], ["Blu Birds", "djband", "Pan-India", "", "img/act-blubirds.jpg", "", 1], ["Infinity", "djband", "Pan-India", "", "img/act-infinity.jpg", "", 1], ["Mystic Pop", "djband", "Pan-India", "", "img/act-mysticpop.jpg", "", 1], ["Naachshala", "djband", "Pan-India", "", "img/act-naachshala.jpg", "", 1], ["Power Puff Girls", "djband", "Pan-India", "", "img/act-powerpuff.jpg", "", 1], ["Starboy Shubz", "djband", "Pan-India", "", "img/act-starboy.jpg", "", 1], ["Tamasha", "djband", "Pan-India", "", "img/act-tamasha.jpg", "", 1], ["Urban Turban", "djband", "Pan-India", "", "img/act-urbanturban.jpg", "", 1], ["Aishwarya Majumdar", "devotional", "Pan-India", "", "img/act-aishwarya.jpg", "", 1], ["Hansraj Raghuwanshi", "devotional", "Pan-India", "", "img/act-hansraj.jpg", "", 1], ["Hemant Brijwasi", "devotional", "Pan-India", "", "img/act-hemant.jpg", "", 1], ["Lakhbir Singh Lakkha", "devotional", "Pan-India", "", "img/act-lakhbir.jpg", "", 1], ["Master Saleem", "devotional,celeb", "Pan-India", "", "img/act-saleem.jpg", "Celebrity artist", 1], ["Kumar Satyamm", "ghazal", "Pan-India", "", "img/act-kumar.jpg", "", 1], ["Rathijit Bhattacharjee", "ghazal", "Pan-India", "", "img/act-rathijit.jpg", "", 1], ["Bombay Chamber Orchestra", "instrband", "Pan-India", "", "img/act-bombaychamber.jpg", "", 1], ["Made In India", "instrband", "Pan-India", "", "img/act-madeinindia.jpg", "", 1], ["Music Mansion", "instrband", "Pan-India", "", "img/act-musicmansion.jpg", "", 1], ["The Bombay Tux", "live,western", "Pan-India", "Live fusion band", "img/act-bombaytux.jpg", "", 1], ["Delhi Indie Project", "western", "Pan-India", "Indie", "img/act-delhiindie.jpg", "", 1], ["Kanishk Sethi", "solosing", "Pan-India", "Indie", "img/act-kanishk.jpg", "", 1], ["Kayan", "solosing", "Pan-India", "Indie", "img/act-kayan.jpg", "", 1], ["Suraj Mani", "solosing", "Pan-India", "Indie", "img/act-suraj.jpg", "", 1], ["Chugge Khan and Rajasthan Josh", "rajfusion", "Pan-India", "", "img/act-chugge.jpg", "", 1], ["Deene Khan", "rajfusion", "Pan-India", "", "img/act-deene.jpg", "", 1], ["Kamli Saga", "djband", "Pan-India", "", "img/act-kamli.jpg", "", 1], ["Rana Dholi (folk music and dance)", "rajfusion", "Pan-India", "", "img/act-ranadholi.jpg", "", 1], ["Sadho", "rajfusion", "Pan-India", "", "img/act-sadho.jpg", "", 1], ["Sawai Bhatt", "rajfusion,reality", "Pan-India", "", "img/act-sawai.jpg", "Indian Idol", 1], ["Ankur Chakravorty (violin, Mumbai)", "soloinst", "Pan-India", "", "img/act-ankurc.jpg", "", 1], ["Amaal Mallik", "solosing", "Pan-India", "", "img/act-amaal.jpg", "", 1], ["Anuv Jain", "solosing", "Pan-India", "", "img/act-anuv.jpg", "", 1], ["Lisa Mishra", "solosing", "Pan-India", "", "img/act-lisa.jpg", "", 1], ["Madari", "western", "Pan-India", "", "img/act-madari.jpg", "", 1], ["Osho Jain", "solosing", "Pan-India", "", "img/act-osho.jpg", "", 1], ["Prateek Kuhad", "solosing", "Pan-India", "", "img/act-prateek.jpg", "", 1], ["Ritviz", "solosing", "Pan-India", "", "img/act-ritviz.jpg", "", 1], ["Sharib Toshi", "solosing", "Pan-India", "", "img/act-sharibsolo.jpg", "", 1], ["Shirley Setia", "solosing", "Pan-India", "", "img/act-shirley.jpg", "", 1], ["Zaeden", "solosing", "Pan-India", "", "img/act-zaeden.jpg", "", 1], ["Daksh Band", "sufibolly", "Pan-India", "", "img/act-daksh.jpg", "", 1], ["Damsaaz", "sufibolly", "Pan-India", "", "img/act-damsaaz.jpg", "", 1], ["Jazba", "sufibolly", "Pan-India", "", "img/act-jazba.jpg", "", 1], ["Kavita Seth", "sufibolly", "Pan-India", "", "img/act-kavitaseth.jpg", "", 1], ["Kunaal Wason & Qawaals", "sufibolly", "Pan-India", "", "img/act-kunaal.jpg", "", 1], ["Mizaz", "sufibolly", "Pan-India", "", "img/act-mizaz.jpg", "", 1], ["Qaafila", "sufibolly", "Pan-India", "", "img/act-qaafila.jpg", "", 1], ["Rahul Rana (Saaz E Mehfil)", "sufibolly", "Pan-India", "", "img/act-rahulrana.jpg", "", 1], ["Shaheen Salmani", "sufibolly", "Pan-India", "", "img/act-shaheen.jpg", "", 1], ["The Frequency Project", "sufibolly", "Pan-India", "", "img/act-frequency.jpg", "", 1], ["Ulfat Band", "sufibolly", "Pan-India", "", "img/act-ulfat.jpg", "", 1], ["Qutbi Brothers (Arshad and Adnan Qutbi)", "sufiq", "Pan-India", "", "img/act-qutbi.jpg", "", 1], ["Haji Mohammad Idris", "sufiq", "Pan-India", "", "img/act-idris.jpg", "", 1], ["Hans Raj Hans", "sufiq", "Pan-India", "", "img/act-hansrajhans.jpg", "", 1], ["Nawaz Sabri", "sufiq", "Pan-India", "", "img/act-nawaz.jpg", "", 1], ["Nizami Bandhu", "sufiq", "Pan-India", "", "img/act-nizami.jpg", "", 1], ["Nizami Brothers", "sufiq", "Pan-India", "", "img/act-nizamibrothers.jpg", "", 1], ["Shadab Faridi", "sufiq", "Pan-India", "", "img/act-shadab.jpg", "", 1], ["Ustad Chand Nizami", "sufiq", "Pan-India", "", "img/act-chand.jpg", "", 1], ["Wadali Brothers", "sufiq", "Pan-India", "", "img/act-wadali.jpg", "", 1], ["Aflatunes Band", "western", "Pan-India", "", "img/act-aflatunes.jpg", "", 1], ["Best Kept Secret", "western", "Pan-India", "", "img/act-bks.jpg", "", 1], ["Lylaa x Soul", "western", "Pan-India", "", "img/act-lylaa.jpg", "", 1], ["Motherjane", "western", "Pan-India", "", "img/act-motherjane.jpg", "", 1], ["Abhinav Nagpal", "bollyrock", "Pan-India", "", "img/act-nagpal.jpg", "", 1], ["Abhinav Narula", "bollyrock", "Pan-India", "", "img/act-narula.jpg", "", 1], ["Himonshu Parikh", "bollyrock", "Pan-India", "", "img/act-himonshu.jpg", "", 1], ["Rajan Batra", "bollyrock", "Pan-India", "", "img/act-rajan.jpg", "", 1], ["Sameer Walizada", "bollyrock", "Pan-India", "", "img/act-sameer.jpg", "", 1], ["Sid K", "bollyrock", "Pan-India", "", "img/act-sidk.jpg", "", 1], ["Stuart DaCosta", "bollyrock", "Pan-India", "", "img/act-stuart.jpg", "", 1], ["Ash King", "live,celeb", "Pan-India", "", "img/act-ashking.jpg", "Celebrity artist", 1], ["Babbu Maan", "live,celeb", "Pan-India", "", "img/act-babbu.jpg", "Celebrity artist", 1], ["Gippy Grewal", "live,celeb", "Pan-India", "", "img/act-gippy.jpg", "Celebrity artist", 1], ["Manj Musik", "live,celeb", "Pan-India", "", "img/act-manj.jpg", "Celebrity artist", 1], ["Pav Dharia", "live,celeb", "Pan-India", "", "img/act-pav.jpg", "Celebrity artist", 1], ["Prem Dhillon", "live,celeb", "Pan-India", "", "img/act-prem.jpg", "Celebrity artist", 1], ["Rohanpreet Singh", "live,celeb", "Pan-India", "", "img/act-rohanpreet.jpg", "Celebrity artist", 1], ["Salman Ali", "live,celeb", "Pan-India", "", "img/act-salman.jpg", "Celebrity artist", 1], ["Vibhor Parashar", "live,celeb", "Pan-India", "", "img/act-vibhor.jpg", "Celebrity artist", 1], ["Jassi Gill & Babbal Rai", "duotrio,celeb", "Pan-India", "", "img/act-jassibabbal.jpg", "Celebrity artist", 1], ["SIRAHA Trio (Harmeet Manseta, U Rajesh, Sivamani)", "duotrio,celeb", "Pan-India", "", "img/act-siraha.jpg", "Celebrity artist", 1], ["The SIVAMANI Trio", "duotrio,celeb", "Pan-India", "", "img/act-sivamani.jpg", "Celebrity artist", 1], ["Twin Strings", "duotrio", "Pan-India", "", "img/act-twinstrings.jpg", "", 1], ["Nirakar", "jazz", "Pan-India", "Indo jazz band", "img/act-nirakar.jpg", "", 1], ["SIRAHA Trio", "jazz", "Pan-India", "", "", "", 1], ["Mangesh Desai", "magiccomedy", "Pan-India", "Magic and illusion", "img/act-mangesh.jpg", "", 1], ["Rakesh Syam", "magiccomedy", "Pan-India", "Magic and mentalism", "img/act-rakesh.jpg", "", 1], ["Suhani Shah (Ruhani Shah)", "magiccomedy,celeb", "Pan-India", "Mentalist", "img/act-suhani.jpg", "Celebrity mentalist", 1], ["Ankit Batra", "solosing", "Pan-India", "Musical pheras", "img/act-ankit.jpg", "", 1, ["pheras"]], ["Himanshu Sharma", "solosing", "Pan-India", "Musical pheras", "img/act-himanshu.jpg", "", 1, ["pheras"]], ["Mehul Pandit", "solosing", "Pan-India", "Musical pheras", "img/act-mehul.jpg", "", 1, ["pheras"]], ["Mohit Chopra", "solosing", "Pan-India", "Musical pheras", "img/act-mohit.jpg", "", 1, ["pheras"]], ["Sheena Chawla", "solosing", "Pan-India", "Musical pheras", "img/act-sheena.jpg", "", 1, ["pheras"]], ["Siddharth Mohan", "solosing", "Pan-India", "Musical pheras", "img/act-siddharth.jpg", "", 1, ["pheras"]], ["Anupam Singh (Wow Music)", "solosing", "Pan-India", "", "img/act-anupam.jpg", "", 1], ["Urvashi Radadiya", "devotional,solosing", "Pan-India", "Gujarati folk singer", "img/act-urvashi.jpg", "", 1]];

// Profile pop-up content. One entry per act: "Act name exactly as on the site":
//   either [paragraph, ...]  or  {about: [paragraph, ...], facts: [[label, value], ...]}
// Facts show as small boxes under the description. Never put phone numbers, emails or fees here.
window.AOS_BIOS = {
  "The Bombay Tux": {
    about: [
      "The Bombay Tux is a Mumbai-based multi-genre fusion band of four exceptionally talented musicians from diverse musical backgrounds. The band has made a strong mark in the entertainment industry with their peppy covers and groovy original compositions, all performed with their signature style and panache.",
      "The band features Dani (producer and keyboardist), Rahul (guitarist and producer), Galvin (guitarist and bassist) and Kaushal (producer and singer-songwriter). Together, they create a vibrant musical experience that captivates audiences.",
      "Known for their stylish stage presence and signature tuxedo look, The Bombay Tux delivers high-energy performances across genres including Bollywood, English pop and rock, blues and more. Their versatile repertoire makes them a perfect choice for sangeet ceremonies, wedding receptions, corporate events, college fests and premium live shows.",
      "The Bombay Tux is available for booking across India. Use Book this act to check availability and event requirements."
    ],
    facts: [
      ["Performance length", "30 to 120 minutes"],
      ["Team size", "4 core members, more added if needed"],
      ["Languages", "English, Hindi"],
      ["Based in", "Mumbai"],
      ["Open to travel", "Worldwide"]
    ]
  },
  "Sonu Nigam": {
    about: [
      "Sonu Nigam is one of India's best-known playback singers, also working as a music director, actor and dubbing artist. He began singing on stage with his father, the singer Agam Kumar Nigam, as a child, and trained in Hindustani classical music under Ustad Ghulam Mustafa Khan before moving to Mumbai to build his career.",
      "His breakthrough came with \"Sandese Aate Hain\" from Border (1997). He has since recorded thousands of songs across many Indian languages, released pop albums and received the Padma Shri in 2022."
    ],
    facts: [
      ["Known for", "Sandese Aate Hain, Abhi Mujh Mein Kahin"],
      ["Languages", "Hindi, Kannada, Bengali and many more"]
    ]
  },
  "Shreya Ghoshal": {
    about: [
      "Shreya Ghoshal is one of India's most celebrated playback singers. Born in Berhampore, West Bengal, she wanted to be a singer from childhood and made her Bollywood debut with Devdas (2002), a performance that won her both a National Film Award and a Filmfare Award for Best Female Playback Singer.",
      "She has since recorded songs in around twenty languages, including \"Barso Re\", \"Deewani Mastani\", \"Ghoomar\" and \"Samjhawan\", won multiple National Film Awards, judged television music shows and performs in concerts around the world."
    ],
    facts: [
      ["Known for", "Barso Re, Deewani Mastani, Ghoomar"],
      ["Languages", "Hindi, Bengali, Tamil, Telugu and more"]
    ]
  },
  "Sunidhi Chauhan": {
    about: [
      "Sunidhi Chauhan is a playback singer from New Delhi who began singing as a child and became a household name after the Mast soundtrack in 1999. She has gone on to sing for hundreds of films and is known for her powerful, versatile voice.",
      "Her best-known songs include \"Dhoom Machale\", \"Beedi\", \"Sheila Ki Jawani\" and \"Kamli\". She has won Filmfare Awards and other honours and is a regular on live stages."
    ],
    facts: [
      ["Known for", "Dhoom Machale, Beedi, Sheila Ki Jawani"],
      ["Languages", "Hindi and several other Indian languages"]
    ]
  },
  "Shaan": {
    about: [
      "Shaan (Shantanu Mukherjee) is a playback singer, composer and television host from a musical family: his grandfather was a lyricist and his father a music director. He began his playback career in 1999 with Pyaar Mein Kabhi Kabhi.",
      "He is known for songs such as \"Chand Sifarish\" from Fanaa, \"Jab Se Tere Naina\" from Saawariya and \"Behti Hawa Sa Tha Woh\" from 3 Idiots. He has released independent albums, including Naujawan, and has been a coach on The Voice India."
    ],
    facts: [
      ["Known for", "Chand Sifarish, Jab Se Tere Naina, Behti Hawa Sa Tha Woh"],
      ["Languages", "Hindi, Bengali, Kannada, Telugu"]
    ]
  },
  "Armaan Malik": {
    about: [
      "Armaan Malik is a Mumbai-born singer, songwriter and record producer, and the younger brother of composer Amaal Malik. He has sung for many Hindi films, including the Jai Ho title track and M.S. Dhoni: The Untold Story, and has also worked in Telugu, Kannada and other languages.",
      "He received the Filmfare R. D. Burman Award for New Music Talent in 2016, sang Hindi songs for The Lion King and voiced Aladdin in the Hindi version of the film. He also releases independent and English-language singles."
    ],
    facts: [
      ["Known for", "Jai Ho (title track), M.S. Dhoni: The Untold Story"],
      ["Languages", "Hindi, English, Telugu, Kannada"]
    ]
  },
  "Aditya Narayan": {
    about: [
      "Aditya Narayan is a singer, television host and actor, and the son of playback singer Udit Narayan. He began performing as a child and later became one of Indian television's best-known music-show hosts, fronting Indian Idol, Sa Re Ga Ma Pa and other singing shows."
    ],
    facts: [
      ["Known for", "Hosting Indian Idol and music reality shows"]
    ]
  },
  "Amit Trivedi": {
    about: [
      "Amit Trivedi is a music composer, singer and lyricist from Mumbai who began his career writing jingles. He made his film debut with Aamir (2008) and broke through with the Dev.D soundtrack, which won him a National Film Award for Best Music Direction.",
      "His film work includes Queen, Dear Zindagi and Andhadhun, and he runs his own independent label, AT Azaad."
    ],
    facts: [
      ["Known for", "Dev.D, Queen, Dear Zindagi, Andhadhun"],
      ["Languages", "Hindi"]
    ]
  },
  "Darshan Raval": {
    about: [
      "Darshan Raval is a singer, composer and songwriter from Ahmedabad, Gujarat. He first gained national attention on the talent show India's Raw Star in 2014 and has since become a popular film playback singer and pop artist.",
      "His film songs include \"Ek Ladki Ko Dekha Toh Aisa Laga\", \"Chogada\" from Loveyatri, \"Kabhi Tumhe\" from Shershaah and \"Mehrama\" from Love Aaj Kal, and his independent singles include \"Tera Zikr\" and \"Asal Mein\"."
    ],
    facts: [
      ["Known for", "Chogada, Kabhi Tumhe, Mehrama, Tera Zikr"],
      ["Languages", "Hindi, Gujarati"]
    ]
  },
  "Jonita Gandhi": {
    about: [
      "Jonita Gandhi is a playback singer born in New Delhi and raised in Canada, trained in both Western and Hindustani classical singing. She began with YouTube covers before making her film debut with the title song of Chennai Express (2013).",
      "She is known for \"The Breakup Song\" from Ae Dil Hai Mushkil and the Tamil hit \"Arabic Kuthu\" from Beast, for which she won the SIIMA Award for Best Playback Singer, Female (Tamil), and has worked with A. R. Rahman."
    ],
    facts: [
      ["Known for", "Chennai Express title track, The Breakup Song, Arabic Kuthu"],
      ["Languages", "Hindi, Tamil"]
    ]
  },
  "Palak Muchhal": {
    about: [
      "Palak Muchhal is a playback singer and lyricist from Indore, widely known for her film songs and for her charity work. Her \"Save Little Hearts\" shows have raised funds for children needing heart surgery.",
      "Her songs include \"Kaun Tujhe\" from M.S. Dhoni: The Untold Story, which won her a Star Screen Award in 2017, tracks from Aashiqui 2 and \"Naiyo Lagda\" from Kisi Ka Bhai Kisi Ki Jaan."
    ],
    facts: [
      ["Known for", "Kaun Tujhe, Aashiqui 2 songs, Naiyo Lagda"],
      ["Languages", "Hindi, Kannada"]
    ]
  },
  "Rahul Vaidya": {
    about: [
      "Rahul Vaidya is a singer and composer from Nagpur who came to national attention as second runner-up on the first season of Indian Idol. His debut album, Tera Intezar, followed in 2005 with music by Sajid-Wajid.",
      "He has sung for Hindi films and appeared on reality television, finishing as first runner-up on Bigg Boss 14 and reaching the finals of Khatron Ke Khiladi 11."
    ],
    facts: [
      ["Known for", "Indian Idol season 1, Bigg Boss 14"],
      ["Languages", "Hindi"]
    ]
  },
  "Nakash Aziz": {
    about: [
      "Nakash Aziz is a singer and composer from Mangaluru who started out making jingles and devotional albums, and worked as an assistant to A. R. Rahman on films including Highway and Raanjhanaa before establishing himself as a playback singer.",
      "He is known for high-energy numbers such as \"Jabra Fan\" from Fan, \"Dhating Nach\" and \"Sari Ke Fall Sa\", and sings in Hindi, Telugu, Tamil, Kannada, Bengali and Marathi."
    ],
    facts: [
      ["Known for", "Jabra Fan, Dhating Nach, Sari Ke Fall Sa"],
      ["Languages", "Hindi, Telugu, Tamil, Kannada, Bengali, Marathi"]
    ]
  },
  "Neha Bhasin": {
    about: [
      "Neha Bhasin is a singer, songwriter and performer who won Coke [V] Popstars in 2002 and was a member of the pop group Viva! before building a career in film music.",
      "She is best known for \"Jag Ghoomeya\" from Sultan and \"Dhunki\" from Mere Brother Ki Dulhan, performs Punjabi folk-inspired numbers and releases independent songs. She has also appeared on Bigg Boss."
    ],
    facts: [
      ["Known for", "Jag Ghoomeya, Dhunki"],
      ["Languages", "Hindi, Punjabi, Tamil"]
    ]
  },
  "Meet Bros": {
    about: [
      "Meet Bros is a composer-singer duo of brothers Manmeet and Harmeet Singh from Gwalior, formerly known as Meet Bros Anjjan. They began with independent hits before breaking through in films.",
      "Their best-known songs include \"Baby Doll\" from Ragini MMS 2 and \"Chittiyaan Kalaiyaan\" from Roy, and they continue to release independent and regional music."
    ],
    facts: [
      ["Known for", "Baby Doll, Chittiyaan Kalaiyaan"],
      ["Languages", "Hindi"]
    ]
  },
  "Ash King": {
    about: [
      "Ash King (Ashutosh Ganguly) is a London-raised singer, songwriter and composer of Bengali and Gujarati origin. He made his Hindi film debut with Delhi-6 and has since become a familiar playback voice.",
      "His songs include \"I Love You\" from Bodyguard, \"Aunty Ji\" from Ek Main Aur Ekk Tu, \"Baarish\" from Half Girlfriend and \"Meherban Hua\" from Bang Bang!."
    ],
    facts: [
      ["Known for", "I Love You, Baarish, Meherban Hua"],
      ["Languages", "Hindi, English"]
    ]
  },
  "Salman Ali": {
    about: [
      "Salman Ali is a singer from Punhana in Haryana's Mewat region, from a family of singers. He was first runner-up on Sa Re Ga Ma Pa Lil Champs in 2011 and won the tenth season of Indian Idol in December 2018.",
      "He has since sung for films, released songs with Salim-Sulaiman and appeared as a captain on Superstar Singer."
    ],
    facts: [
      ["Known for", "Winner, Indian Idol 10"],
      ["Languages", "Hindi"]
    ]
  },
  "Rohanpreet Singh": {
    about: [
      "Rohanpreet Singh is a Punjabi singer from Patiala. He was runner-up on Rising Star season 2 and has released Punjabi and Hindi songs and music videos, including \"Bang Gang\", \"Hello Hi\" and \"Sohni Lagdi\"."
    ],
    facts: [
      ["Known for", "Rising Star runner-up, Bang Gang, Sohni Lagdi"],
      ["Languages", "Punjabi, Hindi"]
    ]
  },
  "AP Dhillon": {
    about: [
      "AP Dhillon (Amritpal Singh Dhillon) is a Punjabi singer, rapper and producer who grew up in Punjab and moved to Canada as a student. He broke through in 2020 with \"Brown Munde\", released independently with his label Run-Up Records, and the song became a global anthem for the Punjabi diaspora.",
      "His other well-known tracks include \"Excuses\", \"Insane\", \"With You\" and \"Majhail\". In 2023 he became the first Punjabi Canadian to perform at the Juno Awards."
    ],
    facts: [
      ["Known for", "Brown Munde, Excuses, Insane, With You"],
      ["Languages", "Punjabi"]
    ]
  },
  "Badshah": {
    about: [
      "Badshah (Aditya Prateek Singh Sisodia) is a rapper, singer, songwriter and producer from Delhi. He began writing rap while studying at Punjab Engineering College and is one of the best-known voices of Indian hip hop and pop, working in Hindi, Punjabi and Haryanvi.",
      "His songs include \"DJ Waley Babu\", \"Kar Gayi Chull\" from Kapoor & Sons, \"Proper Patola\" from Namaste England, \"Paagal\" and \"Garmi\" from Street Dancer 3D. He is also a familiar face on television as a judge on talent shows."
    ],
    facts: [
      ["Known for", "DJ Waley Babu, Kar Gayi Chull, Paagal, Garmi"],
      ["Languages", "Hindi, Punjabi, Haryanvi"]
    ]
  },
  "Yo Yo Honey Singh": {
    about: [
      "Yo Yo Honey Singh (Hirdesh Singh) is a rapper, music producer, singer and actor from Punjab, credited with bringing hip hop and Punjabi rap into the mainstream. He studied in New Delhi and built his career as a bhangra and pop producer before moving into Bollywood.",
      "His best-known songs include \"Angreji Beat\", \"Lungi Dance\", \"Dope Shope\", \"Desi Kalakaar\", \"Blue Eyes\" and \"Dheere Dheere\"."
    ],
    facts: [
      ["Known for", "Angreji Beat, Lungi Dance, Blue Eyes, Desi Kalakaar"],
      ["Languages", "Punjabi, Hindi"]
    ]
  },
  "Daler Mehndi": {
    about: [
      "Daler Mehndi is a Punjabi singer, songwriter and record producer who helped take bhangra pop to audiences around the world. His debut album Bolo Ta Ra Ra became a landmark of independent Indian pop, and \"Tunak Tunak Tun\" remains one of the most recognisable Punjabi songs.",
      "His other well-known songs include \"Sajan Mere Satrangiya\", \"Dard Di Rab Rab\" and \"Ho Jayegi Balle Balle\", and he has sung for films including Rang De Basanti and Dangal."
    ],
    facts: [
      ["Known for", "Tunak Tunak Tun, Bolo Ta Ra Ra, Ho Jayegi Balle Balle"],
      ["Languages", "Punjabi, Hindi"]
    ]
  },
  "B Praak": {
    about: [
      "B Praak (Pratik Bachan) is a singer, music director and composer from Chandigarh working in Punjabi and Hindi music. He began as a producer, often working with lyricist Jaani, and became known as a singer with songs such as \"Mann Bharrya\", \"Qismat\" and \"Filhall\".",
      "He won a National Film Award for Best Male Playback Singer for \"Teri Mitti\" from Kesari, and later moved into music direction for Hindi films."
    ],
    facts: [
      ["Known for", "Teri Mitti, Mann Bharrya, Filhall, Qismat"],
      ["Languages", "Punjabi, Hindi"]
    ]
  },
  "Jasmine Sandlas": {
    about: [
      "Jasmine Sandlas is a Punjabi singer and songwriter, born in Jalandhar and raised in California. She released her first album, The Diamond, in 2008, and her 2012 album Gulabi, made with rapper Bohemia, brought her wider recognition in Punjabi music.",
      "Her Bollywood break came with \"Yaar Na Miley\" from Kick. She is also known for \"Illegal Weapon\" with Garry Sandhu, \"Bamb Jatt\" with Amrit Maan and the experimental album TGPE."
    ],
    facts: [
      ["Known for", "Yaar Na Miley, Illegal Weapon, Bamb Jatt"],
      ["Languages", "Punjabi, Hindi"]
    ]
  },
  "Jassi Gill": {
    about: [
      "Jassie Gill is a Punjabi and Hindi singer and actor from Ludhiana. He released his debut album Batchmate in 2011, and is known for songs such as \"Lancer\", \"Nikle Currant\" and \"Bapu Zimidar\".",
      "He entered Punjabi cinema with Mr & Mrs 420 (2014) and Hindi cinema with Happy Phirr Bhag Jayegi (2018), and has since appeared in films including Panga and Kisi Ka Bhai Kisi Ki Jaan."
    ],
    facts: [
      ["Known for", "Nikle Currant, Lancer, Bapu Zimidar"],
      ["Languages", "Punjabi, Hindi"]
    ]
  },
  "Gippy Grewal": {
    about: [
      "Gippy Grewal is a Punjabi singer, actor and filmmaker from Ludhiana. He began with the album Chakkh Lai, and his collaboration with Yo Yo Honey Singh, \"Angreji Beat\", became a hit that also featured in the Bollywood film Cocktail.",
      "He is a major name in Punjabi cinema, with films such as Carry On Jatta, and has also acted in Hindi films. He runs the production company Humble Motion Pictures and directed Ardaas."
    ],
    facts: [
      ["Known for", "Angreji Beat, Phulkari, Carry On Jatta"],
      ["Languages", "Punjabi, Hindi"]
    ]
  },
  "Babbu Maan": {
    about: [
      "Babbu Maan (Tejinder Singh Maan) is a Punjabi singer-songwriter, music director, actor and film producer, known for writing his own lyrics. He made his debut in 1999 with Tu Meri Miss India and has since become one of the most popular names in Punjabi music.",
      "His albums include Saaun Di Jhadi, Ohi Chann Ohi Rataan and Pyaas, one of the best-selling Punjabi albums of its time, and he has also acted in and composed music for films such as Hawayein and Rabb Ne Banaiyan Jodiean."
    ],
    facts: [
      ["Known for", "Pyaas, Saaun Di Jhadi, Ohi Chann Ohi Rataan"],
      ["Languages", "Punjabi"]
    ]
  },
  "Garry Sandhu": {
    about: [
      "Garry Sandhu is a Punjabi singer, songwriter, rapper and actor from Jalandhar, who began his singing career in 2010 and built his audience in the United Kingdom. He won Best Newcomer and Best Male Act at the Brit Asia TV Music Awards in 2011.",
      "His hits include \"Illegal Weapon\" with Jasmine Sandlas, \"Yeah Baby\" (also used in the film De De Pyaar De as \"Hauli Hauli\") and \"Banda Ban Ja\". He runs his own label, Fresh Media Records."
    ],
    facts: [
      ["Known for", "Illegal Weapon, Yeah Baby, Banda Ban Ja"],
      ["Languages", "Punjabi, Hindi"]
    ]
  },
  "Amrit Maan": {
    about: [
      "Amrit Maan is a Punjabi singer, songwriter and actor from Goniana Mandi, Punjab. He began as a songwriter, writing \"Jatt Fire Karda\" for Diljit Dosanjh, and released his own debut single, \"Desi Da Drum\", in 2015.",
      "He is known for songs including \"Bambiha Bole\", \"Kaali Camaro\", \"Bamb Jatt\" and \"Trending Nakhra\", and has acted in Punjabi films such as Channa Mereya."
    ],
    facts: [
      ["Known for", "Bambiha Bole, Kaali Camaro, Bamb Jatt"],
      ["Languages", "Punjabi"]
    ]
  },
  "Ranjit Bawa": {
    about: [
      "Ranjit Bawa is a Punjabi singer and actor from Gurdaspur. He became known through \"Jatt Di Akal\" from his debut album Mitti Da Bawa, which won Best World Album at the Brit Asia TV Music Awards.",
      "His other songs include \"Yaari Chandigarh Waliye\" and \"Impress\", and he has acted in Punjabi films including Toofan Singh and High End Yaariyaan."
    ],
    facts: [
      ["Known for", "Jatt Di Akal, Yaari Chandigarh Waliye, Impress"],
      ["Languages", "Punjabi"]
    ]
  },
  "Parmish Verma": {
    about: [
      "Parmish Verma is a Punjabi singer, rapper, actor and director from Patiala. He began as a music video director, then moved into acting with Rocky Mental (2017) and released his first singles the same year, including \"Le Chakk Main Aa Gaya\" and \"Gaal Ni Kadni\".",
      "He has acted in films such as Singham and Dil Diyan Gallan, which he also wrote and directed."
    ],
    facts: [
      ["Known for", "Le Chakk Main Aa Gaya, Gaal Ni Kadni, Rocky Mental"],
      ["Languages", "Punjabi"]
    ]
  },
  "Sunanda Sharma": {
    about: [
      "Sunanda Sharma is a Punjabi pop singer and actress who first gained attention by posting cover versions on YouTube. Her debut single was \"Billi Akh\", and she has since had hits including \"Patake\", \"Morni\", \"Sandal\" and \"Jaani Tera Naa\".",
      "She made her acting debut in the Punjabi film Sajjan Singh Rangroot (2018) and has sung with B Praak and Tanishk Bagchi."
    ],
    facts: [
      ["Known for", "Jaani Tera Naa, Patake, Morni, Sandal"],
      ["Languages", "Punjabi"]
    ]
  },
  "Kaur B": {
    about: [
      "Kaur B (Baljinder Kaur) is a Punjabi pop singer who made her debut with \"Just Desi\" in 2013 and became widely known for songs such as \"Paranda\", \"Kaniyan\", \"Mittran De Boot\" and \"Velly Jatt\".",
      "She has collaborated with artists including Ranjit Bawa and Dilpreet Dhillon, and also releases devotional songs."
    ],
    facts: [
      ["Known for", "Paranda, Kaniyan, Mittran De Boot"],
      ["Languages", "Punjabi, Hindi"]
    ]
  },
  "Miss Pooja": {
    about: [
      "Miss Pooja (Gurinder Kaur Kainth) is a Punjabi singer and actress known for bhangra, pop and folk, and often called the \"Queen of Duets\" for her many duets with male Punjabi singers. She began her professional career in 2006 with the duet \"Jaan Ton Piyari\".",
      "Her songs include \"Wrong Number\", \"Prince N Pooja\" and \"Sohnea\", and she crossed over to Bollywood with \"Second Hand Jawaani\" from Cocktail. She won Best International Act at the UK Asian Music Awards."
    ],
    facts: [
      ["Known for", "Second Hand Jawaani, Wrong Number, Sohnea"],
      ["Languages", "Punjabi, Hindi"]
    ]
  },
  "Aastha Gill": {
    about: [
      "Aastha Gill is a Delhi-born singer and songwriter known for Bollywood and Punjabi pop. She made her film debut with \"Dhup Chik\" in Fugly (2014) and became widely known for \"DJ Waley Babu\" and \"Abhi Toh Party Shuru Hui Hai\", both with Badshah.",
      "Her film songs include \"Proper Patola\" from Namaste England, \"Kamariya\" from Stree and \"Happy Happy\" from Blackmail, alongside independent singles such as \"Buzz\" and \"Hermosa\"."
    ],
    facts: [
      ["Known for", "DJ Waley Babu, Proper Patola, Kamariya, Buzz"],
      ["Languages", "Hindi, Punjabi"]
    ]
  },
  "Baani Sandhu": {
    about: [
      "Baani Sandhu (Rupinder Kaur Sandhu) is a Punjabi singer and actress who studied computer science engineering at Panjab University while pursuing music. Her career began in 2018 with \"Fauji Di Bandook\", and she is best known for \"8 Parche\".",
      "Her other songs include \"Photo\", \"Sarpanchi\", \"Khani Jatti Di\" and \"Punjaban\", and she has collaborated with Dilpreet Dhillon on tracks such as \"Gunday Ik Vaar Fer\". She also acts in Punjabi films."
    ],
    facts: [
      ["Known for", "8 Parche, Fauji Di Bandook, Photo"],
      ["Languages", "Punjabi"]
    ]
  },
  "Gurdeep Mehndi": {
    about: [
      "Gurdeep Mehndi is a Delhi-born Punjabi singer, actor and music director, and the son of Daler Mehndi. He has been building his own path since releasing \"Saheli\" with Bohemia in 2014, and his Gurdeepmix project blends rock, funk, blues and jazz with Sufi and Punjabi folk.",
      "He has acted in films including Bala and Meri Shadi Karao, and has recorded a duet with his father on \"Na Na Na\"."
    ],
    facts: [
      ["Known for", "Saheli, Kangna Tera Ni, Gurdeepmix"],
      ["Languages", "Punjabi, Hindi"]
    ]
  },
  "Navraj Hans": {
    about: [
      "Navraj Hans is a singer and actor from Jalandhar, Punjab, and the son of singer Hans Raj Hans. He has sung playback for many Bollywood and Punjabi films, including \"Jind Meriye\" from Purani Jeans, and has appeared in Punjabi films such as Punjabian Da King and Canada Di Flight.",
      "His other songs include \"Saiyaan\", \"Jhootha Kahin Ka\" and \"Thok De Killi\", and he released the album Hans Brothers with his brother Yuvraaj Hans."
    ],
    facts: [
      ["Known for", "Jind Meriye, Saiyaan, Jhootha Kahin Ka"],
      ["Languages", "Punjabi, Hindi"]
    ]
  },
  "Rupali Jagga": {
    about: [
      "Rupali Jagga is a pop and playback singer who trained in classical music in the Agra Gharana and came up through television talent shows, including Bhajan Samrat and Indian Idol. She made her Bollywood debut with \"Tere Bin Jeena Kya\" from Operation Romeo.",
      "She has worked with Himesh Reshammiya on songs such as \"Piyaa Rangeela\" and \"Aajaa Bheeg Le Piyyaa\" and has released Hindi-Punjabi singles including \"Tere Piche\"."
    ],
    facts: [
      ["Known for", "Tere Bin Jeena Kya, Piyaa Rangeela, Tere Piche"],
      ["Languages", "Hindi, Punjabi"]
    ]
  },
  "Sara Gurpal": {
    about: [
      "Sara Gurpal is a Punjabi singer, actress and model from Haryana. She began as a model in 2013 with Ranjit Bawa's \"Jean\", made her film debut in Manje Bistre (2017) and has appeared in several Punjabi films.",
      "Her songs include \"Slow Motion\", \"Lagdi Att\" and \"Ki Main Kalli Aa\". She was also a contestant on Bigg Boss 14."
    ],
    facts: [
      ["Known for", "Slow Motion, Lagdi Att, Ki Main Kalli Aa"],
      ["Languages", "Punjabi"]
    ]
  },
  "Yuvraaj Hans": {
    about: [
      "Yuvraaj Hans is a Punjabi actor and singer from Jalandhar, the son of singer Hans Raj Hans and the younger brother of Navraj Hans. He made his film debut in Yaar Annmulle (2011), which did well and earned him a debut award.",
      "As a singer he released his debut album Yuvraj in 2015, which included the song \"Paani\", and has since appeared in Punjabi films including Mr & Mrs 420 and Lahoriye."
    ],
    facts: [
      ["Known for", "Yaar Annmulle, Paani"],
      ["Languages", "Punjabi"]
    ]
  },
  "Manj Musik": {
    about: [
      "Manj Musik (Manjeet Singh Ral) is a British Indian composer, singer and music producer. He was one of the composers of the bhangra group RDB, formed with his brothers, before starting his solo career in 2014 and winning Best Urban Single at the Brit Asia TV Music Awards.",
      "He has composed for Hindi films, including \"Whistle Baja\" from Heropanti, produced Guru Randhawa's \"High Rated Gabru\" and founded the label Muzik ONE Records. His own songs include \"Make Some Space\" and \"Gallan\"."
    ],
    facts: [
      ["Known for", "Whistle Baja, High Rated Gabru, Make Some Space"],
      ["Languages", "Punjabi, Hindi"]
    ]
  },
  "Pav Dharia": {
    about: [
      "Pav Dharia is a Punjabi-Australian singer, songwriter and music video director. He first gained attention with his 2012 debut \"Bewafa\" and the 2013 album Red, which won him Best Non-Resident Punjabi Music Director at the PTC Punjabi Music Awards.",
      "He is best known for \"Na Ja\", released in 2017, and has also sung \"Najaa\" from Sooryavanshi and directed music videos for other Punjabi artists."
    ],
    facts: [
      ["Known for", "Na Ja, Najaa (Sooryavanshi), Bewafa"],
      ["Languages", "Punjabi, Hindi"]
    ]
  },
  "Prem Dhillon": {
    about: [
      "Prem Dhillon (Premjeet Singh Dhillon) is a Punjabi singer, songwriter and rapper from Amritsar. His first credit was \"Patt Tenu\" in the film Mr & Mrs 420 Returns, and his debut single, \"Chan Milondi\", followed in 2018.",
      "He is best known for \"Bootcut\", \"Old Skool\" and \"Majha Block\", and his collaboration with Barbie Maan, \"Liv In\", reached the BBC Asian Music Chart."
    ],
    facts: [
      ["Known for", "Bootcut, Old Skool, Majha Block"],
      ["Languages", "Punjabi"]
    ]
  },
  "Master Saleem": {
    about: [
      "Master Saleem is a Punjabi devotional, Sufi and playback singer from Shahkot, near Jalandhar. The son of Sufi singer Ustad Puran Shah Koti, he trained from childhood and gave his first public performance at the age of seven.",
      "He returned to the stage in 2000 with the Sufi song \"Aj Hona Deedar Mahi Da\" and has released devotional albums dedicated to Goddess Durga. His film songs include \"Mast Kalandar\" from Heyy Babyy and \"Aahun\" from Love Aaj Kal."
    ],
    facts: [
      ["Known for", "Mast Kalandar, Aahun, Aj Hona Deedar Mahi Da"],
      ["Languages", "Punjabi, Hindi"]
    ]
  },
  "Papon": {
    about: [
      "Papon (Angaraag Mahanta) is a singer and composer from Assam, the son of folk singers Khagen and Archana Mahanta. He began with Assamese songs in 1998 and formed the folk-fusion band Papon and The East India Company in 2007.",
      "He is known for \"Jiyein Kyun\" from Dum Maaro Dum, \"Kyon\" from Barfi!, \"Moh Moh Ke Dhaage\" from Dum Laga Ke Haisha and \"Bulleya\" from Sultan, and has sung in Hindi, Assamese, Bengali and other languages. He is closely associated with Coke Studio India."
    ],
    facts: [
      ["Known for", "Moh Moh Ke Dhaage, Kyon, Jiyein Kyun, Bulleya"],
      ["Languages", "Hindi, Assamese, Bengali"]
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
    ]
  },
  "Sawai Bhatt": {
    about: [
      "Sawai Bhatt is a Rajasthani folk singer and puppeteer from Rajasthan's Nagaur district who rose to national attention on Indian Idol season 12. His rendition of the folk song \"Kesariya Balma\" is among his most-viewed performances.",
      "After the show he released his single \"Sanseinn\", which drew over four million views in its first 24 hours."
    ],
    facts: [
      ["Known for", "Kesariya Balma, Sanseinn"],
      ["Languages", "Rajasthani, Hindi"]
    ]
  },
  "DJ Aqeel": {
    about: [
      "DJ Aqeel is an Indian DJ, singer and composer who began his career around 2000 and became known for his Bollywood remixes, including the early-2000s \"Shake It Daddy Mix\". His DJ Aqeel Forever albums are among his best-known releases."
    ],
    facts: [
      ["Known for", "Bollywood remixes, Shake It Daddy Mix"]
    ]
  },
  "DJ Chetas": {
    about: [
      "DJ Chetas (Chetas Shah) is a Mumbai-born DJ and music producer known for Bollywood mashups and remixes. A 2012 Salman Khan mashup released through T-Series brought him wide attention, and he became the first Indian DJ to enter DJ Mag's Top 100, reaching number 33 in 2016.",
      "He has worked on film music, been an official DJ for the Kolkata Knight Riders in the IPL and released the album Life Is a Mashup."
    ],
    facts: [
      ["Known for", "Bollywood mashups, DJ Mag Top 100"]
    ]
  },
  "DJ Lijo George": {
    about: [
      "Lijo George is a Mumbai-born DJ, producer and composer who moved from DJing into Hindi film music. He is known for mashups with DJ Notorious and for his work with DJ Chetas, including the track \"Jaana Samjho Na\" from Bhool Bhulaiyaa 3.",
      "His film credits include Golmaal Again, Loveyatri, Simmba and Sooryavanshi."
    ],
    facts: [
      ["Known for", "Bollywood mashups, film music"]
    ]
  },
  "DJ Nikhil Chinapa": {
    about: [
      "Nikhil Chinapa is a DJ, television host and festival curator, often credited with bringing electronic dance music to a wide Indian audience. He began on television after winning the MTV VJ Hunt and went on to host MTV Select.",
      "In 2001 he launched Submerge, an EDM events company, and was later festival director of Sunburn in Goa. His DJ sets are known for being varied and moody."
    ],
    facts: [
      ["Known for", "MTV VJ, Submerge, Sunburn Festival"]
    ]
  },
  "Nucleya": {
    about: [
      "Nucleya (Udyan Sagar) is an electronic producer and DJ who began in the band Bandish Projekt before launching his solo project. He blends Indian folk sounds with bass music and is often described as a leading figure of India's desi bass scene.",
      "His albums include Bass Rani (2015) and Raja Baja (2016), and he released the EP Baaraat with Ritviz in 2021."
    ],
    facts: [
      ["Known for", "Bass Rani, Raja Baja, desi bass"]
    ]
  },
  "Gayathri Asokan": {
    about: [
      "Gayatri Asokan is a playback singer from Kerala who sings in Malayalam and performs ghazal, Hindustani classical music and bhajans. Her playback career began in 2000 and she has sung over 350 songs, winning a Kerala State Film Award for Best Singer.",
      "Her interest in ghazal grew through her friendship with the ghazal singer and tabla player Philip Francis. She has hosted the ghazal show Khayal on Media One TV."
    ],
    facts: [
      ["Known for", "Ghazal, Malayalam film songs"],
      ["Languages", "Malayalam, Hindi, Urdu"]
    ]
  },
  "Kavya Limaye": {
    about: [
      "Kavya Limaye is a young singer who took part in the 13th season of Indian Idol and was second runner-up in the first season of The Voice India Kids. She has also performed ghazals, including the project Nuqoosh, built on the poetry of Ajay Sahaab.",
      "Reviewers have noted the composure of her singing for her age."
    ],
    facts: [
      ["Known for", "Indian Idol 13, The Voice India Kids"]
    ]
  },
  "Aakash Gupta": {
    about: [
      "Aakash Gupta is a stand-up comedian, actor and YouTuber from Delhi. He worked as an auditor before moving into comedy, posted his first stand-up video in 2017 and went on to co-win the second season of Comicstaan, sharing the title with Samay Raina.",
      "His video \"Sarojini Nagar\" topped YouTube's trending list in India, and he has toured across the country and acted in web series including Couple Goals."
    ],
    facts: [
      ["Known for", "Comicstaan season 2 co-winner"]
    ]
  },
  "Abhishek Upmanyu": {
    about: [
      "Abhishek Upmanyu is a stand-up comedian, writer and YouTuber. He trained as a chemical engineer at Panjab University in Chandigarh, then moved to Mumbai to pursue comedy and joined the writing team of On Air with AIB in 2015.",
      "He is known for observational humour and personal storytelling, with specials including Thoda Saaf Bol and Jealous of Sabjiwala."
    ],
    facts: [
      ["Known for", "Thoda Saaf Bol, On Air with AIB"]
    ]
  },
  "Anubhav Singh Bassi": {
    about: [
      "Anubhav Singh Bassi is a stand-up comedian, actor and YouTuber. He studied law and worked as a lawyer, then tried for the civil services before walking into an open mic in 2017 and turning to comedy.",
      "He is known for nostalgic, anecdotal storytelling about school and college life. His first stand-up special, Bas Kar Bassi, streamed on Amazon Prime Video in 2023, and he made his Bollywood debut in Tu Jhoothi Main Makkaar the same year."
    ],
    facts: [
      ["Known for", "Bas Kar Bassi, nostalgic storytelling"]
    ]
  },
  "Harsh Gujral": {
    about: [
      "Harsh Gujral is a stand-up comedian and YouTuber from Kanpur who trained as an engineer before taking up comedy, starting at open mics and then quitting his job to perform full-time.",
      "He is known for observational humour and crowd work, his show Jo Bolta Hai, Wohi Hota Hai, and his collaboration with Anubhav Singh Bassi, Harsh & Bassi Unleashed. He made his television debut on Good Night India in 2022."
    ],
    facts: [
      ["Known for", "Crowd work, Harsh & Bassi Unleashed"]
    ]
  },
  "Rajiv Thakur": {
    about: [
      "Rajiv Thakur is a stand-up comedian, actor, television host and director. He was a runner-up on the Punjabi comedy show Hasde Hasande Ravo in 2006 and became known through Hindi television, including Comedy Circus and The Great Indian Laughter Challenge.",
      "He has also worked in Punjabi films and appeared on The Great Indian Kapil Show."
    ],
    facts: [
      ["Known for", "Comedy Circus, The Great Indian Laughter Challenge"],
      ["Languages", "Hindi, Punjabi"]
    ]
  },
  "SIRAHA Trio (Harmeet Manseta, U Rajesh, Sivamani)": {
    about: [
      "The SIRAHA Trio brings together jazz pianist Harmeet Manseta, mandolin player U. Rajesh and percussionist Sivamani.",
      "Share your date and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Line-up", "Harmeet Manseta (piano), U. Rajesh (mandolin), Sivamani (percussion)"]
    ]
  },
  "SIRAHA Trio": {
    about: [
      "The SIRAHA Trio brings together jazz pianist Harmeet Manseta, mandolin player U. Rajesh and percussionist Sivamani.",
      "Share your date and venue and we will confirm availability and send a quote."
    ],
    facts: [
      ["Line-up", "Harmeet Manseta (piano), U. Rajesh (mandolin), Sivamani (percussion)"]
    ]
  },
  "The SIVAMANI Trio": {
    about: [
      "The Sivamani Trio is built around Anandan Sivamani, one of India's best-known percussionists. Born in Chennai, he began drumming at seven under his father, a drummer in the South Indian film industry, and is best known as A. R. Rahman's lead percussionist.",
      "He was awarded the Padma Shri in 2019 and has performed across the world, including on Bombay Dreams."
    ],
    facts: [
      ["Known for", "Percussion, A. R. Rahman collaborations"],
      ["Based in", "Chennai"]
    ]
  },
  "Sivamani (percussion)": {
    about: [
      "Anandan Sivamani is a percussionist from Chennai who began drumming at seven under his father, a drummer in the South Indian film industry. He plays drums, octoban, darbuka and other instruments and is best known as A. R. Rahman's lead percussionist.",
      "He was awarded the Padma Shri in 2019 and has performed across the world, including on Bombay Dreams."
    ],
    facts: [
      ["Known for", "Percussion, A. R. Rahman collaborations"],
      ["Based in", "Chennai"]
    ]
  },
  "Suhani Shah (Ruhani Shah)": {
    about: [
      "Suhani Shah is a mentalist, magician and YouTuber who has been performing magic since childhood. She worked as an illusionist for many years before moving into mentalism, which blends psychology, suggestion and showmanship."
    ],
    facts: [
      ["Known for", "Mentalism, magic"]
    ]
  },
  "Hussain K": {
    about: [
      "Hussain Kuwajerwala is a television actor, host and model, best known for playing Sumit Wadhwa in Kumkum and Chirag Virani in Kyunki Saas Bhi Kabhi Bahu Thi. He won the dance reality show Nach Baliye 2 in 2006.",
      "As a host he fronted Shabaash India and Kuch Kar Dikhana Hai and was a familiar presenter of Indian Idol."
    ],
    facts: [
      ["Known for", "Kumkum, Indian Idol host, Nach Baliye 2 winner"]
    ]
  },
  "Roshni Chopra": {
    about: [
      "Roshni Chopra is a model, actress and television presenter. She won the reality show Dil Jeetegi Desi Girl and is best known for playing Pia in the serial Kasamh Se.",
      "She has hosted television programmes including Cinemascope and presented cricket coverage on Doordarshan."
    ],
    facts: [
      ["Known for", "Kasamh Se, Dil Jeetegi Desi Girl"]
    ]
  },
  "Shruti Seth": {
    about: [
      "Shruti Seth is an actress, video jockey and television host who began by hosting shows on Channel V. She rose to fame as Jiya Malhotra in the comedy series Shararat and also starred in The Suite Life of Karan & Kabir.",
      "Her film credits include Fanaa and Slumdog Millionaire, and she has hosted shows such as Comedy Circus."
    ],
    facts: [
      ["Known for", "Shararat, Fanaa, Comedy Circus host"]
    ]
  }
};

// Other spellings people search for. Used only by the search box, never shown. "Act name exactly as on the site": "other spelling, other spelling"
window.AOS_ALIASES = {
  "Qutbi Brothers (Arshad and Adnan Qutbi)": "Qutubi Brothers, Kutubi Brothers",
  "Nizami Bandhu": "Sohrab Faridi, Sohrab Faridi Nizami, Ustad Chand Nizami, Chand Nizami",
  "Damsaaz": "Dam Saaz, Dum Saaz"
};
