
                // 20 serviços confirmados publicados, organizados por categoria.
                // As imagens ficam na pasta "imagem/" (gerais) ou "imagem 2/" (fotos institucionais), conforme o arquivo.
                // Estas 4 fotos específicas foram salvas na pasta "imagem 2/" (as demais ficam em "imagem/"):
                const svcFilesInImagem2 = [
                    "planejamento-patrimonial-familiar-barbosa.jpeg",
                    "holding-familiar-planejamento-sucessorio-barbosa.jpeg",
                    "recuperacao-de-creditos-tributarios-barbosa.jpeg",
                    "regularizacao-fiscal-parcelamento-tributos-barbosa.jpeg"
                ];
                const STOCK_IMG_MAP = {"segmento-01-prestadores-servicos-barbosa.jpeg": "images/img004.webp", "segmento-02-comercio-barbosa.jpeg": "images/img005.webp", "segmento-03-industria-barbosa.jpeg": "images/img006.webp", "segmento-04-profissionais-liberais-barbosa.jpeg": "images/img007.webp", "segmento-05-clinicas-consultorios-barbosa.jpeg": "images/img008.webp", "segmento-06-ecommerce-barbosa.jpeg": "images/img009.webp", "video-institucional-barbosa-capa.jpeg": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80", "hero-quem-somos-barbosa-contabilidade.jpeg": "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?auto=format&fit=crop&w=1200&q=80", "quem-somos-nossa-historia-escritorio-barbosa.jpeg": "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=1200&q=80", "escritorio-barbosa-contabilidade-sao-paulo.jpeg": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80", "escritorio-barbosa-foto-01.jpeg": "https://images.unsplash.com/photo-1603201667141-5a2d4c673378?auto=format&fit=crop&w=1200&q=80", "escritorio-barbosa-foto-02.jpeg": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80", "escritorio-barbosa-foto-03.jpeg": "https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?auto=format&fit=crop&w=1200&q=80", "escritorio-barbosa-foto-04.jpeg": "https://images.unsplash.com/photo-1690378820474-b468b8ee64d3?auto=format&fit=crop&w=1200&q=80", "hero-servicos-contabeis-barbosa.jpeg": "https://images.unsplash.com/photo-1707157284454-553ef0a4ed0d?auto=format&fit=crop&w=1200&q=80", "hero-blog-contabilidade-barbosa.jpeg": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80", "abertura-de-empresa-contabilidade-barbosa.jpeg": "images/img016.webp", "contabilidade-fiscal-barbosa.jpeg": "images/img017.webp", "departamento-pessoal-folha-de-pagamento-barbosa.jpeg": "images/img018.webp", "declaracao-imposto-de-renda-pessoa-fisica-barbosa.jpeg": "images/img019.webp", "consultoria-tributaria-empresarial-barbosa.jpeg": "images/img020.webp", "bpo-financeiro-gestao-de-caixa-barbosa.jpeg": "images/img021.webp", "planejamento-patrimonial-familiar-barbosa.jpeg": "images/img022.webp", "contabilidade-gerencial-relatorios-barbosa.jpeg": "images/img023.webp", "holding-familiar-planejamento-sucessorio-barbosa.jpeg": "images/img024.webp", "contabilidade-mei-autonomos-barbosa.jpeg": "images/img025.webp", "recuperacao-de-creditos-tributarios-barbosa.jpeg": "images/img026.webp", "regularizacao-fiscal-parcelamento-tributos-barbosa.jpeg": "images/img027.webp", "certificado-digital-e-cnpj-e-cpf-barbosa.jpeg": "images/img028.webp", "assessoria-societaria-contrato-social-barbosa.jpeg": "images/img029.webp", "apoio-credito-financiamento-empresarial-barbosa.jpeg": "images/img030.webp", "contabilidade-comercio-exterior-importacao-exportacao-barbosa.jpeg": "images/img031.webp", "contabilidade-terceiro-setor-ongs-barbosa.jpeg": "images/img032.webp", "auditoria-pericia-contabil-barbosa.jpeg": "images/img033.webp", "contabilidade-digital-integracao-erp-barbosa.jpeg": "images/img034.webp", "esp-contabilidade-prestadores-servicos-barbosa.jpeg": "images/img035.webp", "esp-contabilidade-comercio-barbosa.jpeg": "images/img036.webp", "esp-contabilidade-industria-barbosa.jpeg": "images/img037.webp", "esp-contabilidade-profissionais-liberais-barbosa.jpeg": "images/img038.webp", "esp-contabilidade-clinicas-consultorios-barbosa.jpeg": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80", "esp-contabilidade-ecommerce-barbosa.jpeg": "images/img039.webp", "esp-abertura-de-empresa-facilitada-barbosa.jpeg": "images/img040.webp", "esp-consultoria-reforma-tributaria-barbosa.jpeg": "images/img041.webp", "blog-ibs-e-cbs-reforma-tributaria-barbosa.jpeg": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80", "blog-como-escolher-regime-tributario-barbosa.jpeg": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80", "blog-fator-r-prestadores-servicos-barbosa.jpeg": "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&w=1200&q=80", "blog-controle-estoque-comercio-barbosa.jpeg": "https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?auto=format&fit=crop&w=1200&q=80", "blog-bpo-financeiro-controle-empresarial-barbosa.jpeg": "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&w=1200&q=80", "blog-abertura-de-empresa-analise-barbosa.jpeg": "https://images.unsplash.com/photo-1590649613897-1d5c44ca3409?auto=format&fit=crop&w=1200&q=80", "blog-contabilidade-ecommerce-cuidados-fiscais-barbosa.jpeg": "https://images.unsplash.com/photo-1665686377065-08ba896d16fd?auto=format&fit=crop&w=1200&q=80", "blog-recuperacao-creditos-tributarios-barbosa.jpeg": "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80", "blog-contabilidade-gerencial-decisoes-barbosa.jpeg": "https://images.unsplash.com/photo-1707157284454-553ef0a4ed0d?auto=format&fit=crop&w=1200&q=80", "blog-reforma-tributaria-2027-barbosa.jpeg": "https://images.unsplash.com/photo-1690378820474-b468b8ee64d3?auto=format&fit=crop&w=1200&q=80", "blog-simples-nacional-anexos-barbosa.jpeg": "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80", "blog-lucro-presumido-lucro-real-barbosa.jpeg": "https://images.unsplash.com/photo-1707902665498-a202981fb5ac?auto=format&fit=crop&w=1200&q=80", "blog-creditos-pis-cofins-barbosa.jpeg": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80", "blog-cnae-incorreto-riscos-barbosa.jpeg": "https://images.unsplash.com/photo-1484863137850-59afcfe05386?auto=format&fit=crop&w=1200&q=80", "blog-mudanca-regime-tributario-barbosa.jpeg": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80", "blog-esocial-folha-digital-barbosa.jpeg": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80", "blog-holding-familiar-barbosa.jpeg": "https://images.unsplash.com/photo-1681505531034-8d67054e07f6?auto=format&fit=crop&w=1200&q=80", "blog-split-payment-reforma-tributaria-barbosa.jpeg": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80", "blog-planejamento-tributario-pequenas-empresas-barbosa.jpeg": "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?auto=format&fit=crop&w=1200&q=80", "blog-contabilidade-para-startups-barbosa.jpeg": "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80", "dor-01-atendimento-pouco-estrategico-barbosa.jpeg": "images/img042.webp", "dor-02-comunicacao-lenta-barbosa.jpeg": "images/img043.webp", "dor-03-ausencia-acompanhamento-barbosa.jpeg": "images2/img044.webp", "dor-04-falta-indicadores-gestao-barbosa.jpeg": "images2/img045.webp", "dor-05-consultoria-generica-barbosa.jpeg": "images2/img046.webp", "dor-06-antecipacao-problemas-barbosa.jpeg": "images2/img047.webp", "dor-07-suporte-decisoes-estrategicas-barbosa.jpeg": "https://images.unsplash.com/photo-1672380135241-c024f7fbfa13?auto=format&fit=crop&w=1200&q=80", "dificuldade-01-impostos-elevados-barbosa.jpeg": "images2/img048.webp", "dificuldade-02-enquadramento-tributario-barbosa.jpeg": "images2/img049.webp", "dificuldade-03-controle-financeiro-barbosa.jpeg": "images2/img050.webp", "dificuldade-04-fluxo-de-caixa-barbosa.jpeg": "images2/img051.webp", "dificuldade-05-processos-fiscais-barbosa.jpeg": "images2/img052.webp", "dificuldade-06-controle-estoque-barbosa.jpeg": "images2/img053.webp", "dificuldade-07-custos-trabalhistas-barbosa.jpeg": "images2/img054.webp", "dificuldade-08-relatorios-gerenciais-barbosa.jpeg": "images2/img055.webp", "dificuldade-09-pendencias-societarias-barbosa.jpeg": "images2/img056.webp", "dificuldade-10-reforma-tributaria-barbosa.jpeg": "images2/img057.webp", "slide-01-contabilidade-comercio-barbosa.jpeg": "images2/img058.webp", "slide-02-contabilidade-industria-barbosa.jpeg": "images2/img059.webp", "slide-03-contabilidade-prestadores-servicos-barbosa.jpeg": "images2/img060.webp", "slide-04-controle-de-estoque-barbosa.jpeg": "images2/img061.webp", "slide-05-processos-fiscais-avancados-barbosa.jpeg": "images2/img062.webp", "slide-06-fator-r-enquadramento-barbosa.jpeg": "images2/img063.webp", "slide-07-reforma-tributaria-ibs-cbs-barbosa.jpeg": "images2/img064.webp", "slide-08-abertura-de-empresas-barbosa.jpeg": "images2/img065.webp"};
                function svcImgFolder(file) {
                    return svcFilesInImagem2.indexOf(file) !== -1 ? "imagem 2/" : "imagem/";
                }
                const svcServices = [
    {
        "id": "abertura",
        "cat": "empresarial",
        "catLabel": "Empresarial",
        "title": "Abertura de Empresas",
        "desc": "Da escolha das atividades aos registros necessários, acompanhamos a abertura do CNPJ para que a empresa comece com documentos, enquadramento e primeiras obrigações bem definidos.",
        "img": "Empresário analisando documentos",
        "file": "abertura-de-empresa-contabilidade-barbosa.jpeg"
    },
    {
        "id": "contabilidade-fiscal",
        "cat": "fiscal-tributario",
        "catLabel": "Fiscal e Tributário",
        "title": "Contabilidade Fiscal",
        "desc": "Conferimos documentos, apuramos tributos e acompanhamos os prazos fiscais para manter a empresa regular e evitar que pendências se acumulem.",
        "img": "Documentos fiscais e análise financeira",
        "file": "contabilidade-fiscal-barbosa.jpeg"
    },
    {
        "id": "dp",
        "cat": "departamento-pessoal",
        "catLabel": "Departamento Pessoal",
        "title": "Departamento Pessoal",
        "desc": "Cuidamos de admissões, folha, férias, afastamentos, rescisões e eSocial, com organização das informações trabalhistas e atenção aos prazos.",
        "img": "Gestão de colaboradores",
        "file": "departamento-pessoal-folha-de-pagamento-barbosa.jpeg"
    },
    {
        "id": "irpf",
        "cat": "fiscal-tributario",
        "catLabel": "Fiscal e Tributário",
        "title": "Imposto de Renda Pessoa Física",
        "desc": "Organizamos rendimentos, bens, investimentos e demais informações da declaração, apontando o que precisa ser comprovado antes do envio.",
        "img": "Declaração e organização financeira",
        "file": "declaracao-imposto-de-renda-pessoa-fisica-barbosa.jpeg"
    },
    {
        "id": "consultoria-tributaria",
        "cat": "fiscal-tributario",
        "catLabel": "Fiscal e Tributário",
        "title": "Consultoria Tributária",
        "desc": "Revisamos atividade, faturamento e estrutura da empresa para explicar como ela está sendo tributada e quais pontos merecem uma análise mais cuidadosa.",
        "img": "Reunião estratégica",
        "file": "consultoria-tributaria-empresarial-barbosa.jpeg"
    },
    {
        "id": "bpo-financeiro",
        "cat": "financeiro-gestao",
        "catLabel": "Financeiro e Gestão",
        "title": "BPO Financeiro",
        "desc": "Apoiamos a rotina de contas a pagar, contas a receber, conciliações e controles de caixa para que o financeiro deixe de depender de planilhas soltas e memória.",
        "img": "Acompanhamento de fluxo de caixa",
        "file": "bpo-financeiro-gestao-de-caixa-barbosa.jpeg"
    },
    {
        "id": "planejamento-patrimonial",
        "cat": "patrimonial",
        "catLabel": "Patrimonial",
        "title": "Planejamento Patrimonial",
        "desc": "Ajudamos a organizar informações sobre bens e objetivos familiares, criando uma base mais clara para discutir proteção patrimonial e sucessão com os profissionais envolvidos.",
        "img": "Planejamento familiar e patrimonial",
        "file": "planejamento-patrimonial-familiar-barbosa.jpeg"
    },
    {
        "id": "contabilidade-gerencial",
        "cat": "financeiro-gestao",
        "catLabel": "Financeiro e Gestão",
        "title": "Contabilidade Gerencial",
        "desc": "Organizamos os dados contábeis em relatórios de resultado e indicadores simples, para que o empresário consiga comparar períodos e entender melhor o desempenho do negócio.",
        "img": "Gráficos e indicadores",
        "file": "contabilidade-gerencial-relatorios-barbosa.jpeg"
    },
    {
        "id": "holding-familiar",
        "cat": "patrimonial",
        "catLabel": "Patrimonial",
        "title": "Holding Familiar",
        "desc": "Apoiamos a análise contábil e documental de estruturas familiares voltadas à organização de bens e sucessão, respeitando a necessidade de avaliação jurídica quando aplicável.",
        "img": "Organização patrimonial familiar",
        "file": "holding-familiar-planejamento-sucessorio-barbosa.jpeg"
    },
    {
        "id": "mei",
        "cat": "mei-autonomos",
        "catLabel": "MEI e Autônomos",
        "title": "MEI e Autônomos",
        "desc": "Orientamos MEIs e autônomos sobre declarações, regularizações, limites e mudanças de enquadramento, de acordo com a fase da atividade.",
        "img": "Pequeno empreendedor trabalhando",
        "file": "contabilidade-mei-autonomos-barbosa.jpeg"
    },
    {
        "id": "recuperacao-creditos",
        "cat": "fiscal-tributario",
        "catLabel": "Fiscal e Tributário",
        "title": "Recuperação de Créditos Tributários",
        "desc": "Revisamos recolhimentos e informações fiscais para identificar valores que possam ter sido pagos indevidamente ou a maior, sempre conforme a legislação e a documentação disponível.",
        "img": "Análise de créditos tributários",
        "file": "recuperacao-de-creditos-tributarios-barbosa.jpeg"
    },
    {
        "id": "regularizacao-fiscal",
        "cat": "fiscal-tributario",
        "catLabel": "Fiscal e Tributário",
        "title": "Regularização Fiscal e Parcelamento",
        "desc": "Levantamos pendências e débitos, explicamos as opções disponíveis e acompanhamos os procedimentos de regularização e parcelamento quando aplicáveis.",
        "img": "Negociação de débitos tributários",
        "file": "regularizacao-fiscal-parcelamento-tributos-barbosa.jpeg"
    },
    {
        "id": "certificado-digital",
        "cat": "tecnologia-compliance",
        "catLabel": "Tecnologia e Compliance",
        "title": "Certificado Digital",
        "desc": "Orientamos a emissão ou renovação do e-CNPJ e e-CPF usados em sistemas oficiais, assinaturas eletrônicas e rotinas da empresa.",
        "img": "Emissão de certificado digital",
        "file": "certificado-digital-e-cnpj-e-cpf-barbosa.jpeg"
    },
    {
        "id": "assessoria-societaria",
        "cat": "empresarial",
        "catLabel": "Empresarial",
        "title": "Assessoria Societária",
        "desc": "Acompanhamos alterações contratuais, entrada ou saída de sócios e atualizações cadastrais para manter os registros da empresa coerentes com a realidade atual.",
        "img": "Reunião de sócios",
        "file": "assessoria-societaria-contrato-social-barbosa.jpeg"
    },
    {
        "id": "apoio-credito",
        "cat": "financeiro-gestao",
        "catLabel": "Financeiro e Gestão",
        "title": "Apoio a Crédito e Financiamento",
        "desc": "Organizamos balanços, demonstrações e informações contábeis que podem ser solicitadas por bancos e instituições em análises de crédito ou financiamento.",
        "img": "Análise de crédito e financiamento",
        "file": "apoio-credito-financiamento-empresarial-barbosa.jpeg"
    },
    {
        "id": "comercio-exterior",
        "cat": "segmentos-especiais",
        "catLabel": "Segmentos Especiais",
        "title": "Comércio Exterior",
        "desc": "Acompanhamos as rotinas contábeis de empresas com importação ou exportação, observando os documentos e reflexos fiscais das operações.",
        "img": "Operações de importação e exportação",
        "file": "contabilidade-comercio-exterior-importacao-exportacao-barbosa.jpeg"
    },
    {
        "id": "terceiro-setor",
        "cat": "segmentos-especiais",
        "catLabel": "Segmentos Especiais",
        "title": "Terceiro Setor",
        "desc": "Atendemos associações e entidades sem fins lucrativos com escrituração, obrigações e organização das informações usadas em prestações de contas.",
        "img": "Gestão contábil para entidades sem fins lucrativos",
        "file": "contabilidade-terceiro-setor-ongs-barbosa.jpeg"
    },
    {
        "id": "auditoria-pericia",
        "cat": "tecnologia-compliance",
        "catLabel": "Tecnologia e Compliance",
        "title": "Auditoria e Perícia Contábil",
        "desc": "Realizamos revisões e análises técnicas de informações contábeis e apoiamos a elaboração de relatórios ou trabalhos periciais conforme o escopo contratado.",
        "img": "Revisão técnica de demonstrações contábeis",
        "file": "auditoria-pericia-contabil-barbosa.jpeg"
    },
    {
        "id": "contabilidade-digital-erp",
        "cat": "tecnologia-compliance",
        "catLabel": "Tecnologia e Compliance",
        "title": "Contabilidade Digital e Integração ERP",
        "desc": "Ajudamos a organizar a troca de informações entre sistema de gestão, emissão de notas e contabilidade, reduzindo retrabalho e divergências de dados.",
        "img": "Integração de sistemas contábeis e ERP",
        "file": "contabilidade-digital-integracao-erp-barbosa.jpeg"
    }
];

                // Se a imagem não for encontrada na pasta "imagem/", volta para o placeholder com ícone.
                function svcImgFallback(imgEl) {
                    const label = imgEl.getAttribute('data-label') || '';
                    const parent = imgEl.parentElement;
                    if (!parent) return;
                    parent.innerHTML = '<i class="fa-solid fa-image" style="font-size:30px;"></i><span style="font-size:10px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; padding:0 16px; text-align:center;">' + label + '</span>';
                }

                function svcRender(catKey) {
                    const grid = document.getElementById('svcGrid');
                    if (!grid) return;
                    const list = catKey === 'todos' ? svcServices : svcServices.filter(s => s.cat === catKey);
                    grid.innerHTML = list.map(function(s) {
                        const waText = encodeURIComponent('Olá, gostaria de solicitar informações sobre o serviço de ' + s.title + '.');
                        return '' +
                            '<div class="svc-card">' +
                                '<div class="svc-card-img"><img src="' + (STOCK_IMG_MAP[s.file] || (svcImgFolder(s.file) + s.file)) + '" alt="' + s.title + ' | KM Consultoria" loading="lazy" data-label="' + s.img + '" onerror="svcImgFallback(this)"></div>' +
                                '<div class="svc-card-body">' +
                                    '<span class="svc-card-cat">' + s.catLabel + '</span>' +
                                    '<h3 class="svc-card-title">' + s.title + '</h3>' +
                                    '<p class="svc-card-desc">' + s.desc + '</p>' +
                                    '<a class="svc-card-btn" href="https://wa.me/5516974058132?text=' + waText + '" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp"></i> Falar sobre este serviço</a>' +
                                '</div>' +
                            '</div>';
                    }).join('');
                }

                function svcFilter(catKey) {
                    document.querySelectorAll('.svc-cat-btn').forEach(function(btn) {
                        btn.classList.toggle('svc-cat-active', btn.dataset.svcCat === catKey);
                    });
                    svcRender(catKey);
                }

                svcRender('todos');
            