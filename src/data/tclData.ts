/**
 * TCL Knowledge Base Data & Content
 * Curated for Indonesian university students with engaging pedagogical frameworks.
 */

export interface HierarchyLevel {
  id: string;
  name: string;
  englishTerm: string;
  tier: number;
  definition: string;
  analogy: string;
  example: string;
  iconName: string;
  badgeColor: string;
}

export interface DirectInstructionStep {
  step: number;
  title: string;
  englishName: string;
  durationEst: string;
  teacherAction: string;
  studentAction: string;
  exampleScenario: string;
  proTip: string;
}

export interface ComparisonPoint {
  aspect: string;
  tcl: string;
  scl: string;
  verdictTip: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  context: string;
  options: {
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
}

export interface GlossaryItem {
  id: string;
  term: string;
  category: 'Konsep' | 'Strategi' | 'Metode' | 'Teknik' | 'Praktik';
  simpleExplanation: string;
  inClassExample: string;
}

export const TCL_HIERARCHY: HierarchyLevel[] = [
  {
    id: 'approach',
    name: 'Pendekatan Pembelajaran',
    englishTerm: 'Approach',
    tier: 1,
    definition: 'Titik tolak atau sudut pandang menyeluruh tentang bagaimana proses belajar berlangsung secara filosofis.',
    analogy: 'Seperti memilih filosofi hidup atau peta umum suatu perjalanan.',
    example: 'Teacher-Centered Learning (TCL) memandang guru sebagai sumber utama transfer ilmu, sedangkan Student-Centered Learning (SCL) memandang siswa sebagai konstruktor pengetahuan aktif.',
    iconName: 'Compass',
    badgeColor: 'border-[#A94F70] text-[#A94F70]',
  },
  {
    id: 'strategy',
    name: 'Strategi Pembelajaran',
    englishTerm: 'Strategy',
    tier: 2,
    definition: 'Rencana menyeluruh yang berisi serangkaian kegiatan sistematis untuk mencapai tujuan instruksional tertentu.',
    analogy: 'Seperti rencana taktis jenderal sebelum perang atau grand design suatu proyek.',
    example: 'Direct Instruction (Pengajaran Langsung) atau Strategi Ekspositori—guru menyusun urutan materi dari yang paling mendasar ke aplikasi terapan.',
    iconName: 'Map',
    badgeColor: 'border-[#D98FA6] text-[#A94F70]',
  },
  {
    id: 'method',
    name: 'Metode Pembelajaran',
    englishTerm: 'Method',
    tier: 3,
    definition: 'Cara kerja operasional yang dipilih guru untuk menyajikan materi pelajaran kepada peserta didik di kelas.',
    analogy: 'Seperti kendaraan yang kamu pilih untuk menempuh rute: mobil, sepeda, atau jalan kaki.',
    example: 'Metode Ceramah Terstruktur (Lecture), Metode Demonstrasi (guru memeragakan langkah), atau Metode Drill & Practice.',
    iconName: 'Layers',
    badgeColor: 'border-[#A9BDA5] text-[#4A6346]',
  },
  {
    id: 'technique',
    name: 'Teknik Pembelajaran',
    englishTerm: 'Technique',
    tier: 4,
    definition: 'Cara spesifik dan konkrit yang dilakukan guru dalam menerapkan suatu metode agar berjalan efektif.',
    analogy: 'Seperti cara menginjak pedal kopling atau memutar setir saat menyetir kendaraan.',
    example: 'Dalam metode demonstrasi: Guru menggunakan teknik "I Do, We Do, You Do", teknik penegasan intonasi penting, atau teknik jeda 3 detik setelah melempar pertanyaan.',
    iconName: 'Sparkles',
    badgeColor: 'border-[#A94F70] text-[#A94F70]',
  },
  {
    id: 'tactic',
    name: 'Taktik Pembelajaran',
    englishTerm: 'Tactic',
    tier: 5,
    definition: 'Gaya personal dan keunikan individual guru dalam membawakan teknik atau metode di hadapan siswa.',
    analogy: 'Seperti selera humor, senyuman, atau gaya khas pembawa acara favoritmu.',
    example: 'Seorang guru suka menyelipkan pantun pembuka, memakai analogi kopi susu untuk menjelaskan zat campuran, atau punya gaya vokal yang ekspresif dan ramah.',
    iconName: 'Smile',
    badgeColor: 'border-[#D98FA6] text-[#A94F70]',
  },
];

export const DIRECT_INSTRUCTION_STEPS: DirectInstructionStep[] = [
  {
    step: 1,
    title: 'Apersepsi & Orientasi Tujuan',
    englishName: 'Orientation & Review',
    durationEst: '5–10 Menit',
    teacherAction: 'Menghubungkan materi baru dengan pengalaman sebelumnya serta menyatakan tujuan pembelajaran secara eksplisit.',
    studentAction: 'Mengingat kembali konsep prasyarat dan menyadari target kemampuan yang akan dicapai hari ini.',
    exampleScenario: '"Kemarin kita belajar tentang bagian-bagian bunga. Hari ini kita akan belajar persis bagaimana serbuk sari berpindah ke putik!"',
    proTip: 'Gunakan pertanyaan pemantik singkat untuk memancing fokus murid sebelum masuk ke teori inti.',
  },
  {
    step: 2,
    title: 'Presentasi Materi & Modeling',
    englishName: 'Presentation & Modeling (I Do)',
    durationEst: '15–20 Menit',
    teacherAction: 'Menyajikan materi secara bertahap dalam potongan kecil (chunking) dan mendemonstrasikan proses/prosedur secara langsung.',
    studentAction: 'Menyimak secara aktif, mencatat poin kunci, dan mengamati contoh pengerjaan yang benar.',
    exampleScenario: 'Guru memegang gunting keselamatan dan memeragakan posisi jari jempol di lubang atas dan jari tengah di lubang bawah.',
    proTip: 'Hindari berbicara terlalu cepat. Beri contoh visual atau analogi konkret di setiap segmen kecil materi.',
  },
  {
    step: 3,
    title: 'Praktik Terbimbing',
    englishName: 'Guided Practice (We Do)',
    durationEst: '15–20 Menit',
    teacherAction: 'Mengajak siswa mempraktikkan langkah bersama-sama sambil guru mengamati dan memandu di tiap tahap.',
    studentAction: 'Mengerjakan tugas langkah demi langkah secara serentak bersama bimbingan langsung guru.',
    exampleScenario: 'Guru meminta seluruh kelas menggunting garis lurus pertama bersama-sama: "Siap, 1... 2... gunting perlahan!"',
    proTip: 'Cek pemahaman murid secara berkala melalui teknik jempol ke atas atau kartu respon cepat.',
  },
  {
    step: 4,
    title: 'Umpan Balik & Koreksi Cepat',
    englishName: 'Feedback & Correctives',
    durationEst: '5–10 Menit',
    teacherAction: 'Mengidentifikasi miskonsepsi atau kesalahan teknis sedini mungkin dan memberikan koreksi positif tanpa menghakimi.',
    studentAction: 'Memperbaiki kekeliruan cara kerja sebelum kebiasaan salah tersebut mengakar kuat.',
    exampleScenario: '"Bagus sekali Rina! Jempolnya sudah pas, sekarang pastikan kertasnya yang diputar ya, bukan tanganmu yang meliuk."',
    proTip: 'Koreksi paling efektif adalah yang diberikan saat aksi masih berlangsung (immediate formative feedback).',
  },
  {
    step: 5,
    title: 'Praktik Mandiri',
    englishName: 'Independent Practice (You Do)',
    durationEst: '15–20 Menit',
    teacherAction: 'Memberikan lembar latihan atau tugas mandiri untuk menguji otomatisasi keterampilan murid secara independen.',
    studentAction: 'Mengerjakan tugas sendiri dengan percaya diri berdasarkan pola yang sudah dipelajari.',
    exampleScenario: 'Siswa menyelesaikan potongan bentuk pola bintang dan lingkaran tanpa dibantu terus-menerus oleh guru.',
    proTip: 'Guru berkeliling kelas tanpa mendominasi, hanya mengintervensi jika ada murid yang macet total.',
  },
  {
    step: 6,
    title: 'Review Berkala & Penutup',
    englishName: 'Review & Delayed Retrieval',
    durationEst: '5–10 Menit',
    teacherAction: 'Meringkas inti materi bersama murid dan memberi latihan pengulangan di hari-hari berikutnya.',
    studentAction: 'Menyimpulkan apa yang dipelajari dan merefleksikan kemajuan keterampilannya.',
    exampleScenario: 'Di akhir sesi: "Siapa yang bisa sebutkan 2 aturan penting saat memegang gunting tadi?"',
    proTip: 'Spaced repetition (pengulangan bertenggang waktu) adalah kunci agar keterampilan Direct Instruction bertahan lama.',
  },
];

export const TCL_VS_SCL_COMPARISON: ComparisonPoint[] = [
  {
    aspect: 'Fokus Utama (Center of Focus)',
    tcl: 'Guru berperan sebagai pusat pengetahuan (Sage on the Stage) dan pengarah instruksi.',
    scl: 'Siswa berperan sebagai penemu dan perancang aktif pembelajaran (Guide on the Side).',
    verdictTip: 'TCL sangat unggul saat mengenalkan konsep baru atau prosedur yang belum pernah diketahui murid sama sekali.',
  },
  {
    aspect: 'Peran Peserta Didik',
    tcl: 'Penerima aktif yang mengikuti panduan, menyerap materi terstruktur, dan mereplikasi prosedur.',
    scl: 'Eksplorator mandiri yang berdiskusi, merumuskan hipotesis, dan memecahkan masalah terbuka.',
    verdictTip: 'Dalam TCL, siswa bukan robot pasif; mereka aktif berlatih, mencatat, dan merespons pertanyaan guru.',
  },
  {
    aspect: 'Struktur Kelas & Waktu',
    tcl: 'Sangat terstruktur, waktu terkontrol ketat, agenda jelas dari menit pertama hingga akhir.',
    scl: 'Fleksibel, adaptif terhadap alur diskusi kelompok, waktu sering kali dinamis.',
    verdictTip: 'Jika materi banyak dan alokasi waktu terbatas, TCL adalah pendekatan paling efisien.',
  },
  {
    aspect: 'Metode Pengajaran Populer',
    tcl: 'Direct Instruction, Ceramah Terarah, Demonstrasi Praktis, Drill & Recitation.',
    scl: 'Problem-Based Learning (PBL), Inquiry Learning, Project-Based Learning (PjBL), Diskusi Kelompok.',
    verdictTip: 'Kombinasi ideal: Mulai dengan TCL untuk fondasi, lalu lanjutkan ke SCL untuk eksplorasi!',
  },
  {
    aspect: 'Jenis Materi yang Paling Cocok',
    tcl: 'Fakta dasar, rumus awal, keselamatan laboratorium/alat, kaidah bahasa, dan prosedur teknis.',
    scl: 'Analisis kasus kompleks, debat etika, penemuan sains kreatif, dan kolaborasi tim.',
    verdictTip: 'Bayangkan belajar naik sepeda atau bedah medis: kamu butuh arahan TCL eksplisit sebelum bereksperimen sendiri!',
  },
  {
    aspect: 'Risiko / Tantangan',
    tcl: 'Jika guru kurang variatif, kelas bisa monoton; kreativitas spontan murid bisa terbatas.',
    scl: 'Bisa timbul miskonsepsi jika bimbingan minim; menghabiskan banyak waktu dan sumber daya.',
    verdictTip: 'Kunci keberhasilan TCL terletak pada keterampilan komunikasi guru dan umpan balik berkala.',
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Bu Nina mengajar materi keselamatan memegang gunting di kelas PAUD. Ia memperagakan posisi jari terlebih dahulu, mengajak anak mencoba bersama, lalu mengoreksi cara pegang mereka. Pendekatan manakah ini?',
    context: 'Analisis Skenario Kelas',
    options: [
      {
        text: 'Teacher-Centered Learning (TCL) melalui Direct Instruction',
        isCorrect: true,
        explanation: 'Tepat sekali! Guru memegang kendali instruksi keselamatan dan memodelkan prosedur secara langsung demi keamanan anak.',
      },
      {
        text: 'Discovery Learning murni tanpa intervensi',
        isCorrect: false,
        explanation: 'Kurang tepat. Menyerahkan gunting tanpa instruksi langsung (eksplorasi bebas) justru berbahaya bagi anak usia dini.',
      },
      {
        text: 'Project-Based Learning mandiri',
        isCorrect: false,
        explanation: 'Belum tepat. Bu Nina sedang mengajarkan keterampilan motorik mendasar dengan modeling terarah, bukan proyek kelompok terbuka.',
      },
    ],
  },
  {
    id: 2,
    question: 'Di antara urutan pedagogis berikut, manakah hierarki dari tingkat yang paling konseptual/luas ke tingkat yang paling praktis/personal?',
    context: 'Hierarki Pedagogis',
    options: [
      {
        text: 'Pendekatan → Strategi → Metode → Teknik → Taktik',
        isCorrect: true,
        explanation: 'Benar! Pendekatan adalah filosofi payung, strategi adalah rencana umum, metode adalah cara kerja, teknik adalah langkah spesifik, dan taktik adalah gaya personal guru.',
      },
      {
        text: 'Taktik → Teknik → Metode → Strategi → Pendekatan',
        isCorrect: false,
        explanation: 'Ini adalah urutan terbalik dari yang paling personal ke yang paling konseptual.',
      },
      {
        text: 'Metode → Pendekatan → Teknik → Strategi → Taktik',
        isCorrect: false,
        explanation: 'Urutan ini tertukar antara pendekatan, metode, dan strategi.',
      },
    ],
  },
  {
    id: 3,
    question: 'Pak Andi menggunakan analogi "teh manis hangat" untuk menjelaskan zat campuran homogen agar muridnya tersenyum dan paham. Analogi ramah ini merupakan contoh dari...',
    context: 'Tingkatan Implementasi Mengajar',
    options: [
      {
        text: 'Taktik Pembelajaran (gaya personal & keunikan guru)',
        isCorrect: true,
        explanation: 'Luar biasa! Taktik adalah bagaimana seorang guru membumbui pengajarannya dengan humor, analogi khas, atau intonasi yang memikat.',
      },
      {
        text: 'Pendekatan Pembelajaran (paradigma filosofis)',
        isCorrect: false,
        explanation: 'Kurang tepat. Pendekatan berbicara tentang paradigma payung (TCL vs SCL), bukan pilihan analogi spontan guru.',
      },
      {
        text: 'Kurikulum Nasional',
        isCorrect: false,
        explanation: 'Kurikulum mengatur capaian pembelajaran, bukan sentuhan gaya bicara guru di depan kelas.',
      },
    ],
  },
  {
    id: 4,
    question: 'Kapan Teacher-Centered Learning (TCL) PALING krusial dan dianjurkan untuk digunakan?',
    context: 'Efektivitas Kontekstual TCL',
    options: [
      {
        text: 'Saat mengenalkan pengetahuan baru yang berisiko, beraturan baku, atau konsep prasyarat penting',
        isCorrect: true,
        explanation: 'Sempurna! TCL sangat efektif untuk keterampilan berurutan, aturan keselamatan, dan konsep fondasi sebelum murid siap eksplorasi.',
      },
      {
        text: 'Hanya jika guru merasa lelah dan tidak ingin murid banyak bertanya',
        isCorrect: false,
        explanation: 'Tentu tidak. TCL adalah pendekatan pedagogis yang dirancang dengan tujuan ilmiah, bukan pelarian guru.',
      },
      {
        text: 'Saat murid sudah sangat ahli dan ingin melakukan riset mandiri tingkat lanjut',
        isCorrect: false,
        explanation: 'Untuk level ahli, pendekatan inquiry atau Student-Centered Learning (SCL) biasanya lebih memberi ruang inovasi.',
      },
    ],
  },
  {
    id: 5,
    question: 'Apa fungsi utama tahap "Praktik Terbimbing" (Guided Practice / We Do) dalam sintaks Direct Instruction?',
    context: 'Sintaks Direct Instruction',
    options: [
      {
        text: 'Mencegah miskonsepsi sejak awal dengan mendampingi siswa sebelum mereka dilepas mengerjakan sendiri',
        isCorrect: true,
        explanation: 'Mantap! Di tahap We Do, guru membimbing bersama agar murid tidak langsung mengulang kesalahan saat praktik mandiri.',
      },
      {
        text: 'Memberikan nilai rapor akhir secara langsung',
        isCorrect: false,
        explanation: 'Bukan, penilaian akhir biasanya dilakukan pada tahap evaluasi atau asesmen sumatif.',
      },
      {
        text: 'Membiarkan siswa belajar sendiri di rumah tanpa panduan',
        isCorrect: false,
        explanation: 'Itu adalah praktik mandiri atau tugas rumah, bukan praktik terbimbing di kelas.',
      },
    ],
  },
];

export const GLOSSARY_ITEMS: GlossaryItem[] = [
  {
    id: 'di',
    term: 'Direct Instruction',
    category: 'Strategi',
    simpleExplanation: 'Strategi pembelajaran terstruktur dan eksplisit yang dipimpin guru untuk mengajarkan konsep atau keterampilan langkah demi langkah.',
    inClassExample: 'Guru menerangkan cara mengoperasikan jangka sorong dari pembacaan skala utama hingga nonius.',
  },
  {
    id: 'scaffolding',
    term: 'Scaffolding',
    category: 'Praktik',
    simpleExplanation: 'Bantuan atau perancah sementara yang diberikan guru kepada murid di awal pembelajaran, kemudian perlahan dikurangi saat murid makin mahir.',
    inClassExample: 'Memberikan lembar panduan bergambar di pertemuan pertama, lalu hanya lembar kosong di pertemuan ketiga.',
  },
  {
    id: 'expository',
    term: 'Strategi Ekspositori',
    category: 'Strategi',
    simpleExplanation: 'Penyampaian bahan pelajaran secara lisan dan terorganisir dari guru ke siswa agar siswa dapat menguasai materi secara optimal.',
    inClassExample: 'Presentasi kronologi kemerdekaan dengan garis waktu visual di papan tulis.',
  },
  {
    id: 'chunking',
    term: 'Chunking (Pemecahan Materi)',
    category: 'Teknik',
    simpleExplanation: 'Memecah materi yang panjang menjadi unit-unit kecil yang mudah dicerna memori kerja otak siswa.',
    inClassExample: 'Menghafal nomor telepon per 3-4 digit, atau mengajarkan tari tradisional per 4 hitungan gerak.',
  },
  {
    id: 'choral-response',
    term: 'Choral Response (Respon Serentak)',
    category: 'Teknik',
    simpleExplanation: 'Teknik mengajak seluruh siswa menjawab bersama-sama secara serentak untuk memeriksa keterlibatan dan daya ingat cepat.',
    inClassExample: 'Guru: "Berapa sudut segitiga sama sisi?" Seluruh kelas: "Enam puluh derajat!"',
  },
  {
    id: 'prompting',
    term: 'Prompting & Cues',
    category: 'Praktik',
    simpleExplanation: 'Pemberian isyarat atau petunjuk pancingan saat siswa kesulitan menjawab, agar mereka menemukan jawaban sendiri.',
    inClassExample: 'Guru: "Ingat kata depannya dari huruf P... fotosintesis!"',
  },
];

export const PAUD_PREVIEW_SCENARIOS = [
  {
    id: 'scissor',
    title: 'Skenario 1: Keterampilan Motorik Halus (Gunting & Lem)',
    ageGroup: 'Usia 4–5 Tahun (Kelompok A)',
    whyTcl: 'Gunting memiliki risiko cedera jika anak bereksplorasi tanpa pemodelan keselamatan eksplisit.',
    stepsSummary: 'Guru memperagakan posisi jari jempol di atas → bernyanyi "Buka Mulut Buaya" → praktik potong bersama guru.',
    tag: 'Keamanan & Keterampilan Prosedural',
  },
  {
    id: 'hygiene',
    title: 'Skenario 2: Rutinitas Hidup Sehat (Cuci Tangan 6 Langkah)',
    ageGroup: 'Usia 3–6 Tahun (Semua Jenjang)',
    whyTcl: 'Langkah cuci tangan WHO memiliki urutan baku (telapak, punggung tangan, sela jari) yang perlu dicontohkan berulang.',
    stepsSummary: 'Modeling langsung di wastafel sambil menyanyikan lagu 20 detik berirama gembira.',
    tag: 'Pembiasaan Karakter & Kebersihan',
  },
  {
    id: 'fire-drill',
    title: 'Skenario 3: Prosedur Keselamatan Diri & Jalur Evakuasi',
    ageGroup: 'Usia 5–6 Tahun (Kelompok B)',
    whyTcl: 'Situasi darurat memerlukan ketaatan instruksi yang cepat, jelas, dan serentak dari guru pemandu.',
    stepsSummary: 'Instruksi satu komando tenang: "Tangan di kepala, jalan tenang ke titik kumpul taman bunga".',
    tag: 'Instruksi Presisi Tinggi',
  },
];
