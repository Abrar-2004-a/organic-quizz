const questions = [
    {
        id: 1,
        questionEn: "What is the general formula for alkyl groups?",
        questionAr: "ما هي الصيغة العامة لمجموعات الألكيل؟",
        options: { en: ["CnH2n", "CnH2n+1", "CnH2n-1", "CnH2n+2"], ar: ["CnH2n", "CnH2n+1", "CnH2n-1", "CnH2n+2"] },
        correctAnswer: 1,
        explanation: {
            en: "Alkyl groups have the general formula CnH2n+1, derived by removing one hydrogen from an alkane (CnH2n+2).",
            ar: "مجموعات الألكيل لها الصيغة العامة CnH2n+1، المشتقة من إزالة هيدروجين واحد من الألكان (CnH2n+2)."
        },
        category: "Aliphatic Compounds"
    },
    {
        id: 2,
        questionEn: "Which functional group characterizes carboxylic acids?",
        questionAr: "ما هي المجموعة الوظيفية التي تميز الأحماض الكربوكسيلية؟",
        options: { en: ["-OH", "-COOH", "-CHO", "-NH2"], ar: ["-OH", "-COOH", "-CHO", "-NH2"] },
        correctAnswer: 1,
        explanation: {
            en: "The carboxyl group (-COOH) is the functional group that defines carboxylic acids.",
            ar: "مجموعة الكربوكسيل (-COOH) هي المجموعة الوظيفية التي تحدد الأحماض الكربوكسيلية."
        },
        category: "Carboxylic Acids"
    },
    {
        id: 3,
        questionEn: "According to Hückel's rule, how many π electrons must a compound have to be aromatic?",
        questionAr: "وفقاً لقاعدة هوكل، كم عدد إلكترونات π التي يجب أن يحتوي عليها المركب ليكون أروماتياً؟",
        options: { en: ["4n", "4n+2", "2n", "2n+1"], ar: ["4n", "4n+2", "2n", "2n+1"] },
        correctAnswer: 1,
        explanation: {
            en: "Hückel's rule states that aromatic compounds must have (4n+2) π electrons, where n is a non-negative integer.",
            ar: "تنص قاعدة هوكل على أن المركبات الأروماتية يجب أن تحتوي على (4n+2) إلكترون π، حيث n عدد صحيح غير سالب."
        },
        category: "Aromatic Compounds"
    },
    {
        id: 4,
        questionEn: "What is the name of the phenyl group?",
        questionAr: "ما هو اسم مجموعة الفينيل؟",
        options: { en: ["C6H6", "C6H5", "C6H12", "C6H4"], ar: ["C6H6", "C6H5", "C6H12", "C6H4"] },
        correctAnswer: 1,
        explanation: {
            en: "The phenyl group has the formula C6H5, which is benzene (C6H6) minus one hydrogen.",
            ar: "مجموعة الفينيل لها الصيغة C6H5، وهي البنزين (C6H6) ناقص هيدروجين واحد."
        },
        category: "Aromatic Compounds"
    },
    {
        id: 5,
        questionEn: "How are carboxylic acids classified according to the number of functional groups?",
        questionAr: "كيف تُصنف الأحماض الكربوكسيلية حسب عدد المجموعات الوظيفية؟",
        options: {
            en: ["Mono-, Di-, Tricarboxylic", "Primary, Secondary, Tertiary", "Aliphatic, Aromatic", "Saturated, Unsaturated"],
            ar: ["أحادي، ثنائي، ثلاثي الكربوكسيل", "أولي، ثانوي، ثلاثي", "أليفاتي، أروماتي", "مشبع، غير مشبع"]
        },
        correctAnswer: 0,
        explanation: {
            en: "Carboxylic acids can be monocarboxylic (one -COOH), dicarboxylic (two -COOH), or tricarboxylic (three -COOH).",
            ar: "يمكن أن تكون الأحماض الكربوكسيلية أحادية الكربوكسيل (-COOH واحد)، ثنائية الكربوكسيل (اثنان -COOH)، أو ثلاثية الكربوكسيل (ثلاثة -COOH)."
        },
        category: "Carboxylic Acids"
    },
    {
        id: 6,
        questionEn: "What type of reaction is Friedel-Crafts?",
        questionAr: "ما نوع تفاعل فريدل-كرافتس؟",
        options: {
            en: ["Addition", "Elimination", "Electrophilic Substitution", "Nucleophilic Substitution"],
            ar: ["إضافة", "حذف", "استبدال إلكتروفيلي", "استبدال نووي"]
        },
        correctAnswer: 2,
        explanation: {
            en: "Friedel-Crafts is an electrophilic substitution reaction that occurs on aromatic rings.",
            ar: "فريدل-كرافتس هو تفاعل استبدال إلكتروفيلي يحدث على الحلقات الأروماتية."
        },
        category: "Aromatic Reactions"
    },
    {
        id: 7,
        questionEn: "What is the main catalyst used in Friedel-Crafts reaction?",
        questionAr: "ما هو المحفز الرئيسي المستخدم في تفاعل فريدل-كرافتس؟",
        options: { en: ["H2SO4", "AlCl3", "FeCl3", "NaOH"], ar: ["H2SO4", "AlCl3", "FeCl3", "NaOH"] },
        correctAnswer: 1,
        explanation: {
            en: "Aluminum chloride (AlCl3) is the Lewis acid catalyst used in Friedel-Crafts reactions.",
            ar: "كلوريد الألومنيوم (AlCl3) هو حمض لويس المحفز المستخدم في تفاعلات فريدل-كرافتس."
        },
        category: "Aromatic Reactions"
    },
    {
        id: 8,
        questionEn: "How many π electrons does benzene have?",
        questionAr: "كم عدد إلكترونات π في البنزين؟",
        options: { en: ["4", "6", "8", "10"], ar: ["4", "6", "8", "10"] },
        correctAnswer: 1,
        explanation: {
            en: "Benzene has 6 π electrons (4n+2, where n=1), making it aromatic according to Hückel's rule.",
            ar: "يحتوي البنزين على 6 إلكترونات π (4n+2، حيث n=1)، مما يجعله أروماتياً وفقاً لقاعدة هوكل."
        },
        category: "Aromatic Compounds"
    },
    {
        id: 9,
        questionEn: "What happens when you remove 2H from ethane?",
        questionAr: "ماذا يحدث عند إزالة 2H من الإيثان؟",
        options: {
            en: ["Ethene (alkene)", "Ethyne (alkyne)", "Ethyl", "Methane"],
            ar: ["إيثين (ألكين)", "إيثاين (ألكاين)", "إيثيل", "ميثان"]
        },
        correctAnswer: 0,
        explanation: {
            en: "Removing 2H from ethane (C2H6) gives ethene (C2H4), an alkene with a double bond.",
            ar: "إزالة 2H من الإيثان (C2H6) تعطي الإيثين (C2H4)، وهو ألكين ذو رابطة مزدوجة."
        },
        category: "Aliphatic Compounds"
    },
    {
        id: 10,
        questionEn: "What is benzoic acid?",
        questionAr: "ما هو حمض البنزويك؟",
        options: {
            en: ["Aliphatic carboxylic acid", "Aromatic carboxylic acid", "Aliphatic alcohol", "Aromatic amine"],
            ar: ["حمض كربوكسيلي أليفاتي", "حمض كربوكسيلي أروماتي", "كحول أليفاتي", "أمين أروماتي"]
        },
        correctAnswer: 1,
        explanation: {
            en: "Benzoic acid is an aromatic carboxylic acid with a carboxyl group attached to a benzene ring.",
            ar: "حمض البنزويك هو حمض كربوكسيلي أروماتي مع مجموعة كربوكسيل متصلة بحلقة بنزين."
        },
        category: "Aromatic Compounds"
    },
    {
        id: 11,
        questionEn: "What defines an organic compound?",
        questionAr: "ما الذي يحدد المركب العضوي؟",
        options: {
            en: ["Contains oxygen", "Contains nitrogen", "Contains carbon", "Contains hydrogen"],
            ar: ["يحتوي على أكسجين", "يحتوي على نيتروجين", "يحتوي على كربون", "يحتوي على هيدروجين"]
        },
        correctAnswer: 2,
        explanation: {
            en: "Organic compounds are defined as compounds that contain carbon atoms.",
            ar: "تُعرّف المركبات العضوية بأنها مركبات تحتوي على ذرات كربون."
        },
        category: "Organic Chemistry Basics"
    },
    {
        id: 12,
        questionEn: "Which structure represents acetylene?",
        questionAr: "ما هي البنية التي تمثل الأسيتيلين؟",
        options: { en: ["CH3-CH3", "CH2=CH2", "CH≡CH", "C6H6"], ar: ["CH3-CH3", "CH2=CH2", "CH≡CH", "C6H6"] },
        correctAnswer: 2,
        explanation: {
            en: "Acetylene has the structure CH≡CH with a triple bond between two carbon atoms.",
            ar: "الأسيتيلين له البنية CH≡CH مع رابطة ثلاثية بين ذرتي كربون."
        },
        category: "Aliphatic Compounds"
    },
    {
        id: 13,
        questionEn: "What is the hybridization of carbon in benzene?",
        questionAr: "ما هو تهجين الكربون في البنزين؟",
        options: { en: ["sp", "sp2", "sp3", "sp3d"], ar: ["sp", "sp2", "sp3", "sp3d"] },
        correctAnswer: 1,
        explanation: {
            en: "Carbon atoms in benzene are sp2 hybridized, forming a planar structure with 120° bond angles.",
            ar: "ذرات الكربون في البنزين مهجنة sp2، تشكل بنية مستوية مع زوايا رابطة 120°."
        },
        category: "Aromatic Compounds"
    },
    {
        id: 14,
        questionEn: "What is the IUPAC name for CH3COOH?",
        questionAr: "ما هو الاسم النظامي لـ CH3COOH؟",
        options: {
            en: ["Methanoic acid", "Ethanoic acid", "Propanoic acid", "Butanoic acid"],
            ar: ["حمض الميثانويك", "حمض الإيثانويك", "حمض البروبانويك", "حمض البيوتانويك"]
        },
        correctAnswer: 1,
        explanation: {
            en: "CH3COOH is ethanoic acid (also known as acetic acid), with 2 carbon atoms.",
            ar: "CH3COOH هو حمض الإيثانويك (المعروف أيضاً بحمض الخليك)، مع ذرتي كربون."
        },
        category: "Nomenclature"
    },
    {
        id: 15,
        questionEn: "What is an electrophile?",
        questionAr: "ما هو الإلكتروفيل؟",
        options: {
            en: ["Electron donor", "Electron acceptor", "Neutral species", "Radical"],
            ar: ["مانح للإلكترونات", "متقبل للإلكترونات", "نوع متعادل", "جذر حر"]
        },
        correctAnswer: 1,
        explanation: {
            en: "An electrophile is an electron-seeking species with positive charge or partial positive charge.",
            ar: "الإلكتروفيل هو نوع يبحث عن الإلكترونات مع شحنة موجبة أو شحنة موجبة جزئية."
        },
        category: "Reaction Mechanisms"
    },
    {
        id: 16,
        questionEn: "Which compound follows Hückel's rule with n=0?",
        questionAr: "أي مركب يتبع قاعدة هوكل مع n=0؟",
        options: {
            en: ["Cyclopentadienyl anion", "Benzene", "Cyclooctatetraene", "Naphthalene"],
            ar: ["أنيون السيكلوبنتاديينيل", "بنزين", "سيكلوأوكتاتيترائين", "نفثالين"]
        },
        correctAnswer: 0,
        explanation: {
            en: "Cyclopentadienyl anion has 6 π electrons (4×0+2=2), making it aromatic.",
            ar: "أنيون السيكلوبنتاديينيل له 6 إلكترونات π (4×0+2=2)، مما يجعله أروماتياً."
        },
        category: "Aromatic Compounds"
    },
    {
        id: 17,
        questionEn: "What is the difference between aliphatic and aromatic compounds?",
        questionAr: "ما الفرق بين المركبات الأليفاتية والأروماتية؟",
        options: {
            en: ["Chain structure vs ring structure", "Saturated vs unsaturated", "Open chain vs conjugated ring", "Polar vs non-polar"],
            ar: ["بنية سلسلة مقابل بنية حلقية", "مشبع مقابل غير مشبع", "سلسلة مفتوحة مقابل حلقة مترافقة", "قطبي مقابل غير قطبي"]
        },
        correctAnswer: 2,
        explanation: {
            en: "Aliphatic compounds have open or non-aromatic cyclic structures, while aromatic compounds have planar conjugated ring systems.",
            ar: "المركبات الأليفاتية لها بنيات مفتوحة أو حلقية غير أروماتية، بينما المركبات الأروماتية لها أنظمة حلقية مترافقة مستوية."
        },
        category: "Classification"
    },
    {
        id: 18,
        questionEn: "What type of bond is present in carboxylic acids?",
        questionAr: "ما نوع الرابطة الموجودة في الأحماض الكربوكسيلية؟",
        options: {
            en: ["Only single bonds", "C=O and O-H bonds", "Triple bonds", "Aromatic bonds"],
            ar: ["روابط فردية فقط", "روابط C=O و O-H", "روابط ثلاثية", "روابط أروماتية"]
        },
        correctAnswer: 1,
        explanation: {
            en: "Carboxylic acids contain both a C=O double bond and an O-H single bond in the -COOH group.",
            ar: "تحتوي الأحماض الكربوكسيلية على رابطة C=O مزدوجة ورابطة O-H فردية في مجموعة -COOH."
        },
        category: "Bonding"
    },
    {
        id: 19,
        questionEn: "How is methyl group formed from methane?",
        questionAr: "كيف تتشكل مجموعة الميثيل من الميثان؟",
        options: {
            en: ["Remove -H", "Remove -OH", "Add -H", "Add -OH"],
            ar: ["إزالة -H", "إزالة -OH", "إضافة -H", "إضافة -OH"]
        },
        correctAnswer: 0,
        explanation: {
            en: "Methyl group (CH3-) is formed by removing one hydrogen atom from methane (CH4).",
            ar: "تتشكل مجموعة الميثيل (CH3-) بإزالة ذرة هيدروجين واحدة من الميثان (CH4)."
        },
        category: "Nomenclature"
    },
    {
        id: 20,
        questionEn: "What makes benzene stable?",
        questionAr: "ما الذي يجعل البنزين مستقراً؟",
        options: {
            en: ["Single bonds", "Conjugated π electrons", "Saturated structure", "Triple bonds"],
            ar: ["روابط فردية", "إلكترونات π مترافقة", "بنية مشبعة", "روابط ثلاثية"]
        },
        correctAnswer: 1,
        explanation: {
            en: "Benzene is stable due to resonance and delocalization of conjugated π electrons.",
            ar: "البنزين مستقر بسبب الرنين وإزاحة إلكترونات π المترافقة."
        },
        category: "Aromatic Compounds"
    },
    {
        id: 21,
        questionEn: "What is the product when acetylene polymerizes?",
        questionAr: "ما هو الناتج عند بلمرة الأسيتيلين؟",
        options: { en: ["Ethane", "Ethene", "Benzene", "Propane"], ar: ["إيثان", "إيثين", "بنزين", "بروبان"] },
        correctAnswer: 2,
        explanation: {
            en: "Three acetylene molecules (C2H2) can polymerize to form benzene (C6H6).",
            ar: "ثلاثة جزيئات أسيتيلين (C2H2) يمكن أن تتبلمر لتشكل البنزين (C6H6)."
        },
        category: "Reactions"
    },
    {
        id: 22,
        questionEn: "What is a dicarboxylic acid?",
        questionAr: "ما هو الحمض ثنائي الكربوكسيل؟",
        options: {
            en: ["Has one -COOH", "Has two -COOH", "Has three -COOH", "Has no -COOH"],
            ar: ["له -COOH واحد", "له -COOH اثنان", "له ثلاثة -COOH", "ليس له -COOH"]
        },
        correctAnswer: 1,
        explanation: {
            en: "A dicarboxylic acid contains two carboxyl groups (-COOH).",
            ar: "يحتوي الحمض ثنائي الكربوكسيل على مجموعتي كربوكسيل (-COOH)."
        },
        category: "Carboxylic Acids"
    },
    {
        id: 23,
        questionEn: "What is the role of AlCl3 in Friedel-Crafts reaction?",
        questionAr: "ما هو دور AlCl3 في تفاعل فريدل-كرافتس؟",
        options: {
            en: ["Base", "Lewis acid catalyst", "Nucleophile", "Solvent"],
            ar: ["قاعدة", "محفز حمض لويس", "نووي", "مذيب"]
        },
        correctAnswer: 1,
        explanation: {
            en: "AlCl3 acts as a Lewis acid catalyst to generate electrophile in Friedel-Crafts reactions.",
            ar: "يعمل AlCl3 كمحفز حمض لويس لتوليد الإلكتروفيل في تفاعلات فريدل-كرافتس."
        },
        category: "Reactions"
    },
    {
        id: 24,
        questionEn: "Which has higher acidity: carboxylic acid or alcohol?",
        questionAr: "أيهما أكثر حمضية: الحمض الكربوكسيلي أم الكحول؟",
        options: {
            en: ["Alcohol", "Carboxylic acid", "Both equal", "Neither is acidic"],
            ar: ["كحول", "حمض كربوكسيلي", "كلاهما متساوٍ", "لا أحد منهما حمضي"]
        },
        correctAnswer: 1,
        explanation: {
            en: "Carboxylic acids are more acidic than alcohols due to resonance stabilization of the carboxylate anion.",
            ar: "الأحماض الكربوكسيلية أكثر حمضية من الكحولات بسبب استقرار الرنين لأنيون الكربوكسيلات."
        },
        category: "Acid-Base"
    },
    {
        id: 25,
        questionEn: "What is the geometry of benzene?",
        questionAr: "ما هي هندسة البنزين؟",
        options: {
            en: ["Tetrahedral", "Linear", "Planar hexagon", "Trigonal pyramid"],
            ar: ["رباعي الأوجه", "خطي", "سداسي مستوي", "هرمي ثلاثي"]
        },
        correctAnswer: 2,
        explanation: {
            en: "Benzene has a planar hexagonal structure with sp2 hybridized carbons and 120° bond angles.",
            ar: "البنزين له بنية سداسية مستوية مع كربونات مهجنة sp2 وزوايا رابطة 120°."
        },
        category: "Structure"
    }
];

const flashcards = [
    {
        id: 1,
        frontEn: "Carboxylic Acid",
        frontAr: "حمض كربوكسيلي",
        backEn: "An organic compound containing a carboxyl group (-COOH). General formula: R-COOH",
        backAr: "مركب عضوي يحتوي على مجموعة كربوكسيل (-COOH). الصيغة العامة: R-COOH",
        category: "Functional Groups"
    },
    {
        id: 2,
        frontEn: "Alkyl Group",
        frontAr: "مجموعة ألكيل",
        backEn: "A saturated hydrocarbon group derived from alkanes. General formula: CnH2n+1",
        backAr: "مجموعة هيدروكربونية مشبعة مشتقة من الألكانات. الصيغة العامة: CnH2n+1",
        category: "Functional Groups"
    },
    {
        id: 3,
        frontEn: "Aromatic Compound",
        frontAr: "مركب أروماتي",
        backEn: "A cyclic, planar molecule with conjugated π bonds following Hückel's rule (4n+2 π electrons)",
        backAr: "جزيء حلقي مستوي مع روابط π مترافقة يتبع قاعدة هوكل (4n+2 إلكترون π)",
        category: "Compound Types"
    },
    {
        id: 4,
        frontEn: "Phenyl Group (C6H5)",
        frontAr: "مجموعة فينيل (C6H5)",
        backEn: "An aryl group derived from benzene by removing one hydrogen atom",
        backAr: "مجموعة أريل مشتقة من البنزين بإزالة ذرة هيدروجين واحدة",
        category: "Functional Groups"
    },
    {
        id: 5,
        frontEn: "Hückel's Rule",
        frontAr: "قاعدة هوكل",
        backEn: "For aromaticity: 4n+2 π electrons (where n = 0, 1, 2, 3...). Example: Benzene has 6 π electrons (n=1)",
        backAr: "للأروماتية: 4n+2 إلكترون π (حيث n = 0, 1, 2, 3...). مثال: البنزين له 6 إلكترونات π (n=1)",
        category: "Rules"
    },
    {
        id: 6,
        frontEn: "Friedel-Crafts Reaction",
        frontAr: "تفاعل فريدل-كرافتس",
        backEn: "Electrophilic substitution on aromatic rings using AlCl3 as catalyst to add alkyl or acyl groups",
        backAr: "استبدال إلكتروفيلي على الحلقات الأروماتية باستخدام AlCl3 كمحفز لإضافة مجموعات ألكيل أو أسيل",
        category: "Reactions"
    },
    {
        id: 7,
        frontEn: "Benzene (C6H6)",
        frontAr: "بنزين (C6H6)",
        backEn: "The simplest aromatic hydrocarbon with a planar hexagonal ring and alternating double bonds",
        backAr: "أبسط هيدروكربون أروماتي مع حلقة سداسية مستوية وروابط مزدوجة متناوبة",
        category: "Compounds"
    },
    {
        id: 8,
        frontEn: "Aliphatic vs Aromatic",
        frontAr: "أليفاتي مقابل أروماتي",
        backEn: "Aliphatic: open chain or non-aromatic cyclic. Aromatic: planar cyclic with conjugated π system",
        backAr: "أليفاتي: سلسلة مفتوحة أو حلقي غير أروماتي. أروماتي: حلقي مستوي مع نظام π مترافق",
        category: "Classification"
    },
    {
        id: 9,
        frontEn: "Electrophile",
        frontAr: "إلكتروفيل",
        backEn: "An electron-seeking species with positive charge or partial positive charge (E+)",
        backAr: "نوع يبحث عن الإلكترونات مع شحنة موجبة أو شحنة موجبة جزئية (E+)",
        category: "Reaction Mechanisms"
    },
    {
        id: 10,
        frontEn: "Benzoic Acid",
        frontAr: "حمض البنزويك",
        backEn: "Aromatic carboxylic acid: C6H5-COOH (benzene ring with -COOH group)",
        backAr: "حمض كربوكسيلي أروماتي: C6H5-COOH (حلقة بنزين مع مجموعة -COOH)",
        category: "Compounds"
    },
    {
        id: 11,
        frontEn: "Alkane → Alkyl",
        frontAr: "ألكان ← ألكيل",
        backEn: "Remove -H from alkane name and add -yl. Example: Methane → Methyl, Ethane → Ethyl",
        backAr: "أزل -H من اسم الألكان وأضف -yl. مثال: ميثان ← ميثيل، إيثان ← إيثيل",
        category: "Nomenclature"
    },
    {
        id: 12,
        frontEn: "Conjugated System",
        frontAr: "نظام مترافق",
        backEn: "Alternating single and double bonds allowing π electron delocalization",
        backAr: "روابط فردية ومزدوجة متناوبة تسمح بإزاحة إلكترونات π",
        category: "Bonding"
    },
    {
        id: 13,
        frontEn: "Acetylene (C2H2)",
        frontAr: "أسيتيلين (C2H2)",
        backEn: "Simplest alkyne with triple bond: HC≡CH. Can polymerize to form benzene",
        backAr: "أبسط ألكاين برابطة ثلاثية: HC≡CH. يمكن أن يتبلمر ليشكل البنزين",
        category: "Compounds"
    },
    {
        id: 14,
        frontEn: "Monocarboxylic Acid",
        frontAr: "حمض أحادي الكربوكسيل",
        backEn: "Carboxylic acid with one -COOH group. Example: Acetic acid (CH3COOH)",
        backAr: "حمض كربوكسيلي مع مجموعة -COOH واحدة. مثال: حمض الخليك (CH3COOH)",
        category: "Classification"
    },
    {
        id: 15,
        frontEn: "Lewis Acid",
        frontAr: "حمض لويس",
        backEn: "Electron pair acceptor. Example: AlCl3 in Friedel-Crafts reactions",
        backAr: "متقبل لزوج الإلكترونات. مثال: AlCl3 في تفاعلات فريدل-كرافتس",
        category: "Acid-Base"
    },
    {
        id: 16,
        frontEn: "sp2 Hybridization",
        frontAr: "تهجين sp2",
        backEn: "Carbon forms 3 sp2 orbitals (120° angles) and 1 p orbital. Found in benzene and alkenes",
        backAr: "يشكل الكربون 3 مدارات sp2 (زوايا 120°) ومدار p واحد. موجود في البنزين والألكينات",
        category: "Bonding"
    },
    {
        id: 17,
        frontEn: "Dicarboxylic Acid",
        frontAr: "حمض ثنائي الكربوكسيل",
        backEn: "Contains two -COOH groups. Example: Oxalic acid (HOOC-COOH)",
        backAr: "يحتوي على مجموعتي -COOH. مثال: حمض الأكساليك (HOOC-COOH)",
        category: "Classification"
    },
    {
        id: 18,
        frontEn: "Resonance",
        frontAr: "رنين",
        backEn: "Delocalization of electrons across multiple atoms, providing extra stability",
        backAr: "إزاحة الإلكترونات عبر ذرات متعددة، مما يوفر استقراراً إضافياً",
        category: "Bonding"
    },
    {
        id: 19,
        frontEn: "Nucleophile",
        frontAr: "نووي",
        backEn: "Electron-rich species that donates electrons. Opposite of electrophile",
        backAr: "نوع غني بالإلكترونات يتبرع بالإلكترونات. عكس الإلكتروفيل",
        category: "Reaction Mechanisms"
    },
    {
        id: 20,
        frontEn: "Acetic Acid",
        frontAr: "حمض الخليك",
        backEn: "CH3COOH - Simplest monocarboxylic acid after formic acid. Found in vinegar",
        backAr: "CH3COOH - أبسط حمض كربوكسيلي أحادي بعد حمض الفورميك. موجود في الخل",
        category: "Compounds"
    }
];

let currentLanguage = 'en';
let currentMode = 'home';
let currentQuestionIndex = 0;
let currentFlashcardIndex = 0;
let correctAnswers = 0;
let selectedAnswer = null;

const translations = {
    en: {
        headerTitle: 'Organic Chemistry Quiz',
        homeTitle: 'Master Organic Chemistry',
        homeSubtitle: 'Study carboxylic acids, aromatic compounds, and more with interactive quizzes and flashcards',
        quizCardTitle: 'Take Quiz',
        quizCardDesc: 'Test your knowledge with 25 questions covering all topics',
        startQuizBtn: 'Start Quiz',
        flashcardTitle: 'Flashcards',
        flashcardDesc: 'Review key concepts and definitions at your own pace',
        studyNowBtn: 'Study Now',
        topicsTitle: 'Topics Covered',
        footerText: "Based on Dr. Enayat's Organic Chemistry Lectures • Study Smart, Succeed!",
        langBtn: 'عربي',
        question: 'Question',
        explanation: 'Explanation:',
        nextQuestion: 'Next Question',
        viewResults: 'View Results',
        previous: 'Previous',
        next: 'Next',
        card: 'Card',
        term: 'Term',
        definition: 'Definition',
        clickToFlip: 'Click to flip',
        clickToFlipBack: 'Click to flip back',
        quizComplete: 'Quiz Complete!',
        score: 'Score',
        correct: 'Correct',
        total: 'Total',
        restartQuiz: 'Restart Quiz',
        studyFlashcards: 'Study Flashcards'
    },
    ar: {
        headerTitle: 'اختبار الكيمياء العضوية',
        homeTitle: 'أتقن الكيمياء العضوية',
        homeSubtitle: 'ادرس الأحماض الكربوكسيلية والمركبات الأروماتية والمزيد مع الاختبارات والبطاقات التفاعلية',
        quizCardTitle: 'ابدأ الاختبار',
        quizCardDesc: 'اختبر معلوماتك مع 25 سؤالاً تغطي جميع المواضيع',
        startQuizBtn: 'ابدأ الآن',
        flashcardTitle: 'البطاقات التعليمية',
        flashcardDesc: 'راجع المفاهيم والتعريفات الأساسية بوتيرتك الخاصة',
        studyNowBtn: 'ادرس الآن',
        topicsTitle: 'المواضيع المشمولة',
        footerText: 'مبني على محاضرات د. عنايات للكيمياء العضوية • ادرس بذكاء، انجح!',
        langBtn: 'English',
        question: 'سؤال',
        explanation: 'الشرح:',
        nextQuestion: 'السؤال التالي',
        viewResults: 'عرض النتائج',
        previous: 'السابق',
        next: 'التالي',
        card: 'بطاقة',
        term: 'المصطلح',
        definition: 'التعريف',
        clickToFlip: 'اضغط للقلب',
        clickToFlipBack: 'اضغط للرجوع',
        quizComplete: '!اكتمل الاختبار',
        score: 'النتيجة',
        correct: 'صحيح',
        total: 'المجموع',
        restartQuiz: 'إعادة الاختبار',
        studyFlashcards: 'دراسة البطاقات'
    }
};

function translate(key) {
    return translations[currentLanguage][key];
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    document.getElementById('langBtn').textContent = translate('langBtn');
    updateTranslations();
    
    if (currentMode === 'home') {
        showHome();
    } else if (currentMode === 'quiz') {
        renderQuiz();
    } else if (currentMode === 'flashcards') {
        renderFlashcard();
    } else if (currentMode === 'results') {
        renderResults();
    }
}

function updateTranslations() {
    document.getElementById('headerTitle').textContent = translate('headerTitle');
    document.getElementById('homeTitle').textContent = translate('homeTitle');
    document.getElementById('homeSubtitle').textContent = translate('homeSubtitle');
    document.getElementById('quizCardTitle').textContent = translate('quizCardTitle');
    document.getElementById('quizCardDesc').textContent = translate('quizCardDesc');
    document.getElementById('startQuizBtn').textContent = translate('startQuizBtn');
    document.getElementById('flashcardTitle').textContent = translate('flashcardTitle');
    document.getElementById('flashcardDesc').textContent = translate('flashcardDesc');
    document.getElementById('studyNowBtn').textContent = translate('studyNowBtn');
    document.getElementById('topicsTitle').textContent = translate('topicsTitle');
    document.getElementById('footerText').textContent = translate('footerText');
    
    const topics = currentLanguage === 'en' 
        ? ['Carboxylic Acids', 'Aromatic Compounds', 'Aliphatic Compounds', 'Reactions']
        : ['الأحماض الكربوكسيلية', 'المركبات الأروماتية', 'المركبات الأليفاتية', 'التفاعلات'];
    
    const topicsList = document.getElementById('topicsList');
    topicsList.innerHTML = topics.map(topic => 
        `<div class="p-3 rounded-lg bg-white text-sm font-medium text-gray-700">${topic}</div>`
    ).join('');
}

function showHome() {
    currentMode = 'home';
    document.getElementById('homeScreen').classList.remove('hidden');
    document.getElementById('quizScreen').classList.add('hidden');
    document.getElementById('flashcardScreen').classList.add('hidden');
    document.getElementById('resultsScreen').classList.add('hidden');
}

function startQuiz() {
    currentMode = 'quiz';
    currentQuestionIndex = 0;
    correctAnswers = 0;
    selectedAnswer = null;
    document.getElementById('homeScreen').classList.add('hidden');
    document.getElementById('quizScreen').classList.remove('hidden');
    document.getElementById('flashcardScreen').classList.add('hidden');
    document.getElementById('resultsScreen').classList.add('hidden');
    renderQuiz();
}

function startFlashcards() {
    currentMode = 'flashcards';
    currentFlashcardIndex = 0;
    document.getElementById('homeScreen').classList.add('hidden');
    document.getElementById('quizScreen').classList.add('hidden');
    document.getElementById('flashcardScreen').classList.remove('hidden');
    document.getElementById('resultsScreen').classList.add('hidden');
    renderFlashcard();
}

function showResults() {
    currentMode = 'results';
    document.getElementById('homeScreen').classList.add('hidden');
    document.getElementById('quizScreen').classList.add('hidden');
    document.getElementById('flashcardScreen').classList.add('hidden');
    document.getElementById('resultsScreen').classList.remove('hidden');
    renderResults();
}

function renderQuiz() {
    const question = questions[currentQuestionIndex];
    const lang = currentLanguage;
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    const quizHTML = `
        <div class="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <div class="mb-6">
                <div class="flex justify-between items-center mb-4">
                    <span class="text-sm font-medium text-gray-600">
                        ${translate('question')} ${currentQuestionIndex + 1} / ${questions.length}
                    </span>
                    <span class="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        ${question.category}
                    </span>
                </div>
                <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-6" dir="${dir}">
                    ${lang === 'en' ? question.questionEn : question.questionAr}
                </h2>
            </div>
            
            <div class="space-y-3 mb-6">
                ${question.options[lang].map((option, index) => `
                    <button onclick="selectAnswer(${index})" 
                        class="w-full p-4 rounded-xl text-left transition-all duration-200 font-medium
                        ${selectedAnswer === null ? 'bg-secondary hover:bg-gray-200 hover:shadow-sm text-gray-800' : 
                        selectedAnswer === index ? 
                            (index === question.correctAnswer ? 'bg-green-500 text-white shadow-lg' : 'bg-red-500 text-white shadow-lg') :
                            (index === question.correctAnswer ? 'bg-green-100 text-green-800 border-2 border-green-500' : 'bg-gray-100 text-gray-500 opacity-60')
                        }
                        ${selectedAnswer !== null ? 'cursor-not-allowed' : ''}"
                        ${selectedAnswer !== null ? 'disabled' : ''}
                        dir="${dir}">
                        <div class="flex items-center gap-3">
                            ${selectedAnswer !== null && index === question.correctAnswer ? 
                                '<svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>' : ''
                            }
                            ${selectedAnswer === index && index !== question.correctAnswer ? 
                                '<svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>' : ''
                            }
                            <span>${option}</span>
                        </div>
                    </button>
                `).join('')}
            </div>
            
            ${selectedAnswer !== null ? `
                <div class="p-4 rounded-xl mb-6 ${selectedAnswer === question.correctAnswer ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}" dir="${dir}">
                    <p class="text-sm font-medium mb-1 text-gray-800">${translate('explanation')}</p>
                    <p class="text-sm text-gray-700">
                        ${lang === 'en' ? question.explanation.en : question.explanation.ar}
                    </p>
                </div>
                
                <button onclick="nextQuestion()" class="w-full gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center gap-2">
                    ${currentQuestionIndex === questions.length - 1 ? translate('viewResults') : translate('nextQuestion')}
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            ` : ''}
        </div>
    `;
    
    document.getElementById('quizScreen').innerHTML = quizHTML;
}

function selectAnswer(index) {
    if (selectedAnswer !== null) return;
    
    selectedAnswer = index;
    const question = questions[currentQuestionIndex];
    if (index === question.correctAnswer) {
        correctAnswers++;
    }
    renderQuiz();
}

function nextQuestion() {
    selectedAnswer = null;
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuiz();
    } else {
        showResults();
    }
}

function renderFlashcard() {
    const flashcard = flashcards[currentFlashcardIndex];
    const lang = currentLanguage;
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    const flashcardHTML = `
        <div class="space-y-6">
            <div class="flex justify-between items-center px-2">
                <span class="text-sm font-medium text-gray-600">
                    ${translate('card')} ${currentFlashcardIndex + 1} / ${flashcards.length}
                </span>
                <span class="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent font-medium">
                    ${flashcard.category}
                </span>
            </div>
            
            <div class="flip-card h-80 cursor-pointer" onclick="flipCard()">
                <div class="flip-card-inner relative w-full h-full">
                    <div class="flip-card-front absolute inset-0 flex flex-col items-center justify-center p-8 bg-white rounded-2xl border-2 border-gray-200 shadow-lg">
                        <div class="text-center" dir="${dir}">
                            <p class="text-sm text-gray-500 mb-3">${translate('term')}</p>
                            <h3 class="text-3xl font-bold text-gray-800 mb-4">
                                ${lang === 'en' ? flashcard.frontEn : flashcard.frontAr}
                            </h3>
                            <p class="text-xl text-gray-600">
                                ${lang === 'en' ? flashcard.frontAr : flashcard.frontEn}
                            </p>
                        </div>
                        <div class="absolute bottom-6 flex items-center gap-2 text-sm text-gray-500">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                            </svg>
                            <span>${translate('clickToFlip')}</span>
                        </div>
                    </div>
                    
                    <div class="flip-card-back absolute inset-0 flex flex-col items-center justify-center p-8 gradient-primary rounded-2xl shadow-lg">
                        <div class="text-center" dir="${dir}">
                            <p class="text-sm text-white/80 mb-3">${translate('definition')}</p>
                            <p class="text-lg text-white leading-relaxed">
                                ${lang === 'en' ? flashcard.backEn : flashcard.backAr}
                            </p>
                        </div>
                        <div class="absolute bottom-6 flex items-center gap-2 text-sm text-white/80">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                            </svg>
                            <span>${translate('clickToFlipBack')}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="flex gap-3">
                <button onclick="previousFlashcard()" ${currentFlashcardIndex === 0 ? 'disabled' : ''}
                    class="flex-1 px-6 py-3 border-2 border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    ${translate('previous')}
                </button>
                <button onclick="nextFlashcard()" ${currentFlashcardIndex === flashcards.length - 1 ? 'disabled' : ''}
                    class="flex-1 gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                    ${translate('next')}
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('flashcardScreen').innerHTML = flashcardHTML;
}

function flipCard() {
    const flipCard = document.querySelector('.flip-card');
    flipCard.classList.toggle('flipped');
}

function nextFlashcard() {
    if (currentFlashcardIndex < flashcards.length - 1) {
        currentFlashcardIndex++;
        renderFlashcard();
    }
}

function previousFlashcard() {
    if (currentFlashcardIndex > 0) {
        currentFlashcardIndex--;
        renderFlashcard();
    }
}

function renderResults() {
    const percentage = Math.round((correctAnswers / questions.length) * 100);
    
    const getMessage = () => {
        if (percentage >= 90) {
            return currentLanguage === 'en' ? "Excellent! Outstanding performance!" : "!ممتاز! أداء رائع";
        } else if (percentage >= 70) {
            return currentLanguage === 'en' ? "Great job! Keep it up!" : "!عمل رائع! استمر";
        } else if (percentage >= 50) {
            return currentLanguage === 'en' ? "Good effort! Review and try again." : ".جهد جيد! راجع وحاول مرة أخرى";
        } else {
            return currentLanguage === 'en' ? "Keep studying! You'll improve!" : "!استمر في الدراسة! ستتحسن";
        }
    };
    
    const resultsHTML = `
        <div class="bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg">
            <div class="mb-8">
                <div class="inline-flex items-center justify-center w-24 h-24 rounded-full gradient-primary mb-6 shadow-lg">
                    <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                </div>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">${translate('quizComplete')}</h2>
                <p class="text-xl text-gray-600 mb-6">${getMessage()}</p>
            </div>
            
            <div class="bg-gray-50 rounded-2xl p-8 mb-8">
                <div class="grid grid-cols-3 gap-6">
                    <div>
                        <p class="text-sm text-gray-600 mb-2">${translate('score')}</p>
                        <p class="text-4xl font-bold text-primary">${percentage}%</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-600 mb-2">${translate('correct')}</p>
                        <p class="text-4xl font-bold text-green-600">${correctAnswers}</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-600 mb-2">${translate('total')}</p>
                        <p class="text-4xl font-bold text-gray-800">${questions.length}</p>
                    </div>
                </div>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4">
                <button onclick="startQuiz()" class="flex-1 gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                    ${translate('restartQuiz')}
                </button>
                <button onclick="startFlashcards()" class="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                    ${translate('studyFlashcards')}
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('resultsScreen').innerHTML = resultsHTML;
}

showHome();