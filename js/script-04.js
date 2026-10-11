
            // ---------- Dados das 8 páginas de Especialidades ----------

            // ---------- Seção "Desafios do segmento" (3 cards específicos por especialidade) ----------
            const espChallengesDesc = "Quando a contabilidade não acompanha as particularidades da atividade, pequenas dúvidas podem virar retrabalho, custo e insegurança na rotina.";

            const espChallengeCards = {
    "prestadores": {
        "title": "O que costuma complicar a rotina de quem presta serviços?",
        "cards": [
            {
                "icon": "fa-percent",
                "title": "Fator R sem acompanhamento",
                "desc": "Folha e faturamento mudam ao longo do ano. Sem conferência periódica, a empresa pode continuar em um enquadramento que já não reflete sua realidade."
            },
            {
                "icon": "fa-coins",
                "title": "Tributação decidida no automático",
                "desc": "Escolher ou manter um regime sem olhar para atividade, margem e estrutura pode gerar uma carga tributária diferente da esperada."
            },
            {
                "icon": "fa-file-invoice",
                "title": "Notas e prazos espalhados",
                "desc": "Quando emissão de notas, impostos e declarações não seguem uma rotina, aumentam as chances de atraso e retrabalho."
            }
        ]
    },
    "comercio": {
        "title": "Quais pontos mais tiram a clareza da gestão de um comércio?",
        "cards": [
            {
                "icon": "fa-boxes-stacked",
                "title": "Estoque que não fecha",
                "desc": "Diferença entre o que está no sistema e o que existe na loja dificulta compras, formação de preço e leitura do resultado."
            },
            {
                "icon": "fa-receipt",
                "title": "Imposto sem conferência da operação",
                "desc": "Produto, origem, destino e tipo de venda podem alterar a tributação. Tratar tudo do mesmo jeito aumenta o risco de erro."
            },
            {
                "icon": "fa-chart-line",
                "title": "Venda cresce, margem não aparece",
                "desc": "Faturar mais não significa necessariamente lucrar mais. Custos, taxas, estoque e despesas precisam entrar na conta."
            }
        ]
    },
    "industria": {
        "title": "Onde a contabilidade industrial costuma exigir mais atenção?",
        "cards": [
            {
                "icon": "fa-gears",
                "title": "Custo de produção pouco confiável",
                "desc": "Sem separar insumos, mão de obra, perdas e despesas de fabricação, o preço pode ser definido com uma base incompleta."
            },
            {
                "icon": "fa-file-invoice-dollar",
                "title": "Créditos fiscais sem revisão",
                "desc": "Operações e insumos podem ter tratamentos diferentes. Uma revisão técnica ajuda a verificar o que pode ou não ser aproveitado."
            },
            {
                "icon": "fa-industry",
                "title": "Produção e estoque não conversam",
                "desc": "Divergências entre matéria-prima, produto em processo, acabado e documentos fiscais dificultam o fechamento e a gestão."
            }
        ]
    },
    "liberais": {
        "title": "Quais dúvidas aparecem com frequência para profissionais liberais?",
        "cards": [
            {
                "icon": "fa-scale-unbalanced",
                "title": "Pessoa física ou CNPJ sem comparação",
                "desc": "A melhor forma de atuar depende de faturamento, despesas, clientes e atividade. Decidir sem simulação pode encarecer a rotina."
            },
            {
                "icon": "fa-wallet",
                "title": "Dinheiro pessoal misturado com o profissional",
                "desc": "Usar a mesma conta para tudo dificulta saber quanto a atividade gera e complica a organização de retiradas e despesas."
            },
            {
                "icon": "fa-file-lines",
                "title": "Declarações feitas sem organização prévia",
                "desc": "Rendimentos, despesas e documentos reunidos só na última hora aumentam a chance de inconsistências e esquecimentos."
            }
        ]
    },
    "clinicas": {
        "title": "O que merece atenção na contabilidade de clínicas e consultórios?",
        "cards": [
            {
                "icon": "fa-percent",
                "title": "Faturamento e folha sem análise conjunta",
                "desc": "Em algumas atividades, a relação entre folha e receita influencia a tributação. Por isso esses números precisam ser acompanhados juntos."
            },
            {
                "icon": "fa-users",
                "title": "Contratações com rotinas diferentes",
                "desc": "Funcionários, sócios e prestadores podem exigir tratamentos distintos. Organizar cada vínculo reduz dúvidas na folha e no eSocial."
            },
            {
                "icon": "fa-heart-pulse",
                "title": "Recebimentos sem conciliação",
                "desc": "Pacientes, convênios, glosas e repasses podem deixar o faturamento difícil de conferir quando não existe uma rotina de conciliação."
            }
        ]
    },
    "ecommerce": {
        "title": "Quais pontos costumam gerar mais retrabalho em lojas online?",
        "cards": [
            {
                "icon": "fa-route",
                "title": "Venda para vários estados",
                "desc": "Operações interestaduais exigem atenção à origem, destino, tipo de cliente e regras fiscais aplicáveis."
            },
            {
                "icon": "fa-store",
                "title": "Marketplace não bate com o financeiro",
                "desc": "Comissões, fretes, cancelamentos e prazos de repasse precisam ser conciliados para mostrar quanto realmente entrou."
            },
            {
                "icon": "fa-truck-ramp-box",
                "title": "Estoque diferente entre canais",
                "desc": "Quando site, marketplace e estoque físico não estão alinhados, surgem diferenças que afetam venda, nota e fechamento."
            }
        ]
    },
    "abertura": {
        "title": "Quais decisões precisam estar claras antes de abrir o CNPJ?",
        "cards": [
            {
                "icon": "fa-file-contract",
                "title": "Atividade cadastrada sem conferir",
                "desc": "O CNAE precisa representar o que a empresa realmente fará, pois interfere em tributação, licenças e obrigações."
            },
            {
                "icon": "fa-calculator",
                "title": "Regime escolhido só pela alíquota inicial",
                "desc": "Faturamento estimado, despesas, folha e tipo de operação também precisam entrar na análise do enquadramento."
            },
            {
                "icon": "fa-folder-open",
                "title": "Documentos e registros sem sequência",
                "desc": "Abertura envolve etapas diferentes. Saber o que vem primeiro evita idas e voltas e acelera a organização inicial."
            }
        ]
    },
    "reforma": {
        "title": "O que sua empresa precisa observar durante a Reforma Tributária?",
        "cards": [
            {
                "icon": "fa-arrows-rotate",
                "title": "IBS e CBS chegando à operação",
                "desc": "As novas regras podem mudar cadastros, documentos, créditos e forma de apuração. O impacto depende de como a empresa compra e vende."
            },
            {
                "icon": "fa-tag",
                "title": "Preço calculado com regra antiga",
                "desc": "Mudanças na tributação podem alterar custo e margem. A formação de preço precisa ser revista conforme a transição avança."
            },
            {
                "icon": "fa-display",
                "title": "Sistema esperando a última hora",
                "desc": "ERP, emissão de notas e cadastros precisam acompanhar novos campos e regras para que a mudança não vire correria."
            }
        ]
    }
};

            const espData = {
    "prestadores": {
        "menuTitle": "Prestadores de Serviços",
        "eyebrow": "PRESTADORES DE SERVIÇOS",
        "heroFile": "esp-contabilidade-prestadores-servicos-barbosa.jpeg",
        "h1": "Contabilidade para Prestadores de Serviços",
        "intro": "Para quem vive de prestar serviços, a contabilidade precisa acompanhar faturamento, notas, folha e tributação sem transformar cada mês em uma nova dúvida. A KM organiza essa rotina e explica os pontos que merecem atenção.",
        "topics": [
            "Fator R acompanhado ao longo do ano",
            "Notas de serviço organizadas",
            "Regime tributário revisto com critério",
            "Folha e pró-labore em ordem",
            "Prazos fiscais sob controle",
            "Faturamento analisado junto com a operação"
        ],
        "challenges": [
            "Entender quando o Fator R pode influenciar a tributação.",
            "Manter notas, impostos e declarações em uma rotina previsível.",
            "Revisar o enquadramento quando faturamento ou estrutura mudam."
        ],
        "faqs": [
            {
                "q": "Por que o Fator R precisa ser acompanhado?",
                "a": "Porque ele considera a relação entre folha e faturamento em um período móvel. Quando esses valores mudam, o tratamento tributário de algumas atividades também pode mudar."
            },
            {
                "q": "Prestador de serviços sempre pode ficar no Simples Nacional?",
                "a": "Não. Atividade, faturamento, quadro societário e outras regras precisam ser conferidos antes de confirmar o enquadramento."
            },
            {
                "q": "Como saber se o regime tributário ainda faz sentido?",
                "a": "A revisão deve considerar faturamento, despesas, folha, margem e tipo de serviço. O ideal é comparar cenários com dados atuais, e não apenas repetir a opção do ano anterior."
            },
            {
                "q": "A emissão de nota de serviço muda de cidade para cidade?",
                "a": "Pode mudar. Regras municipais, cadastro e sistema de emissão variam conforme o local e a natureza do serviço."
            },
            {
                "q": "Aumentar a folha só para mudar o Fator R é uma boa ideia?",
                "a": "Não deve ser uma decisão isolada. Folha e pró-labore geram custos e obrigações, por isso qualquer mudança precisa fazer sentido para a operação como um todo."
            }
        ],
        "waMsg": "Olá, quero entender como organizar a contabilidade da minha empresa de serviços."
    },
    "comercio": {
        "menuTitle": "Comércio",
        "eyebrow": "COMÉRCIO",
        "heroFile": "esp-contabilidade-comercio-barbosa.jpeg",
        "h1": "Contabilidade para Comércio",
        "intro": "No comércio, vender bem é só parte da história. Compras, estoque, notas, impostos e margem precisam estar organizados para mostrar o que realmente acontece no caixa e no resultado.",
        "topics": [
            "Tributação das vendas conferida",
            "Estoque conectado ao financeiro",
            "Notas de entrada e saída organizadas",
            "Margem acompanhada com custos reais",
            "Compras analisadas pelo giro",
            "Regime tributário revisto quando necessário"
        ],
        "challenges": [
            "Conferir se estoque e documentos fiscais mostram a mesma realidade.",
            "Entender quanto sobra depois de custos, impostos e despesas.",
            "Planejar compras sem prender dinheiro demais em mercadoria."
        ],
        "faqs": [
            {
                "q": "Existe um regime tributário que seja sempre melhor para comércio?",
                "a": "Não. A comparação depende de faturamento, margem, mix de produtos, fornecedores, clientes e características das operações."
            },
            {
                "q": "Por que estoque aparece na conversa com a contabilidade?",
                "a": "Porque ele afeta custo das mercadorias, resultado, caixa e conferências fiscais. Estoque desorganizado pode distorcer a leitura do negócio."
            },
            {
                "q": "Como saber a margem real de uma venda?",
                "a": "É preciso considerar custo de compra, impostos, taxas, despesas e eventuais perdas, além do preço cobrado do cliente."
            },
            {
                "q": "Toda venda precisa de nota fiscal?",
                "a": "As regras variam conforme operação e cliente, mas a emissão correta dos documentos é parte essencial da regularidade fiscal."
            },
            {
                "q": "Vale revisar a classificação dos produtos?",
                "a": "Sim, principalmente quando há mix grande ou mudanças de fornecedores e produtos. Classificação e tributação precisam refletir o item efetivamente vendido."
            }
        ],
        "waMsg": "Olá, quero entender como a KM pode organizar a contabilidade do meu comércio."
    },
    "industria": {
        "menuTitle": "Indústria",
        "eyebrow": "INDÚSTRIA",
        "heroFile": "esp-contabilidade-industria-barbosa.jpeg",
        "h1": "Contabilidade para Indústria",
        "intro": "A indústria reúne produção, estoque e fiscal em uma mesma operação. A KM acompanha essas frentes para que custos, documentos e informações contábeis façam sentido entre si.",
        "topics": [
            "Custos produtivos separados por origem",
            "Matéria-prima e produto acabado conferidos",
            "Documentos fiscais revisados",
            "Créditos analisados com documentação",
            "Preço apoiado em custo e margem",
            "Relatórios para acompanhar a operação"
        ],
        "challenges": [
            "Separar custos diretos, indiretos e perdas do processo produtivo.",
            "Conferir créditos e tratamentos fiscais com base nas operações reais.",
            "Manter estoque físico, produção e registros contábeis alinhados."
        ],
        "faqs": [
            {
                "q": "Quais informações entram no custo de produção?",
                "a": "Além da matéria-prima, podem entrar mão de obra, energia, depreciação, perdas e outros gastos ligados à fabricação. A composição depende do processo da empresa."
            },
            {
                "q": "Toda indústria tem créditos tributários para aproveitar?",
                "a": "Não necessariamente. A possibilidade depende do regime, dos insumos, dos documentos e das operações realizadas."
            },
            {
                "q": "Por que separar matéria-prima, produto em processo e acabado?",
                "a": "Essa separação melhora o controle do estoque, a apuração de custos e a conferência entre produção e contabilidade."
            },
            {
                "q": "A contabilidade pode ajudar na formação de preço?",
                "a": "Pode fornecer custos, impostos e despesas que servem de base para a empresa analisar sua margem e definir preços com mais informação."
            },
            {
                "q": "É possível revisar procedimentos fiscais que já estão sendo usados?",
                "a": "Sim. Rotinas e documentos podem ser conferidos para identificar divergências, riscos e pontos que precisam de ajuste."
            }
        ],
        "waMsg": "Olá, quero falar sobre a contabilidade da minha indústria."
    },
    "liberais": {
        "menuTitle": "Profissionais Liberais",
        "eyebrow": "PROFISSIONAIS LIBERAIS",
        "heroFile": "esp-contabilidade-profissionais-liberais-barbosa.jpeg",
        "h1": "Contabilidade para Profissionais Liberais",
        "intro": "Profissionais liberais precisam conciliar atendimento ao cliente com impostos, notas, retiradas e declarações. A KM ajuda a separar a vida pessoal da atividade e a escolher uma estrutura coerente com o faturamento.",
        "topics": [
            "Pessoa física e jurídica comparadas",
            "CNPJ estruturado quando fizer sentido",
            "Pró-labore e retiradas organizados",
            "Notas e recibos em rotina",
            "IR preparado com antecedência",
            "Contas pessoais e profissionais separadas"
        ],
        "challenges": [
            "Decidir entre atuar como pessoa física ou jurídica sem comparar números.",
            "Misturar gastos pessoais com os da atividade.",
            "Reunir documentos apenas perto da declaração anual."
        ],
        "faqs": [
            {
                "q": "Quando vale comparar pessoa física e pessoa jurídica?",
                "a": "Sempre que o faturamento, as despesas ou o perfil dos clientes mudarem. A decisão deve considerar números e obrigações de cada formato."
            },
            {
                "q": "Profissional liberal é obrigado a abrir CNPJ?",
                "a": "Nem sempre. A necessidade depende da profissão, da forma de atuação, dos clientes e das regras aplicáveis."
            },
            {
                "q": "O que é pró-labore na prática?",
                "a": "É a remuneração do sócio pelo trabalho realizado na empresa. Ela precisa ser definida e registrada conforme a estrutura do negócio."
            },
            {
                "q": "Por que separar conta pessoal e conta da empresa?",
                "a": "Porque essa separação facilita o controle, a comprovação das movimentações e a leitura do resultado da atividade."
            },
            {
                "q": "Como organizar o Imposto de Renda ao longo do ano?",
                "a": "Guardando documentos e acompanhando rendimentos e movimentações com frequência, em vez de deixar toda a conferência para o prazo final."
            }
        ],
        "waMsg": "Olá, quero organizar minha atividade profissional com a KM Consultoria."
    },
    "clinicas": {
        "menuTitle": "Clínicas e Consultórios",
        "eyebrow": "CLÍNICAS E CONSULTÓRIOS",
        "heroFile": "esp-contabilidade-clinicas-consultorios-barbosa.jpeg",
        "h1": "Contabilidade para Clínicas e Consultórios",
        "intro": "Clínicas e consultórios lidam com equipe, pacientes, convênios, notas e diferentes formas de recebimento. A contabilidade precisa acompanhar essa rotina para que faturamento, folha e tributação estejam conectados.",
        "topics": [
            "Faturamento e folha analisados juntos",
            "Recebimentos e convênios conciliados",
            "Equipe e eSocial organizados",
            "Notas de serviços conferidas",
            "Estrutura societária atualizada",
            "Relatórios de receita e despesas"
        ],
        "challenges": [
            "Conciliar valores de pacientes e convênios com o que foi faturado.",
            "Organizar vínculos diferentes dentro da equipe.",
            "Acompanhar tributação e Fator R quando aplicáveis à atividade."
        ],
        "faqs": [
            {
                "q": "Clínica pode optar pelo Simples Nacional?",
                "a": "Em alguns casos, sim. É preciso verificar atividade, faturamento, estrutura e demais condições do regime."
            },
            {
                "q": "Por que o Fator R aparece tanto na área da saúde?",
                "a": "Porque determinadas atividades podem ter tributação influenciada pela relação entre folha e faturamento. A aplicação precisa ser conferida caso a caso."
            },
            {
                "q": "Como organizar recebimentos de convênios?",
                "a": "O ideal é conciliar o que foi faturado, o que foi glosado, o prazo de repasse e o valor efetivamente recebido."
            },
            {
                "q": "Sócios médicos precisam separar pró-labore e distribuição?",
                "a": "A forma de retirada deve ser organizada de acordo com a estrutura da empresa, os resultados e as regras aplicáveis."
            },
            {
                "q": "Uma clínica com vários profissionais precisa de contrato societário claro?",
                "a": "Sim, quando há sócios. Participação, responsabilidades e regras de retirada precisam estar documentadas de forma compatível com a realidade do negócio."
            }
        ],
        "waMsg": "Olá, quero entender a contabilidade para minha clínica ou consultório."
    },
    "ecommerce": {
        "menuTitle": "E-commerce",
        "eyebrow": "E-COMMERCE",
        "heroFile": "esp-contabilidade-ecommerce-barbosa.jpeg",
        "h1": "Contabilidade para E-commerce",
        "intro": "No e-commerce, a venda acontece rápido, mas a conferência vem depois: marketplace, frete, nota, estoque, taxa e repasse. A KM ajuda a juntar essas informações para a contabilidade acompanhar o mesmo ritmo da loja.",
        "topics": [
            "Marketplaces conciliados",
            "Vendas interestaduais revisadas",
            "Notas conectadas à operação",
            "Taxas e repasses conferidos",
            "Estoque alinhado entre canais",
            "Financeiro organizado por recebimento"
        ],
        "challenges": [
            "Conferir repasses líquidos depois de taxas e cancelamentos.",
            "Manter notas e estoque alinhados entre diferentes canais.",
            "Acompanhar regras fiscais quando a loja vende para vários estados."
        ],
        "faqs": [
            {
                "q": "Vender para outros estados muda a rotina fiscal?",
                "a": "Pode mudar. Origem, destino, tipo de cliente e produto influenciam as regras que precisam ser observadas."
            },
            {
                "q": "Como conferir se o marketplace repassou o valor correto?",
                "a": "É preciso conciliar vendas, comissões, fretes, cancelamentos e prazos de recebimento com o extrato da plataforma e o financeiro."
            },
            {
                "q": "A loja precisa integrar sistema e contabilidade?",
                "a": "A integração não é obrigatória em todos os casos, mas reduz digitação manual e facilita a conferência quando o volume de vendas cresce."
            },
            {
                "q": "Por que estoque e nota precisam estar alinhados?",
                "a": "Porque divergências podem causar venda sem saldo, diferenças de custo e problemas na conferência fiscal."
            },
            {
                "q": "O regime tributário do e-commerce muda conforme o crescimento?",
                "a": "Pode ser necessário revisar. Volume de vendas, margem, mix de produtos e operação interestadual são fatores importantes na análise."
            }
        ],
        "waMsg": "Olá, quero organizar a contabilidade do meu e-commerce."
    },
    "abertura": {
        "menuTitle": "Abertura de Empresa Facilitada",
        "eyebrow": "ABERTURA DE EMPRESA",
        "heroFile": "esp-abertura-de-empresa-facilitada-barbosa.jpeg",
        "h1": "Abertura de Empresa Facilitada",
        "intro": "Abrir um CNPJ é mais do que preencher um cadastro. Antes do registro, vale definir atividade, formato da empresa, endereço, capital e tributação para que o negócio comece com uma base coerente.",
        "topics": [
            "Atividades e CNAEs conferidos",
            "Formato jurídico definido",
            "Regime tributário analisado",
            "Documentos e registros em sequência",
            "Licenças verificadas conforme a atividade",
            "Primeiras obrigações explicadas"
        ],
        "challenges": [
            "Escolher atividade sem considerar o que a empresa realmente vai fazer.",
            "Definir enquadramento só olhando a primeira alíquota.",
            "Começar a operar sem saber quais obrigações surgem depois do CNPJ."
        ],
        "faqs": [
            {
                "q": "Quanto tempo leva para abrir uma empresa?",
                "a": "O prazo varia conforme atividade, município, necessidade de licenças e análise dos órgãos envolvidos."
            },
            {
                "q": "Posso escolher qualquer CNAE?",
                "a": "O CNAE precisa representar as atividades que a empresa exercerá e estar compatível com regras de local, licenças e tributação."
            },
            {
                "q": "O Simples Nacional é sempre a melhor escolha para quem está começando?",
                "a": "Não. É uma opção comum, mas a análise deve considerar atividade, faturamento estimado, folha e forma de operação."
            },
            {
                "q": "Preciso definir capital social antes da abertura?",
                "a": "Sim, a constituição exige essa informação. O valor deve ser pensado de acordo com a realidade e a estrutura inicial do negócio."
            },
            {
                "q": "Depois que o CNPJ sai, já posso esquecer da contabilidade?",
                "a": "Não. A partir da abertura começam obrigações fiscais, contábeis e, em alguns casos, trabalhistas que precisam de acompanhamento."
            }
        ],
        "waMsg": "Olá, quero abrir minha empresa e entender os primeiros passos."
    },
    "reforma": {
        "menuTitle": "Consultoria para Reforma Tributária",
        "eyebrow": "REFORMA TRIBUTÁRIA",
        "heroFile": "esp-consultoria-reforma-tributaria-barbosa.jpeg",
        "h1": "Consultoria para Reforma Tributária",
        "intro": "A Reforma Tributária muda regras aos poucos, e o impacto não será igual para todas as empresas. A KM acompanha a transição para identificar o que precisa ser revisto em cadastros, sistemas, contratos, preços e caixa.",
        "topics": [
            "IBS e CBS acompanhados na transição",
            "Cadastros fiscais revisados",
            "Preços e margens simulados",
            "Sistemas preparados por etapa",
            "Contratos analisados quando necessário",
            "Fluxo de caixa monitorado"
        ],
        "challenges": [
            "Entender quais mudanças realmente afetam a operação da empresa.",
            "Adaptar sistemas e cadastros sem esperar a última hora.",
            "Revisar preço e caixa conforme as regras entram em vigor."
        ],
        "faqs": [
            {
                "q": "A Reforma Tributária muda tudo de uma vez?",
                "a": "Não. A implementação ocorre em etapas e existe um período de transição, por isso o acompanhamento precisa ser contínuo."
            },
            {
                "q": "IBS e CBS afetam todas as empresas da mesma forma?",
                "a": "Não. O efeito depende do segmento, do regime, da cadeia de compras e vendas e de como a empresa utiliza créditos."
            },
            {
                "q": "É preciso revisar preços antes da transição terminar?",
                "a": "Pode ser necessário. Simulações ajudam a entender como mudanças de tributos e créditos podem afetar custo e margem."
            },
            {
                "q": "Sistemas de emissão de notas precisarão ser atualizados?",
                "a": "Os sistemas precisam acompanhar os layouts e regras definidos para a transição. O momento e o tipo de ajuste dependem do sistema e da operação."
            },
            {
                "q": "Quando a empresa deve começar a se preparar?",
                "a": "O quanto antes para mapear impactos e montar um plano de adaptação. Isso permite fazer ajustes por etapas, sem depender de mudanças de última hora."
            }
        ],
        "waMsg": "Olá, quero entender como a Reforma Tributária pode afetar minha empresa."
    }
};

            // ---------- Seção "Soluções especializadas" (4 cards grandes por especialidade) ----------
            const espSolutionsIntro = "Veja onde a KM pode entrar na rotina para organizar informações, reduzir retrabalho e deixar mais claro o que precisa ser acompanhado.";

            const espSolutions = {
    "prestadores": {
        "title": "Como a KM organiza a rotina de uma empresa de serviços?",
        "faqLabel": "Prestadores de Serviços",
        "cards": [
            {
                "icon": "fa-percent",
                "title": "Fator R acompanhado de perto",
                "desc": "Conferimos a relação entre folha e faturamento ao longo do tempo para que possíveis mudanças de enquadramento não passem despercebidas."
            },
            {
                "icon": "fa-chart-line",
                "title": "Tributação com contexto",
                "desc": "Revisamos regime, atividade e números atuais antes de orientar qualquer mudança na forma de tributação."
            },
            {
                "icon": "fa-file-invoice",
                "title": "Notas e obrigações em ordem",
                "desc": "Estruturamos uma rotina para emissão de notas, apuração e entrega das obrigações dentro dos prazos."
            },
            {
                "icon": "fa-users",
                "title": "Folha sem improviso",
                "desc": "Organizamos admissões, folha, férias, rescisões e eventos do eSocial junto com a realidade da empresa."
            }
        ]
    },
    "comercio": {
        "title": "Como a KM ajuda a colocar os números do comércio em ordem?",
        "faqLabel": "Comércio",
        "cards": [
            {
                "icon": "fa-boxes-stacked",
                "title": "Estoque que conversa com o financeiro",
                "desc": "Entradas, saídas e produtos parados passam a ser acompanhados junto com compras e caixa."
            },
            {
                "icon": "fa-receipt",
                "title": "Impostos das vendas conferidos",
                "desc": "Revisamos documentos e tributação das operações para reduzir divergências e retrabalho fiscal."
            },
            {
                "icon": "fa-chart-pie",
                "title": "Margem mais fácil de enxergar",
                "desc": "Organizamos vendas, custos e despesas em informações que ajudam a entender onde o resultado está sendo formado."
            },
            {
                "icon": "fa-scale-balanced",
                "title": "Regime revisto quando o negócio muda",
                "desc": "Se faturamento, margem ou operação mudarem, reavaliamos se o enquadramento continua coerente."
            }
        ]
    },
    "industria": {
        "title": "Como a KM conecta contabilidade e operação industrial?",
        "faqLabel": "Indústria",
        "cards": [
            {
                "icon": "fa-industry",
                "title": "Custos produtivos organizados",
                "desc": "Separamos informações de insumos, mão de obra e demais gastos para melhorar a leitura do custo de produção."
            },
            {
                "icon": "fa-warehouse",
                "title": "Estoque por etapa",
                "desc": "Acompanhamos matéria-prima, itens em processo e produto acabado para reduzir diferenças entre operação e registros."
            },
            {
                "icon": "fa-file-invoice",
                "title": "Rotina fiscal industrial",
                "desc": "Conferimos documentos e obrigações considerando as particularidades das compras, produção e vendas da indústria."
            },
            {
                "icon": "fa-coins",
                "title": "Créditos e enquadramento revisados",
                "desc": "Analisamos, com base em documentos e legislação, pontos que podem afetar créditos e regime tributário."
            }
        ]
    },
    "liberais": {
        "title": "Como a KM ajuda a organizar sua atividade profissional?",
        "faqLabel": "Profissionais Liberais",
        "cards": [
            {
                "icon": "fa-scale-unbalanced",
                "title": "PF ou PJ com números na mesa",
                "desc": "Comparamos os impactos de cada formato usando faturamento, despesas e tipo de atividade como base."
            },
            {
                "icon": "fa-file-contract",
                "title": "CNPJ estruturado quando fizer sentido",
                "desc": "Se a pessoa jurídica for o caminho escolhido, organizamos atividade, cadastro e documentos desde a abertura."
            },
            {
                "icon": "fa-chart-line",
                "title": "Tributação acompanhada",
                "desc": "Revisamos o enquadramento conforme a renda e a estrutura da atividade mudam."
            },
            {
                "icon": "fa-file-lines",
                "title": "IR e retiradas organizados",
                "desc": "Ajudamos a separar pró-labore, outras retiradas e informações necessárias para as declarações."
            }
        ]
    },
    "clinicas": {
        "title": "Como a KM organiza a contabilidade de clínicas e consultórios?",
        "faqLabel": "Clínicas e Consultórios",
        "cards": [
            {
                "icon": "fa-percent",
                "title": "Folha e faturamento na mesma análise",
                "desc": "Acompanhamos esses números juntos quando eles podem influenciar a tributação da atividade."
            },
            {
                "icon": "fa-users",
                "title": "Equipe e eSocial em ordem",
                "desc": "Estruturamos a rotina trabalhista considerando funcionários e demais vínculos que precisam de tratamento adequado."
            },
            {
                "icon": "fa-wallet",
                "title": "Recebimentos conciliados",
                "desc": "Organizamos pacientes, convênios, glosas, repasses e despesas para melhorar a leitura financeira."
            },
            {
                "icon": "fa-heart-pulse",
                "title": "Tributação revisada conforme a estrutura",
                "desc": "Analisamos atividades, sócios e operação da clínica antes de orientar sobre enquadramento."
            }
        ]
    },
    "ecommerce": {
        "title": "Como a KM ajuda a organizar os bastidores do e-commerce?",
        "faqLabel": "E-commerce",
        "cards": [
            {
                "icon": "fa-route",
                "title": "Vendas interestaduais conferidas",
                "desc": "Acompanhamos as operações para diferentes estados e os pontos fiscais que variam conforme produto e cliente."
            },
            {
                "icon": "fa-store",
                "title": "Marketplace conciliado",
                "desc": "Taxas, comissões, cancelamentos e repasses são organizados para mostrar o valor efetivamente recebido."
            },
            {
                "icon": "fa-plug",
                "title": "Notas conectadas aos sistemas",
                "desc": "Buscamos reduzir divergências entre pedidos, emissão fiscal e informações enviadas para a contabilidade."
            },
            {
                "icon": "fa-boxes-stacked",
                "title": "Estoque e caixa acompanhados juntos",
                "desc": "A leitura de produtos vendidos, saldo e recebimentos ajuda a identificar diferenças entre operação e financeiro."
            }
        ]
    },
    "abertura": {
        "title": "Como a KM ajuda sua empresa a começar organizada?",
        "faqLabel": "Abertura de Empresa",
        "cards": [
            {
                "icon": "fa-file-contract",
                "title": "Atividade definida antes do registro",
                "desc": "Conversamos sobre o que a empresa realmente fará para escolher CNAEs compatíveis com a operação."
            },
            {
                "icon": "fa-calculator",
                "title": "Enquadramento analisado antes da primeira guia",
                "desc": "Faturamento estimado, atividade e estrutura entram na comparação do regime inicial."
            },
            {
                "icon": "fa-file-signature",
                "title": "Documentos em uma sequência clara",
                "desc": "Organizamos contrato, registros, inscrições e demais etapas para reduzir idas e voltas."
            },
            {
                "icon": "fa-life-ring",
                "title": "Orientação depois do CNPJ",
                "desc": "Explicamos as primeiras obrigações e ajudamos a empresa a montar sua rotina contábil desde o início."
            }
        ]
    },
    "reforma": {
        "title": "Como a KM acompanha a adaptação à Reforma Tributária?",
        "faqLabel": "Reforma Tributária",
        "cards": [
            {
                "icon": "fa-arrows-rotate",
                "title": "Impactos mapeados por operação",
                "desc": "Analisamos como compras, vendas e créditos podem ser afetados pelas novas regras."
            },
            {
                "icon": "fa-tag",
                "title": "Preço e margem simulados",
                "desc": "Ajudamos a comparar cenários para entender onde a tributação pode alterar custo e formação de preço."
            },
            {
                "icon": "fa-gears",
                "title": "Sistemas e cadastros preparados",
                "desc": "Mapeamos os pontos que dependem de atualização em ERP, notas e cadastros fiscais."
            },
            {
                "icon": "fa-route",
                "title": "Transição organizada por etapas",
                "desc": "Acompanhamos o cronograma para que ajustes sejam feitos conforme as regras entram em vigor."
            }
        ]
    }
};

            // ---------- Seção "Como funciona na prática" (carrossel de etapas) ----------
            const espHowItWorks = {
    "prestadores": {
        "title": "Como organizamos o acompanhamento de quem presta serviços",
        "steps": [
            {
                "icon": "fa-magnifying-glass",
                "title": "Entendemos a atividade",
                "desc": "Começamos pelo tipo de serviço, faturamento, clientes e estrutura atual para saber quais rotinas precisam de mais atenção."
            },
            {
                "icon": "fa-percent",
                "title": "Conferimos o Fator R",
                "desc": "Acompanhamos folha e faturamento quando essa relação pode influenciar a tributação da atividade."
            },
            {
                "icon": "fa-chart-line",
                "title": "Revisamos o enquadramento",
                "desc": "Comparamos cenários com dados atuais antes de recomendar qualquer alteração de regime."
            },
            {
                "icon": "fa-file-invoice",
                "title": "Organizamos notas e prazos",
                "desc": "Definimos uma rotina para documentos, apurações e declarações, evitando que tudo fique para a última hora."
            },
            {
                "icon": "fa-users",
                "title": "Cuidamos da folha",
                "desc": "Admissões, férias, rescisões e eSocial entram no calendário para que a parte trabalhista caminhe junto com a contabilidade."
            },
            {
                "icon": "fa-chart-pie",
                "title": "Traduzimos os números",
                "desc": "Relatórios e informações são apresentados com foco no que mudou e no que o empresário precisa acompanhar."
            },
            {
                "icon": "fa-arrows-rotate",
                "title": "Reavaliamos quando a empresa muda",
                "desc": "Crescimento de faturamento, nova equipe ou mudança de atividade são sinais para revisar a estrutura tributária."
            },
            {
                "icon": "fa-headset",
                "title": "Mantemos um canal de orientação",
                "desc": "Dúvidas da rotina são tratadas com contexto, evitando respostas genéricas que não consideram a empresa."
            }
        ]
    },
    "comercio": {
        "title": "Como colocamos a rotina contábil do comércio em ordem",
        "steps": [
            {
                "icon": "fa-magnifying-glass",
                "title": "Conhecemos a operação",
                "desc": "Entendemos canais de venda, mix de produtos, fornecedores e rotina de compras antes de organizar os controles."
            },
            {
                "icon": "fa-boxes-stacked",
                "title": "Conferimos o estoque",
                "desc": "Entradas, saídas e saldos são analisados para aproximar o estoque registrado do que existe na operação."
            },
            {
                "icon": "fa-receipt",
                "title": "Revisamos documentos das vendas",
                "desc": "Notas de compra e venda entram em uma rotina de conferência para reduzir divergências fiscais."
            },
            {
                "icon": "fa-scale-balanced",
                "title": "Analisamos a tributação",
                "desc": "Faturamento, margem e operação ajudam a avaliar se o regime adotado continua coerente."
            },
            {
                "icon": "fa-chart-pie",
                "title": "Mostramos custo e margem",
                "desc": "Organizamos informações que ajudam a entender quanto sobra depois de mercadoria, impostos e despesas."
            },
            {
                "icon": "fa-wallet",
                "title": "Acompanhamos o caixa",
                "desc": "Vencimentos, recebimentos e sazonalidade entram na leitura para evitar decisões baseadas apenas no saldo do banco."
            },
            {
                "icon": "fa-chart-line",
                "title": "Comparamos períodos",
                "desc": "A evolução de vendas, estoque e margem ajuda a identificar tendências e pontos que merecem ajuste."
            },
            {
                "icon": "fa-headset",
                "title": "Apoiamos decisões da rotina",
                "desc": "Compras maiores, novos canais ou expansão são discutidos com base nas informações que a empresa já tem."
            }
        ]
    },
    "industria": {
        "title": "Como acompanhamos uma operação industrial",
        "steps": [
            {
                "icon": "fa-magnifying-glass",
                "title": "Mapeamos a produção",
                "desc": "Entendemos insumos, etapas produtivas, estoque e fluxo de documentos para saber onde surgem as principais diferenças."
            },
            {
                "icon": "fa-industry",
                "title": "Separamos os custos",
                "desc": "Matéria-prima, mão de obra e demais gastos são organizados para melhorar a leitura do custo de fabricação."
            },
            {
                "icon": "fa-warehouse",
                "title": "Alinhamos estoque e produção",
                "desc": "Conferimos movimentações de insumos, itens em processo e produtos acabados com os registros existentes."
            },
            {
                "icon": "fa-file-invoice",
                "title": "Revisamos a rotina fiscal",
                "desc": "Documentos de entrada e saída são analisados considerando as particularidades da operação industrial."
            },
            {
                "icon": "fa-file-invoice-dollar",
                "title": "Conferimos possíveis créditos",
                "desc": "A análise parte de documentos, regime e natureza dos insumos para verificar o tratamento aplicável."
            },
            {
                "icon": "fa-chart-line",
                "title": "Reavaliamos o regime",
                "desc": "Porte, margem, volume de compras e vendas e possibilidade de créditos entram na comparação tributária."
            },
            {
                "icon": "fa-chart-pie",
                "title": "Apresentamos indicadores de custo",
                "desc": "A empresa recebe informações que ajudam a comparar produtos, linhas ou períodos sem depender apenas do faturamento."
            },
            {
                "icon": "fa-headset",
                "title": "Acompanhamos mudanças na operação",
                "desc": "Novo produto, fornecedor, máquina ou mercado pode alterar custos e rotinas fiscais, por isso o acompanhamento continua."
            }
        ]
    },
    "liberais": {
        "title": "Como organizamos a contabilidade de profissionais liberais",
        "steps": [
            {
                "icon": "fa-magnifying-glass",
                "title": "Entendemos como você trabalha",
                "desc": "Analisamos atividade, faturamento, despesas e perfil dos clientes antes de falar em CNPJ ou regime."
            },
            {
                "icon": "fa-scale-unbalanced",
                "title": "Comparamos PF e PJ",
                "desc": "Colocamos lado a lado obrigações e impactos de cada formato para apoiar uma escolha consciente."
            },
            {
                "icon": "fa-file-contract",
                "title": "Estruturamos o CNPJ, se necessário",
                "desc": "Se a pessoa jurídica fizer sentido, organizamos CNAE, registros e demais passos de abertura ou regularização."
            },
            {
                "icon": "fa-chart-line",
                "title": "Definimos a rotina tributária",
                "desc": "Notas, impostos e obrigações passam a seguir um calendário compatível com a atividade."
            },
            {
                "icon": "fa-hand-holding-dollar",
                "title": "Organizamos pró-labore e retiradas",
                "desc": "As movimentações entre profissional e empresa são separadas para facilitar controle e registros."
            },
            {
                "icon": "fa-file-lines",
                "title": "Preparamos o IR ao longo do ano",
                "desc": "Documentos e rendimentos são organizados com antecedência para reduzir correria na época da declaração."
            },
            {
                "icon": "fa-wallet",
                "title": "Separamos o pessoal do profissional",
                "desc": "Orientamos uma rotina financeira que deixe claro o que pertence à atividade e o que é gasto pessoal."
            },
            {
                "icon": "fa-headset",
                "title": "Revisamos conforme o faturamento cresce",
                "desc": "Mudanças na renda ou no tipo de cliente podem exigir ajustes na estrutura e na tributação."
            }
        ]
    },
    "clinicas": {
        "title": "Como acompanhamos clínicas e consultórios",
        "steps": [
            {
                "icon": "fa-magnifying-glass",
                "title": "Conhecemos a estrutura do atendimento",
                "desc": "Mapeamos atividades, profissionais, sócios, pacientes e convênios para entender a rotina financeira e tributária."
            },
            {
                "icon": "fa-percent",
                "title": "Analisamos folha e faturamento",
                "desc": "Quando aplicável, acompanhamos a relação entre esses valores para verificar reflexos na tributação."
            },
            {
                "icon": "fa-users",
                "title": "Organizamos a equipe",
                "desc": "Folha, admissões, férias, rescisões e eSocial passam a seguir uma rotina definida."
            },
            {
                "icon": "fa-wallet",
                "title": "Conferimos o faturamento",
                "desc": "Receitas de pacientes e convênios são comparadas com repasses e despesas para melhorar a leitura financeira."
            },
            {
                "icon": "fa-chart-line",
                "title": "Revisamos a tributação",
                "desc": "Atividade, estrutura e números atuais servem de base para avaliar o enquadramento."
            },
            {
                "icon": "fa-sitemap",
                "title": "Mantemos os registros societários coerentes",
                "desc": "Quando há sócios, ajudamos a manter informações e rotinas contábeis alinhadas à estrutura formal da clínica."
            },
            {
                "icon": "fa-chart-pie",
                "title": "Apresentamos números por período",
                "desc": "Receitas, despesas e resultado são organizados para que a gestão acompanhe evolução e sazonalidade."
            },
            {
                "icon": "fa-headset",
                "title": "Acompanhamos mudanças na clínica",
                "desc": "Entrada de profissionais, novos serviços ou expansão são avaliados pelos impactos contábeis e fiscais que podem gerar."
            }
        ]
    },
    "ecommerce": {
        "title": "Como organizamos a contabilidade de uma loja online",
        "steps": [
            {
                "icon": "fa-magnifying-glass",
                "title": "Mapeamos canais e plataformas",
                "desc": "Entendemos onde a loja vende, quais meios recebe e como os pedidos viram notas e movimentações financeiras."
            },
            {
                "icon": "fa-route",
                "title": "Revisamos vendas para outros estados",
                "desc": "Conferimos os pontos fiscais que variam conforme destino, cliente e produto."
            },
            {
                "icon": "fa-store",
                "title": "Conciliamos marketplaces",
                "desc": "Vendas brutas, taxas, cancelamentos e repasses são comparados para chegar ao valor efetivamente recebido."
            },
            {
                "icon": "fa-file-invoice",
                "title": "Organizamos a emissão fiscal",
                "desc": "Buscamos uma rotina de notas compatível com o volume da loja e com os dados dos pedidos."
            },
            {
                "icon": "fa-plug",
                "title": "Conectamos sistemas sempre que possível",
                "desc": "Integrações ajudam a reduzir digitação manual e diferenças entre plataforma, ERP e contabilidade."
            },
            {
                "icon": "fa-boxes-stacked",
                "title": "Conferimos estoque entre canais",
                "desc": "Acompanhamos saldos e movimentações para identificar divergências antes que afetem venda e fechamento."
            },
            {
                "icon": "fa-chart-line",
                "title": "Revisamos o enquadramento com o crescimento",
                "desc": "Aumento de volume, novos estados ou mudança de mix podem exigir nova análise tributária."
            },
            {
                "icon": "fa-headset",
                "title": "Mantemos a operação acompanhada",
                "desc": "A rotina é revista conforme a loja ganha canais, produtos e volume de vendas."
            }
        ]
    },
    "abertura": {
        "title": "Como conduzimos a abertura do CNPJ",
        "steps": [
            {
                "icon": "fa-file-contract",
                "title": "Definimos as atividades",
                "desc": "Antes do registro, entendemos o que a empresa vai fazer para selecionar CNAEs compatíveis."
            },
            {
                "icon": "fa-calculator",
                "title": "Analisamos o enquadramento inicial",
                "desc": "Faturamento estimado, atividade e estrutura ajudam a definir o regime que será estudado para o começo."
            },
            {
                "icon": "fa-file-signature",
                "title": "Preparamos os documentos",
                "desc": "Contrato e informações cadastrais são organizados para os registros necessários."
            },
            {
                "icon": "fa-stamp",
                "title": "Acompanhamos inscrições e licenças",
                "desc": "Verificamos o que a atividade e o endereço exigem em cada órgão envolvido."
            },
            {
                "icon": "fa-scale-balanced",
                "title": "Orientamos sobre capital social",
                "desc": "O valor é definido com base na realidade do negócio e na estrutura planejada para começar."
            },
            {
                "icon": "fa-building-columns",
                "title": "Separamos empresa e pessoa física",
                "desc": "Desde o início, orientamos a criação de uma rotina financeira própria para o CNPJ."
            },
            {
                "icon": "fa-file-invoice",
                "title": "Explicamos as primeiras obrigações",
                "desc": "Depois da abertura, mostramos quais documentos, impostos e prazos entram na rotina da empresa."
            },
            {
                "icon": "fa-life-ring",
                "title": "Acompanhamos os primeiros meses",
                "desc": "O suporte continua para ajustar cadastros e tirar dúvidas que surgem quando a empresa começa a operar."
            }
        ]
    },
    "reforma": {
        "title": "Como organizamos a preparação para a Reforma Tributária",
        "steps": [
            {
                "icon": "fa-magnifying-glass",
                "title": "Mapeamos onde a mudança toca a empresa",
                "desc": "Compras, vendas, créditos, preço e sistemas são analisados para identificar os pontos mais relevantes da transição."
            },
            {
                "icon": "fa-arrows-rotate",
                "title": "Acompanhamos IBS e CBS",
                "desc": "Seguimos as regras publicadas e avaliamos como elas se conectam à operação da empresa."
            },
            {
                "icon": "fa-tag",
                "title": "Simulamos preço e margem",
                "desc": "Cenários ajudam a entender possíveis impactos antes de alterar condições comerciais."
            },
            {
                "icon": "fa-gears",
                "title": "Listamos ajustes de sistema",
                "desc": "ERP, emissão de notas e cadastros são revisados para identificar o que precisa ser atualizado em cada fase."
            },
            {
                "icon": "fa-file-contract",
                "title": "Revisamos contratos quando necessário",
                "desc": "Cláusulas de preço e tributos podem exigir atenção durante a transição, especialmente em contratos de prazo mais longo."
            },
            {
                "icon": "fa-wallet",
                "title": "Observamos o fluxo de caixa",
                "desc": "Mudanças na forma de recolhimento e mecanismos como split payment merecem acompanhamento financeiro."
            },
            {
                "icon": "fa-people-group",
                "title": "Orientamos as equipes envolvidas",
                "desc": "Fiscal, financeiro e comercial precisam entender o que muda em suas rotinas para evitar informações desencontradas."
            },
            {
                "icon": "fa-route",
                "title": "Atualizamos o plano conforme saem novas regras",
                "desc": "A preparação não é feita uma vez só. O cronograma é revisto à medida que regulamentações e prazos avançam."
            }
        ]
    }
};

            window.espSeo = {};
            Object.keys(espData).forEach(function(slug) {
                window.espSeo['esp-' + slug] = {
                    title: espData[slug].h1 + " | KM Consultoria",
                    desc: espData[slug].intro.substring(0, 155)
                };
            });

            function espRenderCardGrid(items, iconMap) {
                return '<div class="esp-card-grid">' + items.map(function(t, i) {
                    return '<div class="esp-card"><div class="esp-card-icon"><i class="fa-solid ' + (iconMap[i] || "fa-check") + '"></i></div><p class="esp-card-title">' + t + '</p></div>';
                }).join('') + '</div>';
            }

            const espHelpIcons = ["fa-lightbulb", "fa-scale-balanced", "fa-file-invoice", "fa-list-check", "fa-chart-line", "fa-magnifying-glass-chart"];
            const espSolutionIcons = ["fa-list-check", "fa-chart-line", "fa-magnifying-glass-chart", "fa-gears", "fa-shield-halved", "fa-handshake"];

            function hfpInit(carousel) {
                if (!carousel) return;
                const track = carousel.querySelector('.hfp-track');
                const cards = Array.prototype.slice.call(track.children);
                const dotsWrap = carousel.querySelector('.hfp-dots');
                const prevBtn = carousel.querySelector('.hfp-arrow-prev');
                const nextBtn = carousel.querySelector('.hfp-arrow-next');
                let index = 0;

                function visiblePerView() {
                    const w = window.innerWidth;
                    if (w <= 767) return 1;
                    if (w <= 1099) return 2;
                    return 3;
                }

                function maxIndex() {
                    return Math.max(0, cards.length - visiblePerView());
                }

                function stepPx() {
                    if (!cards[1]) return 0;
                    return cards[1].offsetLeft - cards[0].offsetLeft;
                }

                function buildDots() {
                    dotsWrap.innerHTML = '';
                    const count = maxIndex() + 1;
                    for (let i = 0; i < count; i++) {
                        const dot = document.createElement('span');
                        dot.addEventListener('click', function() { index = i; render(); });
                        dotsWrap.appendChild(dot);
                    }
                }

                function render() {
                    index = Math.max(0, Math.min(index, maxIndex()));
                    track.style.transform = 'translateX(-' + (index * stepPx()) + 'px)';
                    const atStart = index <= 0;
                    const atEnd = index >= maxIndex();
                    prevBtn.style.opacity = atStart ? '0.35' : '1';
                    prevBtn.style.pointerEvents = atStart ? 'none' : 'auto';
                    nextBtn.style.opacity = atEnd ? '0.35' : '1';
                    nextBtn.style.pointerEvents = atEnd ? 'none' : 'auto';
                    const dots = dotsWrap.querySelectorAll('span');
                    dots.forEach(function(d, i) { d.classList.toggle('hfp-dot-active', i === index); });
                }

                prevBtn.addEventListener('click', function() { if (index > 0) { index--; render(); } });
                nextBtn.addEventListener('click', function() { if (index < maxIndex()) { index++; render(); } });

                // Arrastar com o dedo (touch) ou o mouse
                const viewport = carousel.querySelector('.hfp-viewport') || track.parentElement;
                if (viewport) {
                    viewport.style.touchAction = 'pan-y';
                    let dragStartX = null, dragging = false;
                    viewport.addEventListener('pointerdown', function(e) { dragging = true; dragStartX = e.clientX; });
                    viewport.addEventListener('pointerup', function(e) {
                        if (!dragging || dragStartX === null) { dragging = false; return; }
                        const delta = e.clientX - dragStartX;
                        if (Math.abs(delta) > 35) {
                            if (delta < 0 && index < maxIndex()) { index++; render(); }
                            else if (delta > 0 && index > 0) { index--; render(); }
                        }
                        dragging = false; dragStartX = null;
                    });
                    viewport.addEventListener('pointercancel', function() { dragging = false; dragStartX = null; });
                    viewport.addEventListener('pointerleave', function() { dragging = false; dragStartX = null; });
                }

                window.addEventListener('resize', function() { buildDots(); render(); });

                buildDots();
                render();
            }

            function espRenderPage(slug) {
                const d = espData[slug];
                const section = document.getElementById('esp-' + slug);
                if (!d || !section) return;

                const waHelp = encodeURIComponent(d.waMsg);
                const topicsHelp = d.topics.slice(0, 3);
                const topicsSolutions = d.topics.slice(3, 6);
                const ch = espChallengeCards[slug];

                section.innerHTML = '' +
                    '<div class="specialty-hero">' +
                        '<div class="specialty-hero__media">' +
                            (d.heroFile
                                ? '<img src="' + (STOCK_IMG_MAP[d.heroFile] || ('imagem 2/' + d.heroFile)) + '" alt="' + d.h1 + ' | KM Consultoria" loading="lazy" onerror="this.parentElement.innerHTML=\'<i class=\\\'fa-solid fa-image\\\' style=\\\'font-size:40px;\\\'></i><span style=\\\'font-size:11px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;\\\'>Imagem principal da especialidade</span>\'">'
                                : '<i class="fa-solid fa-image" style="font-size:40px;"></i><span style="font-size:11px; font-weight:800; letter-spacing:0.1em; text-transform:uppercase;">Imagem principal da especialidade</span>') +
                        '</div>' +
                        '<div class="specialty-hero__content">' +
                            '<span class="specialty-hero__eyebrow">' + d.eyebrow + '</span>' +
                            '<h1 class="specialty-hero__title">' + d.h1 + '</h1>' +
                            '<div class="specialty-hero__breadcrumb">' +
                                '<a href="#" onclick="navigateTo(\'inicio\')"><i class="fa-solid fa-house"></i> Início</a>' +
                                '<span class="sep">|</span>' +
                                '<span>Especialidades</span>' +
                                '<span class="sep">|</span>' +
                                '<span>' + d.menuTitle + '</span>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +

                    (ch ? (
                    '<div class="specialty-challenges"><div class="specialty-challenges__inner">' +
                        '<span class="specialty-challenges__eyebrow">Pontos que merecem atenção</span>' +
                        '<h2 class="specialty-challenges__title">' + ch.title + '</h2>' +
                        '<p class="specialty-challenges__desc">' + espChallengesDesc + '</p>' +
                        '<div class="specialty-challenges__grid">' +
                            ch.cards.map(function(c) {
                                return '<div class="specialty-challenge-card">' +
                                    '<div class="specialty-challenge-card__icon"><i class="fa-solid ' + c.icon + '"></i></div>' +
                                    '<h3 class="specialty-challenge-card__title">' + c.title + '</h3>' +
                                    '<p class="specialty-challenge-card__desc">' + c.desc + '</p>' +
                                '</div>';
                            }).join('') +
                        '</div>' +
                    '</div></div>'
                    ) : '') +

                    (espSolutions[slug] ? (
                    '<div class="esp-solutions"><div class="esp-solutions-inner">' +
                        '<h2 class="esp-solutions-title">' + espSolutions[slug].title + '</h2>' +
                        '<p class="esp-solutions-intro">' + espSolutionsIntro + '</p>' +
                        '<div class="esp-solutions-grid">' +
                            espSolutions[slug].cards.map(function(c) {
                                const cardWaText = encodeURIComponent('Olá, gostaria de entender mais sobre ' + c.title + '.');
                                return '<div class="esp-solution-card">' +
                                    '<div class="esp-solution-card__icon"><i class="fa-solid ' + c.icon + '"></i></div>' +
                                    '<h3 class="esp-solution-card__title">' + c.title + '</h3>' +
                                    '<p class="esp-solution-card__desc">' + c.desc + '</p>' +
                                    '<a class="esp-solution-card__link" href="https://wa.me/5516974058132?text=' + cardWaText + '" target="_blank" rel="noopener noreferrer">Ver como funciona <i class="fa-solid fa-arrow-right"></i></a>' +
                                '</div>';
                            }).join('') +
                        '</div>' +
                    '</div></div>'
                    ) : '') +

                    (espHowItWorks[slug] ? (
                    '<div class="hfp-section">' +
                        '<div class="hfp-grid-bg fx-parallax" data-speed="0.15"></div>' +
                        '<div class="hfp-navy-host fx-navy-host"></div>' +
                        '<div class="hfp-header">' +
                            '<span class="hfp-eyebrow">Como organizamos o trabalho</span>' +
                            '<h2 class="hfp-title">' + espHowItWorks[slug].title + '</h2>' +
                            '<p class="hfp-desc">Cada etapa tem um objetivo claro: organizar dados, conferir o que precisa e mostrar ao empresário o que merece atenção.</p>' +
                        '</div>' +
                        '<div class="hfp-carousel">' +
                            '<button type="button" class="hfp-arrow hfp-arrow-prev" aria-label="Etapa anterior"><i class="fa-solid fa-chevron-left"></i></button>' +
                            '<button type="button" class="hfp-arrow hfp-arrow-next" aria-label="Próxima etapa"><i class="fa-solid fa-chevron-right"></i></button>' +
                            '<div class="hfp-viewport">' +
                                '<div class="hfp-track">' +
                                    espHowItWorks[slug].steps.map(function(s) {
                                        return '<div class="hfp-card">' +
                                            '<div class="hfp-card__icon"><i class="fa-solid ' + s.icon + '"></i></div>' +
                                            '<h3 class="hfp-card__title">' + s.title + '</h3>' +
                                            '<p class="hfp-card__desc">' + s.desc + '</p>' +
                                        '</div>';
                                    }).join('') +
                                '</div>' +
                            '</div>' +
                            '<div class="hfp-dots"></div>' +
                        '</div>' +
                    '</div>'
                    ) : '') +

                    '<div class="esp-intro-wrap"><div class="esp-intro-inner">' +
                        '<p class="esp-intro-text">' + d.intro + '</p>' +
                        '<a class="esp-intro-btn" href="https://wa.me/5516974058132?text=' + waHelp + '" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp"></i> Conversar com a KM</a>' +
                        '<div class="esp-links-inline">' +
                            '<a href="#" onclick="navigateTo(\'servicos\')">Conhecer todos os serviços</a>' +
                            '<a href="#" onclick="navigateTo(\'quem-somos\')">Entender nosso jeito de trabalhar</a>' +
                        '</div>' +
                    '</div></div>' +

                    '<div class="esp-section"><div class="esp-section-inner">' +
                        '<h2 class="esp-section-title">Dúvidas comuns sobre ' + (espSolutions[slug] ? espSolutions[slug].faqLabel : d.menuTitle) + '</h2>' +
                        d.faqs.map(function(f) {
                            return '<details class="esp-faq-item" name="faq-' + slug + '"><summary>' + f.q + '</summary><p>' + f.a + '</p></details>';
                        }).join('') +
                    '</div></div>';

                const hfpCarousel = section.querySelector('.hfp-carousel');
                if (hfpCarousel) hfpInit(hfpCarousel);
            }

            Object.keys(espData).forEach(espRenderPage);

            // ---------- Grade da página geral de Especialidades ----------
        