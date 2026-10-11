
        // Proteção: se o CDN do GSAP falhar (rede, firewall, adblocker), o site não pode travar.
        // Sem isso, um erro "gsap is not defined" impede TODO o JavaScript de rodar,
        // e como a maior parte das imagens do site é inserida via JS, elas somem inteiras.
        if (typeof window.gsap === 'undefined') {
            window.gsap = {
                fromTo: function (targets, from, to) {
                    try {
                        var els = targets instanceof NodeList || Array.isArray(targets) ? targets : (typeof targets === 'string' ? document.querySelectorAll(targets) : [targets]);
                        (els.forEach ? els : [els]).forEach(function (el) {
                            if (!el || !el.style) return;
                            if (to && to.opacity !== undefined) el.style.opacity = to.opacity;
                            el.style.transform = 'none';
                        });
                    } catch (e) {}
                },
                to: function (targets, vars) {
                    try {
                        var els = targets instanceof NodeList || Array.isArray(targets) ? targets : (typeof targets === 'string' ? document.querySelectorAll(targets) : [targets]);
                        (els.forEach ? els : [els]).forEach(function (el) {
                            if (!el || !el.style) return;
                            if (vars && vars.opacity !== undefined) el.style.opacity = vars.opacity;
                        });
                    } catch (e) {}
                },
                from: function () {},
                set: function (targets, vars) {
                    try {
                        var els = targets instanceof NodeList || Array.isArray(targets) ? targets : (typeof targets === 'string' ? document.querySelectorAll(targets) : [targets]);
                        (els.forEach ? els : [els]).forEach(function (el) {
                            if (!el || !el.style) return;
                            if (vars && vars.opacity !== undefined) el.style.opacity = vars.opacity;
                        });
                    } catch (e) {}
                }
            };
        }
    