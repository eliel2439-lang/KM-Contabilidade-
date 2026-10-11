
        // Title / meta description por página (SEO básico para a SPA)
        const pageSeo = {
            'inicio': { title: 'Contabilidade em Brodowski para Empresas | KM Consultoria', desc: 'Contabilidade próxima em Brodowski para empresas e empreendedores, com apoio fiscal, financeiro e orientação clara para a rotina do negócio.' },
            'quem-somos': { title: 'Quem Somos | KM Consultoria', desc: 'Conheça a trajetória, a missão, a visão e os valores da KM Consultoria.' },
            'servicos': { title: 'Serviços Contábeis e Empresariais | KM Consultoria', desc: 'Conheça os serviços da KM Consultoria para abertura de empresas, fiscal, departamento pessoal, gestão financeira, patrimônio e regularizações.' },
            'blog': { title: 'Blog KM Consultoria | Contabilidade explicada de forma prática', desc: 'Conteúdos sobre impostos, gestão, finanças, Reforma Tributária e rotina empresarial em uma linguagem direta para quem empreende.' },
            'legal-privacidade': { title: 'Política de Privacidade | KM Consultoria', desc: 'Saiba como a KM Consultoria coleta, utiliza, armazena e protege os dados pessoais de usuários, clientes e visitantes do site.' },
            'legal-cookies': { title: 'Política de Cookies | KM Consultoria', desc: 'Entenda como a KM Consultoria utiliza cookies e como você pode gerenciar suas preferências de navegação.' },
            'legal-termos': { title: 'Termos e Condições | KM Consultoria', desc: 'Consulte as condições aplicáveis ao acesso e à utilização do site da KM Consultoria.' },
            'contato': { title: 'Fale com a KM Consultoria | WhatsApp, telefone e endereço', desc: 'Entre em contato com a KM Consultoria para tirar dúvidas, pedir informações, abrir empresa ou conversar sobre a contabilidade do seu negócio.' }
        };

        function espMobileToggle() {
            const panel = document.getElementById('espMobilePanel');
            const chevron = document.getElementById('espMobileChevron');
            if (!panel) return;
            panel.classList.toggle('hidden');
            if (chevron) chevron.style.transform = panel.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
        }

        // --- 0. PAGE ROUTER (single HTML, multiple internal "pages") ---
        function updateHeaderScrollState() {
            const header = document.querySelector('header');
            if (!header) return;
            if (window.scrollY > 30) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        }

        function navigateTo(pageId, anchorId = null) {
            const pages = document.querySelectorAll('.page-content');
            pages.forEach(p => {
                if (p.id === pageId) {
                    p.classList.add('active');
                } else {
                    p.classList.remove('active');
                }
            });

            document.body.classList.toggle('page-servicos-active', pageId === 'servicos');
            document.body.classList.toggle('page-quemsomos-active', pageId === 'quem-somos');
            document.body.classList.toggle('page-inicio-active', pageId === 'inicio');
            updateHeaderScrollState();

            const seo = pageSeo[pageId] || (pageId.indexOf('esp-') === 0 && window.espSeo ? window.espSeo[pageId] : null) || (pageId.indexOf('blog-') === 0 && window.blogSeo ? window.blogSeo[pageId] : null);
            if (seo) {
                document.title = seo.title;
                let metaDesc = document.querySelector('meta[name="description"]');
                if (!metaDesc) {
                    metaDesc = document.createElement('meta');
                    metaDesc.setAttribute('name', 'description');
                    document.head.appendChild(metaDesc);
                }
                metaDesc.setAttribute('content', seo.desc);
            }

            // Close mobile menu / accordion if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) mobileMenu.classList.add('hidden');
            const espPanel = document.getElementById('espMobilePanel');
            if (espPanel) espPanel.classList.add('hidden');
            const espChevron = document.getElementById('espMobileChevron');
            if (espChevron) espChevron.style.transform = 'rotate(0deg)';

            if (anchorId) {
                // Wait a tick for the page to become visible, then scroll to the section
                setTimeout(() => {
                    const el = document.getElementById(anchorId);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        // --- 1A. "COMO A BARBOSA PODE AJUDAR SUA EMPRESA" SLIDES DATA ---
        const superarData = [
    {
        "title": "Contabilidade para Comércio",
        "text": "Vendas, compras, estoque e tributos precisam estar alinhados. A KM cuida dessa integração para que o comércio tenha uma visão mais clara da rotina e saiba exatamente onde focar a atenção.",
        "btn": "Entender para meu comércio",
        "wa": "Quero saber mais sobre contabilidade para comércio",
        "img": "slide-01-contabilidade-comercio-barbosa.jpeg",
        "target": "esp-comercio"
    },
    {
        "title": "Contabilidade para Indústria",
        "text": "No ambiente industrial, custos, estoque, produção e obrigações fiscais estão sempre conectados. Acompanhamos esses números de perto para reduzir divergências e trazer mais consistência à operação.",
        "btn": "Falar sobre indústria",
        "wa": "Quero saber mais sobre contabilidade para indústria",
        "img": "slide-02-contabilidade-industria-barbosa.jpeg",
        "target": "esp-industria"
    },
    {
        "title": "Contabilidade para Prestadores de Serviços",
        "text": "Prestar serviços exige atenção constante a notas fiscais, faturamento, folha e tributos, sem perder tempo com as mesmas dúvidas de sempre. A KM mantém essa rotina organizada e sempre explicada com clareza.",
        "btn": "Falar sobre serviços",
        "wa": "Quero saber mais sobre contabilidade para prestadores de serviços",
        "img": "slide-03-contabilidade-prestadores-servicos-barbosa.jpeg",
        "target": "esp-prestadores"
    },
    {
        "title": "Planejamento e Controle de Estoque",
        "text": "Mercadoria parada representa capital imobilizado, e a falta de produto significa venda perdida. Organizamos entradas e saídas para tornar mais simples as compras, conferências e a análise de giro do estoque.",
        "btn": "Quero organizar o estoque",
        "wa": "Quero saber mais sobre planejamento e controle de estoque",
        "img": "slide-04-controle-de-estoque-barbosa.jpeg",
        "target": "servicos"
    },
    {
        "title": "Processos Fiscais Avançados",
        "text": "Documentos, apurações e obrigações fiscais precisam de uma rotina constante de checagem. Revisamos cada etapa do processo para detectar inconsistências antes que virem pendências reais.",
        "btn": "Entender o processo fiscal",
        "wa": "Quero saber mais sobre processos fiscais avançados",
        "img": "slide-05-processos-fiscais-avancados-barbosa.jpeg",
        "target": "servicos"
    },
    {
        "title": "Fator R e Enquadramento Tributário",
        "text": "Folha de pagamento, pró-labore e faturamento impactam diretamente a tributação de certas atividades. Monitoramos esses indicadores para revisar o enquadramento com base na situação real da empresa.",
        "btn": "Revisar meu enquadramento",
        "wa": "Quero fazer uma análise do Fator R da minha empresa",
        "img": "slide-06-fator-r-enquadramento-barbosa.jpeg",
        "target": "servicos"
    },
    {
        "title": "Reforma Tributária, IBS e CBS",
        "text": "As mudanças trazidas pela nova legislação pedem atenção redobrada a cadastros, preços, sistemas e fluxo de caixa. A KM acompanha essa transição e apoia a empresa a se ajustar no momento certo.",
        "btn": "Entender a Reforma",
        "wa": "Quero saber mais sobre a Reforma Tributária, IBS e CBS",
        "img": "slide-07-reforma-tributaria-ibs-cbs-barbosa.jpeg",
        "target": "esp-reforma"
    },
    {
        "title": "Abertura de Empresas",
        "text": "Antes da primeira nota fiscal ser emitida, é preciso definir atividade, documentação, tipo societário e enquadramento tributário. A KM acompanha cada passo para que o CNPJ comece com o pé direito.",
        "btn": "Quero abrir minha empresa",
        "wa": "Quero abrir uma empresa, pode me ajudar?",
        "img": "slide-08-abertura-de-empresas-barbosa.jpeg",
        "target": "esp-abertura"
    }
];

        function renderSuperarSlides() {
            const track = document.getElementById('superar-track');
            if (!track) return;

            track.innerHTML = superarData.map((slide, i) => `
                <div class="superar-slide ${i === 0 ? 'active' : 'hidden'} superar-slide-box">
                    <div class="superar-img" style="background-image: url('${STOCK_IMG_MAP[slide.img] || ('imagem 2/' + slide.img)}');"></div>
                    <div class="superar-content">
                        <h3 class="font-serif superar-title font-bold">${slide.title}</h3>
                        <p class="superar-text">${slide.text}</p>
                        <button onclick="navigateTo('${slide.target}')" class="superar-btn">
                            ${slide.btn} <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // --- 2. THE SUPERAR CAROUSEL CONTROLLER STATE ---
        let currentSuperarIndex = 0;
        let autoSlideInterval;

        function showSuperarSlide(index) {
            const slides = document.querySelectorAll('.superar-slide');
            if (slides.length === 0) return;

            // Normalize Index limits
            if (index >= slides.length) currentSuperarIndex = 0;
            else if (index < 0) currentSuperarIndex = slides.length - 1;
            else currentSuperarIndex = index;

            slides.forEach((slide, idx) => {
                if (idx === currentSuperarIndex) {
                    slide.classList.remove('hidden');
                    slide.classList.add('flex');
                    // Smooth subtle slide-in animation
                    gsap.fromTo(slide, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.4, ease: 'power1.out' });
                } else {
                    slide.classList.add('hidden');
                    slide.classList.remove('flex');
                }
            });
        }

        function nextSuperarSlide() {
            showSuperarSlide(currentSuperarIndex + 1);
            resetAutoSlide();
        }

        function prevSuperarSlide() {
            showSuperarSlide(currentSuperarIndex - 1);
            resetAutoSlide();
        }

        // Helper genérico: permite arrastar com o dedo (touch) ou o mouse em qualquer carrossel,
        // chamando onNext()/onPrev() quando o arraste ultrapassa o limiar (threshold).
        function attachSwipe(el, onNext, onPrev, threshold) {
            if (!el) return;
            threshold = threshold || 40;
            let startX = null, dragging = false;
            el.style.touchAction = 'pan-y';
            el.addEventListener('pointerdown', (e) => { dragging = true; startX = e.clientX; });
            el.addEventListener('pointerup', (e) => {
                if (!dragging || startX === null) { dragging = false; return; }
                const delta = e.clientX - startX;
                if (Math.abs(delta) > threshold) {
                    if (delta < 0) { onNext(); } else { onPrev(); }
                }
                dragging = false; startX = null;
            });
            el.addEventListener('pointercancel', () => { dragging = false; startX = null; });
            el.addEventListener('pointerleave', () => { dragging = false; startX = null; });
        }

        function initAutoSlide() {
            autoSlideInterval = setInterval(() => {
                showSuperarSlide(currentSuperarIndex + 1);
            }, 6000); // Transitions automatically every 6 seconds
        }

        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            initAutoSlide();
        }

        // --- 1B. "SUA CONTABILIDADE ACOMPANHA..." AUTO CAROUSEL (3D TILT) ---
        const acompanhamentoData = [
    {
        "title": "Só recebe guia e boleto",
        "text": "As guias chegam para pagamento, mas fica faltando alguém explicar o que mudou de um mês para o outro ou o que realmente merece atenção.",
        "img": "dor-01-atendimento-pouco-estrategico-barbosa.jpeg"
    },
    {
        "title": "Resposta que demora",
        "text": "Perguntas simples demoram dias para ter resposta, o que acaba travando decisões que precisavam ser tomadas na hora.",
        "img": "dor-02-comunicacao-lenta-barbosa.jpeg"
    },
    {
        "title": "Ninguém acompanha de perto",
        "text": "Falta um contato próximo que sinalize prazos, mudanças e pendências antes que virem urgência.",
        "img": "dor-03-ausencia-acompanhamento-barbosa.jpeg"
    },
    {
        "title": "Relatórios que confundem",
        "text": "Os relatórios chegam, mas não dá pra saber se o negócio está indo melhor, pior, ou em qual ponto é preciso agir.",
        "img": "dor-04-falta-indicadores-gestao-barbosa.jpeg"
    },
    {
        "title": "Atendimento igual para todo mundo",
        "text": "Cada negócio tem suas particularidades, mas as orientações recebidas soam padronizadas e pouco conectadas com a realidade da empresa.",
        "img": "dor-05-consultoria-generica-barbosa.jpeg"
    },
    {
        "title": "Problema aparece em cima da hora",
        "text": "As pendências só aparecem quando já viraram cobrança, atraso ou urgência para resolver na correria.",
        "img": "dor-06-antecipacao-problemas-barbosa.jpeg"
    },
    {
        "title": "Falta orientação para decidir",
        "text": "No momento de contratar, investir ou mudar algo no negócio, fica difícil saber quais números olhar primeiro antes de decidir.",
        "img": "dor-07-suporte-decisoes-estrategicas-barbosa.jpeg"
    }
];

        let currentAcompanhamentoIndex = 0;
        const acompReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Distância circular (menor caminho) entre o card "i" e o card ativo, dado o total de cards.
        function acompCircularDelta(i, total, current) {
            let d = i - current;
            const half = Math.floor(total / 2);
            while (d > half) d -= total;
            while (d < -half) d += total;
            return d;
        }

        // Transform 3D (Coverflow) conforme a distância "d" até o card ativo.
        function acompCardTransform(d, viewportWidth) {
            const ad = Math.abs(d);
            const sign = d < 0 ? -1 : 1;
            let tx = 0, tz = 0, ry = 0, scale = 1, opacity = 1, z = 50;
            if (d === 0) {
                tx = 0; tz = 0; ry = 0; scale = 1.2; opacity = 1; z = 50;
            } else if (ad === 1) {
                tx = sign * viewportWidth * 0.30; tz = -140; ry = -sign * 10; scale = 0.82; opacity = 0.85; z = 40;
            } else if (ad === 2) {
                tx = sign * viewportWidth * 0.54; tz = -280; ry = -sign * 18; scale = 0.65; opacity = 0.28; z = 20;
            } else {
                tx = sign * viewportWidth * 0.70; tz = -400; ry = -sign * 24; scale = 0.55; opacity = 0; z = 10;
            }
            return { tx, tz, ry, scale, opacity, z };
        }

        function renderAcompanhamento() {
            const track = document.getElementById('acompanhamento-track');
            if (!track) return;

            if (!track.children.length) {
                track.innerHTML = acompanhamentoData.map((item, i) => `
                    <div class="acomp-card"
                         data-index="${i}"
                         style="background-image:url('${STOCK_IMG_MAP[item.img] || ('imagem/' + item.img)}'); background-size: cover; background-position: center;
                                transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease, box-shadow 500ms ease;">
                        <div class="acomp-overlay">
                            <h4>${item.title}</h4>
                            <p>${item.text}</p>
                        </div>
                    </div>
                `).join('');

                track.querySelectorAll('.acomp-card').forEach(card => {
                    card.addEventListener('click', () => {
                        const idx = parseInt(card.getAttribute('data-index'), 10);
                        if (idx !== currentAcompanhamentoIndex) {
                            currentAcompanhamentoIndex = idx;
                            acompUpdatePositions();
                            resetAcompanhamentoAutoSlide();
                        }
                    });
                });
            }

            acompUpdatePositions();
        }

        function acompUpdatePositions() {
            const track = document.getElementById('acompanhamento-track');
            const viewport = document.getElementById('acompanhamento-viewport');
            if (!track || !viewport) return;
            const total = acompanhamentoData.length;
            const viewportWidth = viewport.offsetWidth || 1000;

            track.querySelectorAll('.acomp-card').forEach(card => {
                const i = parseInt(card.getAttribute('data-index'), 10);
                const d = acompCircularDelta(i, total, currentAcompanhamentoIndex);
                const t = acompCardTransform(d, viewportWidth);
                card.style.transform = `translate(-50%, -50%) translateX(${t.tx}px) translateZ(${t.tz}px) rotateY(${t.ry}deg) scale(${t.scale})`;
                card.style.opacity = t.opacity;
                card.style.zIndex = t.z;
                card.style.pointerEvents = Math.abs(d) > 2 ? 'none' : 'auto';
                card.style.boxShadow = d === 0 ? '0 32px 60px rgba(10,25,50,0.30)' : '0 14px 30px rgba(10,25,50,0.14)';
            });
        }

        function nextAcompanhamentoSlide() {
            currentAcompanhamentoIndex = (currentAcompanhamentoIndex + 1) % acompanhamentoData.length;
            acompUpdatePositions();
        }

        function prevAcompanhamentoSlide() {
            currentAcompanhamentoIndex = (currentAcompanhamentoIndex - 1 + acompanhamentoData.length) % acompanhamentoData.length;
            acompUpdatePositions();
        }

        let acompanhamentoAutoInterval;
        function initAcompanhamentoAutoSlide() {
            clearInterval(acompanhamentoAutoInterval);
            if (acompReducedMotion) return; // Respeita prefers-reduced-motion: sem rotação automática.
            acompanhamentoAutoInterval = setInterval(() => {
                nextAcompanhamentoSlide();
            }, 4500); // Gira sozinho, em loop infinito, a cada 4,5s
        }
        function resetAcompanhamentoAutoSlide() {
            clearInterval(acompanhamentoAutoInterval);
            initAcompanhamentoAutoSlide();
        }

        // Pausa no hover/foco, arraste com mouse e deslizar no toque, navegação por teclado.
        (function setupAcompanhamentoInteractions() {
            const viewport = document.getElementById('acompanhamento-viewport');
            if (!viewport) return;

            viewport.addEventListener('mouseenter', () => clearInterval(acompanhamentoAutoInterval));
            viewport.addEventListener('mouseleave', () => initAcompanhamentoAutoSlide());
            viewport.addEventListener('focusin', () => clearInterval(acompanhamentoAutoInterval));
            viewport.addEventListener('focusout', () => initAcompanhamentoAutoSlide());

            let dragStartX = null;
            let dragging = false;

            viewport.addEventListener('pointerdown', (e) => {
                dragging = true;
                dragStartX = e.clientX;
            });
            viewport.addEventListener('pointerup', (e) => {
                if (!dragging || dragStartX === null) { dragging = false; return; }
                const delta = e.clientX - dragStartX;
                if (Math.abs(delta) > 40) {
                    if (delta < 0) { nextAcompanhamentoSlide(); } else { prevAcompanhamentoSlide(); }
                    resetAcompanhamentoAutoSlide();
                }
                dragging = false;
                dragStartX = null;
            });
            viewport.addEventListener('pointercancel', () => { dragging = false; dragStartX = null; });
            viewport.addEventListener('pointerleave', () => { dragging = false; dragStartX = null; });

            viewport.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight') { nextAcompanhamentoSlide(); resetAcompanhamentoAutoSlide(); e.preventDefault(); }
                if (e.key === 'ArrowLeft') { prevAcompanhamentoSlide(); resetAcompanhamentoAutoSlide(); e.preventDefault(); }
            });
        })();

        // --- 2A. "DESAFIOS QUE IMPEDEM O CRESCIMENTO" CAROUSEL ---
        const dificuldadesData = [
    {
        "icon": "fa-money-bill-trend-up",
        "title": "Impostos sem revisão",
        "text": "Sem uma revisão periódica da tributação, é comum a empresa continuar recolhendo valores que não refletem mais a sua operação atual.",
        "img": "dificuldade-01-impostos-elevados-barbosa.jpeg"
    },
    {
        "icon": "fa-scale-balanced",
        "title": "Regime que não acompanha a empresa",
        "text": "Faturamento, folha de pagamento e margem se transformam com o tempo — e o enquadramento tributário precisa acompanhar essas mudanças para continuar sendo o mais adequado.",
        "img": "dificuldade-02-enquadramento-tributario-barbosa.jpeg"
    },
    {
        "icon": "fa-wallet",
        "title": "Financeiro sem rotina",
        "text": "Quando entradas, saídas e vencimentos não seguem um controle único, fica difícil enxergar quanto realmente há em caixa e o que ainda falta pagar.",
        "img": "dificuldade-03-controle-financeiro-barbosa.jpeg"
    },
    {
        "icon": "fa-money-bill-transfer",
        "title": "Caixa apertado no fim do mês",
        "text": "Mesmo vendendo bem, uma empresa sem previsão de recebimentos e despesas pode acabar sem caixa para honrar seus compromissos.",
        "img": "dificuldade-04-fluxo-de-caixa-barbosa.jpeg"
    },
    {
        "icon": "fa-file-circle-exclamation",
        "title": "Fiscal acumulando pendências",
        "text": "A falta de conferência em notas, impostos e declarações costuma gerar retrabalho e transformar um pequeno deslize em um problema bem maior.",
        "img": "dificuldade-05-processos-fiscais-barbosa.jpeg"
    },
    {
        "icon": "fa-boxes-stacked",
        "title": "Estoque parado ou faltando",
        "text": "Comprar sem monitorar giro e saldo pode prender capital em mercadoria parada — ou, no extremo oposto, fazer a empresa perder vendas por falta de produto.",
        "img": "dificuldade-06-controle-estoque-barbosa.jpeg"
    },
    {
        "icon": "fa-users-gear",
        "title": "Folha sem conferência",
        "text": "Falhas em admissões, férias, rescisões ou envios ao eSocial costumam gerar correções e custos extras que uma rotina bem organizada conseguiria evitar.",
        "img": "dificuldade-07-custos-trabalhistas-barbosa.jpeg"
    },
    {
        "icon": "fa-chart-pie",
        "title": "Números que não ajudam a decidir",
        "text": "Quando os relatórios não apresentam resultado, custos e variações de forma clara, a contabilidade acaba pouco útil para as decisões do dia a dia.",
        "img": "dificuldade-08-relatorios-gerenciais-barbosa.jpeg"
    },
    {
        "icon": "fa-file-signature",
        "title": "Cadastro da empresa desatualizado",
        "text": "Alterações de endereço, quadro societário ou atividade precisam estar refletidas nos registros oficiais, evitando travas em contratos e outras operações.",
        "img": "dificuldade-09-pendencias-societarias-barbosa.jpeg"
    },
    {
        "icon": "fa-landmark",
        "title": "Reforma Tributária sem planejamento",
        "text": "IBS, CBS e as demais fases da transição tributária podem impactar sistemas, precificação e fluxo de caixa. Vale começar a se preparar antes que essas mudanças cheguem à rotina.",
        "img": "dificuldade-10-reforma-tributaria-barbosa.jpeg"
    }
];

        let currentDificuldadeIndex = 0;

        // Se a imagem de fundo não existir, mantém um degradê escuro sólido no lugar (sem quebrar o layout).
        function dificImgFallback(el) {
            el.style.backgroundImage = 'none';
        }

        function renderDificuldadeCard(item) {
            return `
                <div class="relative rounded-2xl overflow-hidden shadow-xl group transition-all duration-300 hover:translate-y-[-4px] bg-[#0B1424]"
                     style="min-height:340px; background-image:url('${STOCK_IMG_MAP[item.img] || ('imagem/' + item.img)}'); background-size:cover; background-position:center;"
                     onerror="dificImgFallback(this)">
                    <div class="absolute inset-0" style="background:linear-gradient(to top, rgba(3,7,18,0.94) 20%, rgba(3,7,18,0.65) 55%, rgba(3,7,18,0.25) 100%);"></div>
                    <div class="relative z-10 flex flex-col gap-4 p-8 h-full justify-end text-left" style="min-height:340px;">
                        <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-gold text-xl border border-white/10" style="backdrop-filter:blur(6px);">
                            <i class="fa-solid ${item.icon}"></i>
                        </div>
                        <h3 class="font-bold text-lg text-white">${item.title}</h3>
                        <p class="text-slate-300 text-xs leading-relaxed">${item.text}</p>
                        <a href="https://wa.me/5516974058132?text=${encodeURIComponent('Gostaria de saber mais sobre: ' + item.title)}" target="_blank" rel="noopener noreferrer" class="mt-1 w-max px-5 py-2.5 rounded-full border border-white/30 text-white text-xs font-bold flex items-center gap-2 hover:bg-white hover:text-slate-900 transition-all">
                            Entender melhor <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                        </a>
                    </div>
                </div>
            `;
        }

        function renderDificuldades() {
            const track = document.getElementById('dificuldades-track');
            const counter = document.getElementById('dificuldades-counter');
            if (!track) return;

            const total = dificuldadesData.length;
            // Show 3 consecutive items on desktop, wrapping around the array
            const visible = window.innerWidth >= 768 ? 3 : 1;
            let html = '';
            for (let i = 0; i < visible; i++) {
                html += renderDificuldadeCard(dificuldadesData[(currentDificuldadeIndex + i) % total]);
            }
            track.innerHTML = html;
            gsap.fromTo(track.children, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 });

            if (counter) counter.textContent = `${currentDificuldadeIndex + 1} / ${total}`;
        }

        function nextDificuldadeSlide() {
            currentDificuldadeIndex = (currentDificuldadeIndex + 1) % dificuldadesData.length;
            renderDificuldades();
        }

        function prevDificuldadeSlide() {
            currentDificuldadeIndex = (currentDificuldadeIndex - 1 + dificuldadesData.length) % dificuldadesData.length;
            renderDificuldades();
        }

        // --- 2B. CLIENT REVIEWS 3D CAROUSEL ---
        // Avaliações ilustrativas (exemplo de demonstração) — focadas no serviço de contabilidade,
        // sem citar nomes de colaboradores. Substitua pelas avaliações reais do cliente antes de publicar.
        const reviewsData = [
    {
        "name": "Experiência ilustrativa",
        "initials": "KM",
        "text": "Compreender o porquê de cada obrigação muda a forma como a empresa lida com ela. Buscamos sempre explicar o que está sendo feito e o que precisa de acompanhamento."
    },
    {
        "name": "Experiência ilustrativa",
        "initials": "KM",
        "text": "Na troca de contador, o primeiro passo é organizar essa transição, revisar as informações existentes e deixar claros os próximos passos."
    },
    {
        "name": "Experiência ilustrativa",
        "initials": "KM",
        "text": "Ao abrir um CNPJ, o foco é orientar cada decisão ainda antes do registro, evitando dúvidas comuns nos primeiros meses de operação."
    },
    {
        "name": "Experiência ilustrativa",
        "initials": "KM",
        "text": "O WhatsApp faz parte da nossa rotina de atendimento. Procuramos responder com objetividade e sinalizar quando algum tema exige uma análise mais aprofundada."
    },
    {
        "name": "Experiência ilustrativa",
        "initials": "KM",
        "text": "Toda revisão tributária parte dos dados reais da empresa. Só depois de compreender atividade, faturamento e operação é que discutimos alternativas."
    },
    {
        "name": "Experiência ilustrativa",
        "initials": "KM",
        "text": "No departamento pessoal, prazo e organização não são negociáveis. A rotina precisa acompanhar de perto admissões, folha, férias, rescisões e eSocial."
    },
    {
        "name": "Experiência ilustrativa",
        "initials": "KM",
        "text": "Planejamento tributário e Imposto de Renda dependem de documentação e contexto bem organizados. Por isso, reunimos as informações antes de qualquer decisão ser tomada."
    },
    {
        "name": "Experiência ilustrativa",
        "initials": "KM",
        "text": "Um relatório só tem valor quando é entendido. Por isso, apresentamos os números de um jeito simples e conectado à realidade de cada empresa."
    },
    {
        "name": "Experiência ilustrativa",
        "initials": "KM",
        "text": "Numa regularização fiscal, começamos levantando tudo o que está em aberto. Só depois apresentamos as opções e os caminhos possíveis."
    },
    {
        "name": "Experiência ilustrativa",
        "initials": "KM",
        "text": "Cada segmento tem suas particularidades. Por isso, o atendimento sempre começa entendendo como o negócio funciona na prática, antes de sugerir qualquer mudança."
    }
];

        let currentReviewIndex = 0;

        function revCardTransform(d) {
            const ad = Math.abs(d);
            const sign = d < 0 ? -1 : 1;
            let tx = 0, tz = 0, ry = 0, scale = 1, opacity = 1, z = 50;
            if (d === 0) { tx = 0; tz = 0; ry = 0; scale = 1.12; opacity = 1; z = 50; }
            else if (ad === 1) { tx = sign * 78; tz = -110; ry = -sign * 12; scale = 0.82; opacity = 0.85; z = 40; }
            else if (ad === 2) { tx = sign * 145; tz = -220; ry = -sign * 20; scale = 0.62; opacity = 0.3; z = 20; }
            else { tx = sign * 190; tz = -320; ry = -sign * 26; scale = 0.5; opacity = 0; z = 10; }
            return { tx, tz, ry, scale, opacity, z };
        }

        function renderReviews() {
            const track = document.getElementById('reviews-track');
            const dotsWrap = document.getElementById('reviews-dots');
            if (!track) return;
            const stars = '<i class="fa-solid fa-star"></i>'.repeat(5);

            if (!track.children.length) {
                track.innerHTML = reviewsData.map((review, i) => `
                    <div class="rev-card" data-index="${i}">
                        <div style="position:relative;">
                            <div style="display:flex; align-items:center; gap:10px;">
                                <div style="width:40px; height:40px; border-radius:50%; background:linear-gradient(135deg,#d4af37,#b45309); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:11px; color:#101827; flex-shrink:0;">${review.initials}</div>
                                <div>
                                    <span style="display:block; font-weight:700; font-size:13px; color:#0f172a;">${review.name}</span>
                                    <span style="color:#d4af37; font-size:10px;">${stars}</span>
                                </div>
                            </div>
                        </div>
                        <p style="font-size:12px; line-height:1.55; color:#475569; margin-top:12px; overflow:hidden; display:-webkit-box; -webkit-line-clamp:6; -webkit-box-orient:vertical;">${review.text}</p>
                    </div>
                `).join('');

                track.querySelectorAll('.rev-card').forEach(card => {
                    card.addEventListener('click', () => {
                        const idx = parseInt(card.getAttribute('data-index'), 10);
                        if (idx !== currentReviewIndex) {
                            currentReviewIndex = idx;
                            revUpdatePositions();
                            resetReviewAutoSlide();
                        }
                    });
                });
            }

            revUpdatePositions();

            if (dotsWrap) {
                dotsWrap.innerHTML = reviewsData.map((_, i) =>
                    `<button onclick="goToReviewSlide(${i}); resetReviewAutoSlide();" class="w-2 h-2 rounded-full transition-all ${i === currentReviewIndex ? 'bg-brand-gold w-6' : 'bg-slate-300'}" aria-label="Avaliação ${i + 1}"></button>`
                ).join('');
            }
        }

        function revUpdatePositions() {
            const track = document.getElementById('reviews-track');
            const viewport = document.getElementById('reviews-viewport');
            if (!track || !viewport) return;
            const total = reviewsData.length;
            const viewportWidth = viewport.offsetWidth || 800;

            track.querySelectorAll('.rev-card').forEach(card => {
                const i = parseInt(card.getAttribute('data-index'), 10);
                const d = acompCircularDelta(i, total, currentReviewIndex);
                const t = revCardTransform(d);
                const pxOffset = (t.tx / 100) * (viewportWidth * 0.42);
                card.style.transform = `translate(-50%, -50%) translateX(${pxOffset}px) translateZ(${t.tz}px) rotateY(${t.ry}deg) scale(${t.scale})`;
                card.style.opacity = t.opacity;
                card.style.zIndex = t.z;
                card.style.pointerEvents = Math.abs(d) > 2 ? 'none' : 'auto';
                card.style.boxShadow = d === 0 ? '0 28px 50px rgba(10,25,50,0.20)' : '0 12px 26px rgba(10,25,50,0.10)';
            });
        }

        function nextReviewSlide() {
            currentReviewIndex = (currentReviewIndex + 1) % reviewsData.length;
            renderReviews();
        }

        function prevReviewSlide() {
            currentReviewIndex = (currentReviewIndex - 1 + reviewsData.length) % reviewsData.length;
            renderReviews();
        }

        function goToReviewSlide(index) {
            currentReviewIndex = index;
            renderReviews();
        }

        (function setupReviewsInteractions() {
            const viewport = document.getElementById('reviews-viewport');
            if (!viewport) return;
            viewport.addEventListener('mouseenter', () => clearInterval(reviewAutoInterval));
            viewport.addEventListener('mouseleave', () => initReviewAutoSlide());

            let dragStartX = null, dragging = false;
            viewport.addEventListener('pointerdown', (e) => { dragging = true; dragStartX = e.clientX; });
            viewport.addEventListener('pointerup', (e) => {
                if (!dragging || dragStartX === null) { dragging = false; return; }
                const delta = e.clientX - dragStartX;
                if (Math.abs(delta) > 35) {
                    if (delta < 0) { nextReviewSlide(); } else { prevReviewSlide(); }
                    resetReviewAutoSlide();
                }
                dragging = false; dragStartX = null;
            });
            viewport.addEventListener('pointercancel', () => { dragging = false; dragStartX = null; });
            viewport.addEventListener('pointerleave', () => { dragging = false; dragStartX = null; });
            viewport.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight') { nextReviewSlide(); resetReviewAutoSlide(); }
                if (e.key === 'ArrowLeft') { prevReviewSlide(); resetReviewAutoSlide(); }
            });
        })();

        let reviewAutoInterval;
        function initReviewAutoSlide() {
            reviewAutoInterval = setInterval(() => {
                nextReviewSlide();
            }, 4500); // Gira sozinho, sem parar, a cada 4.5s
        }
        function resetReviewAutoSlide() {
            clearInterval(reviewAutoInterval);
            initReviewAutoSlide();
        }

        // --- 3. EVENT LISTENERS INITIALIZATION ---
        window.addEventListener('DOMContentLoaded', () => {
            // Start carousel
            renderSuperarSlides();
            showSuperarSlide(0);
            initAutoSlide();
            renderAcompanhamento();
            initAcompanhamentoAutoSlide();
            renderDificuldades();
            renderReviews();
            initReviewAutoSlide();

            // Arrastar com o dedo (touch) ou o mouse nos carrosséis que ainda não tinham
            attachSwipe(document.getElementById('superar-track'), nextSuperarSlide, prevSuperarSlide);
            attachSwipe(document.getElementById('dificuldades-track'), nextDificuldadeSlide, prevDificuldadeSlide);

            window.addEventListener('resize', () => {
                renderAcompanhamento();
                renderDificuldades();
            });

            // Header stickiness behavior (função global definida antes de navigateTo)
            window.addEventListener('scroll', updateHeaderScrollState);
            updateHeaderScrollState();

            // Mobile menu switch
            document.getElementById('mobile-menu-btn').addEventListener('click', () => {
                const overlay = document.getElementById('mobile-menu');
                overlay.classList.toggle('hidden');
            });

            // Close mobile menu when a link is tapped
            document.querySelectorAll('.mobile-nav-link, .espnav-mobile-item').forEach(link => {
                link.addEventListener('click', () => {
                    document.getElementById('mobile-menu').classList.add('hidden');
                });
            });
        });
    