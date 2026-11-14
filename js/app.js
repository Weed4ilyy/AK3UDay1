const tabs=[...document.querySelectorAll('nav button')];
function go(id){document.querySelectorAll('.panel').forEach(p=>p.classList.toggle('active',p.id===id));tabs.forEach(b=>b.classList.toggle('active',b.dataset.tab===id));window.scrollTo({top:0,behavior:'smooth'})}
tabs.forEach(b=>b.addEventListener('click',()=>go(b.dataset.tab)));
document.getElementById('like').addEventListener('change',riskCalc);document.getElementById('sev').addEventListener('change',riskCalc);
function riskCalc(){let a=+like.value,b=+sev.value,s=a*b;let cat=s<=4?'Rendah':s<=9?'Sedang':s<=16?'Tinggi':'Ekstrim';let note={Rendah:'Perlu aturan, prosedur, atau rambu sesuai matriks materi.',Sedang:'Perlu tindakan pengendalian langsung sesuai kondisi bahaya.',Tinggi:'Perlu perencanaan pengendalian dan prioritas penanganan.',Ekstrim:'Perlu perhatian manajemen atas dan tindakan segera sesuai prosedur.'}[cat];riskResult.className='result '+(cat==='Ekstrim'||cat==='Tinggi'?'high':cat==='Sedang'?'medium':'');riskResult.innerHTML='<b>Skor: '+s+' · '+cat+'</b><br>'+note}
const apdMap={
mata:['Pelindung mata dan wajah','Kacamata pengaman, goggles, face shield, atau helm las sesuai jenis paparan. Face shield tidak dianggap pengganti kacamata/goggles.'],
napas:['Pelindung pernapasan','Respirator yang sesuai dengan jenis kontaminan dan hasil penilaian bahaya. Jenis respirator harus dipilih, diuji kesesuaiannya, dan digunakan sesuai program/prosedur tempat kerja.'],
kepala:['Pelindung kepala','Helm keselamatan yang sesuai dengan risiko benturan atau benda jatuh; periksa kondisi dan kelayakannya.'],
tangan:['Pelindung tangan dan kulit','Sarung tangan yang kompatibel dengan bahan dan pekerjaan. Jenis bahan sarung tangan harus disesuaikan dengan bahaya yang dihadapi.'],
kaki:['Pelindung kaki','Sepatu keselamatan yang sesuai dengan risiko benda jatuh, tusukan, atau kondisi lantai.'],
bising:['Pelindung pendengaran','Ear plug atau ear muff dengan tingkat perlindungan yang sesuai dengan paparan kebisingan.'],
jatuh:['Perlindungan jatuh dari ketinggian','Sistem perlindungan jatuh yang sesuai, seperti full body harness dan sistem pengaman terkait, dengan pemeriksaan serta pelatihan.']
};
hazard.addEventListener('change',()=>{let v=apdMap[hazard.value];apdResult.innerHTML='<b>'+v[0]+'</b><br>'+v[1]});
const aidMap={
danger:'Jangan mendekat sebelum bahaya dikendalikan. Amankan area dari jarak aman dan panggil petugas/tim tanggap darurat.',
unresponsive:'Segera hubungi layanan darurat. Periksa respons dan pernapasan sesuai pelatihan, ikuti instruksi operator. Jangan memberi makan atau minum.',
bleed:'Gunakan sarung tangan/barrier bila tersedia, minta bantuan medis, dan ikuti pelatihan pertolongan perdarahan. Perdarahan berat memerlukan bantuan darurat segera.',
burn:'Jauhkan korban dari sumber panas jika aman, minta bantuan medis sesuai luas/lokasi/tingkat luka. Jangan mengoleskan bahan sembarangan atau memecahkan lepuh.',
fracture:'Jangan meluruskan atau memindahkan bagian yang cedera. Batasi gerakan, pantau kondisi korban, dan minta bantuan medis.',
conscious:'Tanyakan keluhan, tetap dampingi, amati perubahan kondisi, dan cari bantuan medis bila gejala memburuk atau ada keraguan.'
};
victim.addEventListener('change',()=>{aidResult.textContent=aidMap[victim.value]});
const questions=[
['Apa tujuan utama K3?',['Hanya memenuhi administrasi','Melindungi pekerja dan orang lain serta menjaga sumber produksi aman','Mempercepat pekerjaan dengan mengabaikan prosedur'],1,'Dasar K3: tujuan K3.'],
['Insiden yang tidak menimbulkan cedera tetapi berpotensi menimbulkan kerugian disebut…',['Hampir celaka','Kecelakaan fatal','Penyakit akibat kerja'],0,'Dasar K3: insiden dan hampir celaka.'],
['Risiko dalam materi dinilai dengan mempertimbangkan…',['Warna seragam dan masa kerja','Kemungkinan dan keparahan','Jumlah alat tulis'],1,'Manajemen Risiko: kemungkinan × keparahan.'],
['Urutan hirarki pengendalian yang paling tepat dimulai dari…',['APD','Rambu peringatan','Eliminasi bahaya'],2,'Manajemen Risiko: eliminasi berada di tingkat paling efektif.'],
['APD sebaiknya dipahami sebagai…',['Pengganti seluruh pengendalian lain','Lapisan perlindungan terakhir','Jaminan bahwa bahaya hilang'],1,'Manajemen APD: APD bukan pengganti kontrol lain.'],
['Sebelum menolong korban, penolong perlu menerapkan…',['3S: Safety Self, Scene, Patient','Langsung memindahkan korban','Memberi minum kepada semua korban'],0,'BFA: prinsip 3S.'],
['Apa yang dilakukan jika lokasi kejadian masih berbahaya?',['Segera masuk dan menolong','Menunggu tanpa memberi tahu siapa pun','Jangan mendekat; amankan area dan panggil bantuan'],2,'BFA: keselamatan penolong dan lokasi.'],
['Mengapa APD harus sesuai dengan bahaya?',['Agar terlihat seragam','Karena APD yang tidak sesuai tidak memberi perlindungan yang diperlukan','Supaya semua pekerjaan memakai jenis APD sama'],1,'Manajemen APD: pemilihan sesuai potensi bahaya.']
];
function renderQuiz(){quizArea.innerHTML=questions.map((q,i)=>'<div class="quiz-q"><p>'+(i+1)+'. '+q[0]+'</p>'+q[1].map((o,j)=>'<label class="option"><input type="radio" name="q'+i+'" value="'+j+'">'+o+'</label>').join('')+'<div class="feedback" id="fb'+i+'"></div></div>').join('');quizScore.innerHTML='';quizProgress.style.width='0%'}
checkQuiz.addEventListener('click',()=>{let score=0,answered=0;questions.forEach((q,i)=>{let el=document.querySelector('input[name="q'+i+'"]:checked'),fb=document.getElementById('fb'+i);if(el){answered++;if(+el.value===q[2]){score++;fb.textContent='Benar. '+q[3];fb.style.color='#16865b'}else{fb.textContent='Belum tepat. '+q[3];fb.style.color='#bd4b42'}}else{fb.textContent='Belum dijawab. '+q[3];fb.style.color='#9a6b1b'}});quizProgress.style.width=(answered/questions.length*100)+'%';quizScore.innerHTML='<div class="result"><b>Skor: '+score+' dari '+questions.length+'</b><br>'+ (score===questions.length?'Hebat! Semua jawaban benar.':'Pelajari kembali penjelasan pada bagian yang belum tepat, lalu coba lagi.')+'</div>'});
resetQuiz.addEventListener('click',renderQuiz);renderQuiz();riskCalc();
