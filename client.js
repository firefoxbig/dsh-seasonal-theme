window.__ModuleLoader__.load({
  id: 'dsh-seasonal-theme',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const NS = 'seasonalTheme';
    const STORAGE_KEY = 'dsh.seasonal-theme.v1';
    const THEME_SOURCE = 'dsh-seasonal-theme';

    const DICTS = {
      en: {
        'meta.title': 'Four Seasons Theme',
        'meta.description': 'Soft seasonal gradients for the whole Web UI, with a sidebar theme studio and automatic switching.',
        'panel.label': 'Four Seasons',
        'page.eyebrow': 'FOUR SEASONS',
        'page.title': 'Four Seasons',
        'page.subtitle': 'Let the interface drift with the season — soft color, never loud.',
        'current.label': 'Now',
        'current.off': 'DSH original',
        'mode.auto': 'Auto',
        'mode.manual': 'Manual',
        'mode.off': 'Off',
        'auto.title': 'Follow the seasons',
        'auto.desc': 'Switch by month: spring Mar–May, summer Jun–Aug, autumn Sep–Nov, winter Dec–Feb.',
        'auto.on': 'Seasonal switching is on. It updates when the season turns.',
        'auto.off': 'Pick a season below and it stays until you change it.',
        'choose.title': 'Choose a seasonal palette',
        'choose.hint': 'Click a card to apply it instantly',
        'season.spring.name': 'Spring · First Bloom',
        'season.spring.poem': 'New green, a little pink, and rain-washed air.',
        'season.spring.months': 'Mar – May',
        'season.summer.name': 'Summer · Blue Hour',
        'season.summer.poem': 'Cool shade, bright water, and a long open sky.',
        'season.summer.months': 'Jun – Aug',
        'season.autumn.name': 'Autumn · Warm Ember',
        'season.autumn.poem': 'Amber light, dry leaves, and a slower afternoon.',
        'season.autumn.months': 'Sep – Nov',
        'season.winter.name': 'Winter · Frosted Glass',
        'season.winter.poem': 'Pale blue, quiet snow, and a clean cold light.',
        'season.winter.months': 'Dec – Feb',
        'footer.note': 'Tuned for light and dark appearance. Changes apply across the whole app.',
        'footer.reset': 'Restore DSH colors',
        'footer.resetHint': 'Other settings stay untouched',
        'footer.off': 'DSH original palette is active. Pick a season to turn the theme on again.',
        'card.active': 'In use',
        'card.apply': 'Apply {name}',
      },
      zh: {
        'meta.title': '四季主题',
        'meta.description': '随四季流转的柔和渐变主题，带左侧栏主题工作室与自动切换。',
        'panel.label': '四季主题',
        'page.eyebrow': 'FOUR SEASONS',
        'page.title': '四季主题',
        'page.subtitle': '让界面跟着时令，慢慢换一层颜色。',
        'current.label': '当前',
        'current.off': 'DSH 原色',
        'mode.auto': '自动',
        'mode.manual': '手动',
        'mode.off': '已关闭',
        'auto.title': '跟随四季',
        'auto.desc': '按月份自动切换：春 3–5 月，夏 6–8 月，秋 9–11 月，冬 12–2 月。',
        'auto.on': '已按季节自动切换，换季时会更新。',
        'auto.off': '在下方选一套季节色，会保持到下次更换。',
        'choose.title': '挑一套季节色',
        'choose.hint': '点击卡片立即应用',
        'season.spring.name': '春 · 初樱',
        'season.spring.poem': '风里有一点新绿，也有刚开的粉。',
        'season.spring.months': '3 – 5 月',
        'season.summer.name': '夏 · 青岚',
        'season.summer.poem': '树荫微凉，水面很亮，天空很长。',
        'season.summer.months': '6 – 8 月',
        'season.autumn.name': '秋 · 金桂',
        'season.autumn.poem': '琥珀色的光，干脆的叶，慢下来的午后。',
        'season.autumn.months': '9 – 11 月',
        'season.winter.name': '冬 · 霜蓝',
        'season.winter.poem': '淡蓝、安静的雪，还有干净清冷的光。',
        'season.winter.months': '12 – 2 月',
        'footer.note': '浅色与深色外观都已适配，切换后全站生效。',
        'footer.reset': '恢复 DSH 原色',
        'footer.resetHint': '不会改动其他设置',
        'footer.off': '当前使用 DSH 原色。选择任意一个季节即可重新开启。',
        'card.active': '使用中',
        'card.apply': '应用{name}',
      },
    };

    function tokenModes(light, dark) {
      const modes = {};
      Object.keys(light).forEach((token) => {
        modes[token] = { light: light[token], dark: dark[token] };
      });
      return modes;
    }

    function paletteTokens(p) {
      return {
        '--dsw-alias-bg-base': p.base,
        '--dsw-alias-bg-document-preview': p.layer2,
        '--dsw-alias-label-document-preview': p.label2,
        '--dsw-alias-bg-layer-1': p.layer1,
        '--dsw-alias-bg-layer-2': p.layer2,
        '--dsw-alias-bg-layer-3': p.layer3,
        '--dsw-alias-bg-module-platform': p.layer2,
        '--dsw-alias-bg-multi-select': p.layer2,
        '--dsw-alias-bg-overlay': p.overlay,
        '--dsw-alias-border-l1': p.border1,
        '--dsw-alias-border-l2': p.border2,
        '--dsw-alias-border-l3': p.border3,
        '--dsw-alias-border-l4': p.border3,
        '--dsw-alias-brand-primary': p.brand,
        '--dsw-alias-brand-text': p.brandText,
        '--dsw-alias-button-primary-fill': p.brand,
        '--dsw-alias-button-primary-hover': p.brandHover,
        '--dsw-alias-button-primary-dimmed': p.layer2,
        '--dsw-alias-button-floating-fill': p.layer1,
        '--dsw-alias-button-floating-hover': p.layer2,
        '--dsw-alias-button-ghost-active-fill': p.layer2,
        '--dsw-alias-label-primary': p.label1,
        '--dsw-alias-label-primary-dimmed': p.label1,
        '--dsw-alias-label-secondary': p.label2,
        '--dsw-alias-label-tertiary': p.label3,
        '--dsw-alias-label-caption': p.label3,
        '--dsw-alias-link': p.link,
        '--dsw-alias-state-business-primary': p.accent,
        '--dsw-alias-state-business-tertiary': p.accentSoft,
        '--dsw-alias-interactive-bg-hover': p.hover,
        '--dsw-alias-interactive-bg-active': p.active,
        '--dsw-alias-interactive-bg-hover-accent': p.active,
        '--dsw-alias-interactive-bg-hover-solid': p.layer2,
        '--dsw-specific-sidebar-fill': p.sidebar,
        '--dsw-specific-sidebar-nav-item-active': p.sidebarActive,
        '--dsw-specific-sidebar-nav-item-hover': p.sidebarHover,
        '--dsw-specific-sidebar-nav-item-active-accent': p.sidebarAccent,
        '--dsw-specific-bubble': p.bubble,
        '--dsw-specific-bubble-highlight': p.bubbleHi,
        '--dsw-specific-input-major': p.input,
        '--dsw-specific-login-input': p.layer2,
        '--dsw-specific-selector': p.layer2,
        '--dsw-specific-tip': p.layer2,
        '--dsw-specific-menu': p.menu,
        '--dsw-alias-menu-surface-fill': p.menu,
        '--dsw-alias-menu-group-header-fill': p.menuHeader,
        '--dsw-alias-markdown-code-block': p.layer2,
        '--dsw-alias-markdown-code-block-banner': p.layer3,
        '--dsw-alias-markdown-inline-code': p.layer3,
        '--dsw-alias-markdown-tag': p.layer3,
        '--dsw-alias-turn-trigger-bg': p.layer2,
        '--dsw-alias-turn-trigger-bg-hover': p.hover,
      };
    }

    const SEASONS = [
      {
        id: 'spring',
        nameKey: 'season.spring.name',
        poemKey: 'season.spring.poem',
        monthsKey: 'season.spring.months',
        accent: '#c4698d',
        previewLight:
          'radial-gradient(120px 90px at 16% 0%, rgba(243,128,178,.98), transparent 68%),' +
          'radial-gradient(150px 100px at 92% 12%, rgba(148,214,172,.5), transparent 70%),' +
          'linear-gradient(145deg,#fbdae9 0%,#f9d3e5 56%,#f7dfeb 100%)',
        previewDark:
          'radial-gradient(120px 90px at 18% 0%, rgba(214,92,142,.62), transparent 70%),' +
          'radial-gradient(130px 90px at 94% 12%, rgba(72,146,99,.22), transparent 72%),' +
          'linear-gradient(145deg,#2b131f 0%,#230f19 58%,#1b0d14 100%)',
        light: paletteTokens({
          base: 'rgba(250,216,231,.66)', layer1: '#fff8fb', layer2: '#fbdfeb', layer3: '#f8cfe1',
          overlay: '#fbdae8', border1: 'rgba(146,42,83,.14)', border2: 'rgba(146,42,83,.24)', border3: 'rgba(146,42,83,.36)',
          brand: '#9c3f63', brandHover: '#843253', brandText: '#6a2743',
          label1: '#3a1a28', label2: '#744456', label3: '#8a5b70',
          accent: '#c4698d', accentSoft: '#f9cfe0', link: '#a2406a',
          sidebar: 'rgba(246,201,221,.88)', sidebarActive: '#eeb0cb', sidebarHover: '#f4c2d8', sidebarAccent: '#c4698d',
          bubble: '#f2b9d3', bubbleHi: '#eca7c6', input: 'rgba(255,246,251,.94)',
          hover: 'rgba(156,45,88,.10)', active: 'rgba(156,45,88,.18)',
          menu: 'rgba(255,247,251,.94)', menuHeader: 'rgba(252,226,239,.96)',
        }),
        dark: paletteTokens({
          base: 'rgba(43,19,31,.68)', layer1: '#331826', layer2: '#3e1d2f', layer3: '#4b2438',
          overlay: '#582b41', border1: 'rgba(250,176,210,.14)', border2: 'rgba(250,176,210,.24)', border3: 'rgba(250,176,210,.36)',
          brand: '#f0bad2', brandHover: '#e6a9c3', brandText: '#fbd9e6',
          label1: '#fcecf3', label2: '#d6acbf', label3: '#b2879b',
          accent: '#e59bb8', accentSoft: '#4d2a3d', link: '#f0b3cb',
          sidebar: 'rgba(28,9,19,.90)', sidebarActive: '#552e44', sidebarHover: '#3a1c2a', sidebarAccent: '#e59bb8',
          bubble: '#552a45', bubbleHi: '#663352', input: '#341823',
          hover: 'rgba(255,255,255,.08)', active: 'rgba(255,255,255,.15)',
          menu: 'rgba(50,25,38,.94)', menuHeader: 'rgba(43,21,32,.97)',
        }),
      },
      {
        id: 'summer',
        nameKey: 'season.summer.name',
        poemKey: 'season.summer.poem',
        monthsKey: 'season.summer.months',
        accent: '#1f8a9e',
        previewLight:
          'radial-gradient(140px 96px at 10% 0%, rgba(58,178,214,.98), transparent 70%),' +
          'radial-gradient(150px 100px at 94% 10%, rgba(120,220,186,.58), transparent 72%),' +
          'linear-gradient(145deg,#cbeef8 0%,#c7edf7 55%,#cbf0e9 100%)',
        previewDark:
          'radial-gradient(140px 96px at 10% 0%, rgba(48,166,204,.58), transparent 72%),' +
          'radial-gradient(150px 100px at 94% 10%, rgba(34,152,112,.28), transparent 72%),' +
          'linear-gradient(145deg,#0b2b34 0%,#071d24 55%,#05191a 100%)',
        light: paletteTokens({
          base: 'rgba(200,235,245,.66)', layer1: '#f5fdff', layer2: '#dff3f9', layer3: '#cdebf3',
          overlay: '#d9f0f7', border1: 'rgba(4,78,96,.14)', border2: 'rgba(4,78,96,.24)', border3: 'rgba(4,78,96,.36)',
          brand: '#0f5f6e', brandHover: '#0b4b58', brandText: '#083f4a',
          label1: '#06282f', label2: '#325a64', label3: '#457079',
          accent: '#1f8a9e', accentSoft: '#c8ebf3', link: '#176f82',
          sidebar: 'rgba(184,226,238,.88)', sidebarActive: '#a6d9e8', sidebarHover: '#b8e1ee', sidebarAccent: '#1f8a9e',
          bubble: '#9fd8eb', bubbleHi: '#8bcfe5', input: 'rgba(247,254,255,.94)',
          hover: 'rgba(9,104,122,.10)', active: 'rgba(9,104,122,.18)',
          menu: 'rgba(245,253,255,.94)', menuHeader: 'rgba(220,242,249,.96)',
        }),
        dark: paletteTokens({
          base: 'rgba(9,36,44,.68)', layer1: '#0f2e37', layer2: '#143a45', layer3: '#1a4652',
          overlay: '#225462', border1: 'rgba(150,224,242,.14)', border2: 'rgba(150,224,242,.24)', border3: 'rgba(150,224,242,.36)',
          brand: '#a5e6f4', brandHover: '#92d9e8', brandText: '#ccf2fb',
          label1: '#e3f7fd', label2: '#9ec2cd', label3: '#7ba0ab',
          accent: '#63c3d6', accentSoft: '#164653', link: '#82d5e6',
          sidebar: 'rgba(4,20,26,.90)', sidebarActive: '#1c5060', sidebarHover: '#0f2f39', sidebarAccent: '#63c3d6',
          bubble: '#17505e', bubbleHi: '#1f6373', input: '#0d2b33',
          hover: 'rgba(255,255,255,.08)', active: 'rgba(255,255,255,.15)',
          menu: 'rgba(16,46,55,.94)', menuHeader: 'rgba(12,38,46,.97)',
        }),
      },
      {
        id: 'autumn',
        nameKey: 'season.autumn.name',
        poemKey: 'season.autumn.poem',
        monthsKey: 'season.autumn.months',
        accent: '#cf7326',
        previewLight:
          'radial-gradient(140px 96px at 10% 0%, rgba(255,150,40,.98), transparent 70%),' +
          'radial-gradient(150px 100px at 94% 10%, rgba(238,104,58,.68), transparent 72%),' +
          'linear-gradient(145deg,#fbddb0 0%,#f9d3a2 55%,#f4c891 100%)',
        previewDark:
          'radial-gradient(140px 96px at 10% 0%, rgba(228,124,22,.60), transparent 72%),' +
          'radial-gradient(150px 100px at 94% 10%, rgba(160,58,20,.34), transparent 72%),' +
          'linear-gradient(145deg,#311a06 0%,#251103 55%,#1b0c02 100%)',
        light: paletteTokens({
          base: 'rgba(250,214,166,.66)', layer1: '#fff6e7', layer2: '#fae4c2', layer3: '#f5d4a8',
          overlay: '#f9dfba', border1: 'rgba(124,66,10,.15)', border2: 'rgba(124,66,10,.25)', border3: 'rgba(124,66,10,.37)',
          brand: '#6b4318', brandHover: '#56330e', brandText: '#492b0b',
          label1: '#33200d', label2: '#6a4d2d', label3: '#785a37',
          accent: '#cf7326', accentSoft: '#f7d6a8', link: '#a35c1f',
          sidebar: 'rgba(245,203,150,.88)', sidebarActive: '#e8bb7f', sidebarHover: '#efc89a', sidebarAccent: '#cf7326',
          bubble: '#edbe85', bubbleHi: '#e6ae6c', input: 'rgba(255,249,240,.94)',
          hover: 'rgba(163,85,24,.10)', active: 'rgba(163,85,24,.18)',
          menu: 'rgba(255,248,238,.94)', menuHeader: 'rgba(251,226,193,.96)',
        }),
        dark: paletteTokens({
          base: 'rgba(49,26,6,.68)', layer1: '#3a2109', layer2: '#45270c', layer3: '#532f10',
          overlay: '#62390f', border1: 'rgba(253,190,116,.15)', border2: 'rgba(253,190,116,.25)', border3: 'rgba(253,190,116,.37)',
          brand: '#f7c383', brandHover: '#efb46c', brandText: '#fbdcb4',
          label1: '#fcefdd', label2: '#d3b089', label3: '#b08c62',
          accent: '#e79f47', accentSoft: '#542f0c', link: '#f2b873',
          sidebar: 'rgba(30,14,2,.90)', sidebarActive: '#573111', sidebarHover: '#3f220a', sidebarAccent: '#e79f47',
          bubble: '#562e08', bubbleHi: '#673810', input: '#39200a',
          hover: 'rgba(255,255,255,.08)', active: 'rgba(255,255,255,.15)',
          menu: 'rgba(64,37,12,.94)', menuHeader: 'rgba(54,31,9,.97)',
        }),
      },
      {
        id: 'winter',
        nameKey: 'season.winter.name',
        poemKey: 'season.winter.poem',
        monthsKey: 'season.winter.months',
        accent: '#4a7fc4',
        previewLight:
          'radial-gradient(140px 96px at 10% 0%, rgba(96,158,240,.98), transparent 70%),' +
          'radial-gradient(150px 100px at 94% 10%, rgba(170,158,244,.60), transparent 72%),' +
          'linear-gradient(145deg,#c9dcf6 0%,#cfdef8 55%,#d8e0f7 100%)',
        previewDark:
          'radial-gradient(140px 96px at 10% 0%, rgba(54,116,206,.58), transparent 72%),' +
          'radial-gradient(150px 100px at 94% 10%, rgba(100,76,172,.38), transparent 72%),' +
          'linear-gradient(145deg,#0b1a30 0%,#081224 55%,#060d1c 100%)',
        light: paletteTokens({
          base: 'rgba(210,227,249,.66)', layer1: '#f6faff', layer2: '#dfeafa', layer3: '#cddff5',
          overlay: '#dae7f9', border1: 'rgba(16,46,96,.14)', border2: 'rgba(16,46,96,.24)', border3: 'rgba(16,46,96,.36)',
          brand: '#24446a', brandHover: '#1b3555', brandText: '#152b47',
          label1: '#102134', label2: '#3d5370', label3: '#546b85',
          accent: '#4a7fc4', accentSoft: '#cfe0f7', link: '#2f66ab',
          sidebar: 'rgba(192,213,243,.88)', sidebarActive: '#b3cdf0', sidebarHover: '#c2d7f4', sidebarAccent: '#4a7fc4',
          bubble: '#b3cff2', bubbleHi: '#9dbfec', input: 'rgba(247,252,255,.94)',
          hover: 'rgba(30,72,134,.10)', active: 'rgba(30,72,134,.18)',
          menu: 'rgba(246,251,255,.94)', menuHeader: 'rgba(216,231,250,.96)',
        }),
        dark: paletteTokens({
          base: 'rgba(11,26,48,.68)', layer1: '#152744', layer2: '#1a3152', layer3: '#213c62',
          overlay: '#2a4a75', border1: 'rgba(176,208,252,.14)', border2: 'rgba(176,208,252,.24)', border3: 'rgba(176,208,252,.36)',
          brand: '#b5d6fb', brandHover: '#a0c7f4', brandText: '#d6e9ff',
          label1: '#e6f1ff', label2: '#9fb4d2', label3: '#7d92b0',
          accent: '#7cb0ea', accentSoft: '#1d3a60', link: '#96c6f6',
          sidebar: 'rgba(5,13,26,.90)', sidebarActive: '#26456a', sidebarHover: '#132741', sidebarAccent: '#7cb0ea',
          bubble: '#1e3c64', bubbleHi: '#284b78', input: '#122341',
          hover: 'rgba(255,255,255,.08)', active: 'rgba(255,255,255,.15)',
          menu: 'rgba(24,44,74,.94)', menuHeader: 'rgba(19,36,62,.97)',
        }),
      },
    ];

    const CSS = [
      'html[data-season-theme="spring"]{--dsh-season-page-light:radial-gradient(900px 460px at 2% -12%,rgba(247,128,180,.98),transparent 58%),radial-gradient(820px 430px at 96% -8%,rgba(255,150,196,.82),transparent 60%),radial-gradient(780px 440px at 50% 106%,rgba(246,170,206,.78),transparent 62%),radial-gradient(620px 380px at 14% 92%,rgba(252,196,220,.72),transparent 66%),linear-gradient(158deg,#fce4ef 0%,#fbdbea 38%,#fbdfe9 70%,#f9d8e6 100%);--dsh-season-page-dark:radial-gradient(900px 460px at 2% -12%,rgba(214,92,142,.46),transparent 58%),radial-gradient(820px 430px at 96% -8%,rgba(150,60,100,.32),transparent 60%),linear-gradient(158deg,#2b131f 0%,#230f19 38%,#1d0c14 100%);}',
      'html[data-season-theme="summer"]{--dsh-season-page-light:radial-gradient(900px 460px at 2% -12%,rgba(58,178,214,.96),transparent 58%),radial-gradient(820px 430px at 96% -8%,rgba(96,202,214,.82),transparent 60%),radial-gradient(780px 440px at 50% 106%,rgba(120,208,226,.78),transparent 62%),radial-gradient(620px 380px at 14% 92%,rgba(150,222,214,.70),transparent 66%),linear-gradient(158deg,#cef1fa 0%,#c8edf7 38%,#cdeef2 70%,#cbf0e9 100%);--dsh-season-page-dark:radial-gradient(900px 460px at 2% -12%,rgba(48,166,204,.48),transparent 58%),radial-gradient(820px 430px at 96% -8%,rgba(24,110,130,.32),transparent 60%),linear-gradient(158deg,#0b2b34 0%,#071d24 38%,#061a1c 100%);}',
      'html[data-season-theme="autumn"]{--dsh-season-page-light:radial-gradient(900px 460px at 2% -12%,rgba(255,150,40,.98),transparent 58%),radial-gradient(820px 430px at 96% -8%,rgba(250,128,64,.84),transparent 60%),radial-gradient(780px 440px at 50% 106%,rgba(248,178,102,.78),transparent 62%),radial-gradient(620px 380px at 14% 92%,rgba(252,206,140,.72),transparent 66%),linear-gradient(158deg,#fce2b8 0%,#f9d7a6 38%,#f6cd97 70%,#f4c891 100%);--dsh-season-page-dark:radial-gradient(900px 460px at 2% -12%,rgba(228,124,22,.50),transparent 58%),radial-gradient(820px 430px at 96% -8%,rgba(150,54,16,.34),transparent 60%),linear-gradient(158deg,#311a06 0%,#251103 38%,#1c0d02 100%);}',
      'html[data-season-theme="winter"]{--dsh-season-page-light:radial-gradient(900px 460px at 2% -12%,rgba(96,158,240,.96),transparent 58%),radial-gradient(820px 430px at 96% -8%,rgba(140,150,244,.78),transparent 60%),radial-gradient(780px 440px at 50% 106%,rgba(150,178,246,.72),transparent 62%),radial-gradient(620px 380px at 14% 92%,rgba(186,176,246,.66),transparent 66%),linear-gradient(158deg,#d3e3fa 0%,#cfdef8 38%,#d5dff8 70%,#d8e0f7 100%);--dsh-season-page-dark:radial-gradient(900px 460px at 2% -12%,rgba(54,116,206,.50),transparent 58%),radial-gradient(820px 430px at 96% -8%,rgba(72,50,150,.34),transparent 60%),linear-gradient(158deg,#0b1a30 0%,#081224 38%,#060d1c 100%);}',
      'html[data-season-theme] body{background-image:var(--dsh-season-page-light,none);background-attachment:fixed;background-size:cover;}',
      'html[data-season-theme] body[data-ds-dark-theme]{background-image:var(--dsh-season-page-dark,none);}',
      '.dsh-season-page{position:relative;display:flex;flex-direction:column;height:100%;min-height:0;box-sizing:border-box;color:var(--dsw-alias-label-primary);',
      'background-color:transparent;}',
      '.dsh-season-scroll{position:relative;flex:1 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;padding:0 26px 30px;}',
      '.dsh-season-inner{width:100%;max-width:920px;margin:0 auto;padding-top:calc(var(--dsh-frame-top-clearance,0px) + 22px);}',
      '.dsh-season-head{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;padding-bottom:4px;}',
      '.dsh-season-heading{min-width:0;}',
      '.dsh-season-kicker{display:inline-flex;align-items:center;gap:6px;margin-bottom:9px;color:var(--dsw-alias-label-tertiary);',
      'font-size:10px;font-weight:600;line-height:14px;letter-spacing:.14em;}',
      '.dsh-season-kicker svg{color:var(--dsw-alias-state-business-primary);}',
      '.dsh-season-title{margin:0;font-size:29px;line-height:38px;font-weight:600;letter-spacing:-.02em;}',
      '.dsh-season-subtitle{max-width:560px;margin:5px 0 0;font-size:13px;line-height:21px;color:var(--dsw-alias-label-secondary);}',
      '.dsh-season-current{display:flex;align-items:center;gap:9px;flex:none;padding:7px 12px 7px 8px;border:1px solid var(--dsw-alias-border-l1);',
      'border-radius:999px;background:color-mix(in srgb,var(--dsw-alias-bg-layer-1) 80%,transparent);backdrop-filter:blur(12px);}',
      '.dsh-season-current-orb{position:relative;width:28px;height:28px;flex:none;border-radius:50%;background-image:var(--season-orb-light,none);',
      'background-size:cover;box-shadow:inset 0 0 0 1px rgba(255,255,255,.42);}',
      'body[data-ds-dark-theme] .dsh-season-current-orb{background-image:var(--season-orb-dark,none);}',
      '.dsh-season-current-orb.is-off{background:var(--dsw-alias-bg-layer-3);box-shadow:inset 0 0 0 1px var(--dsw-alias-border-l2);}',
      '.dsh-season-current-copy{display:flex;flex-direction:column;min-width:0;}',
      '.dsh-season-current-label{font-size:9px;line-height:12px;letter-spacing:.08em;color:var(--dsw-alias-label-tertiary);text-transform:uppercase;}',
      '.dsh-season-current-name{font-size:12px;line-height:17px;font-weight:600;white-space:nowrap;}',
      '.dsh-season-current-mode{font-size:9px;line-height:14px;padding:2px 6px;border-radius:999px;background:var(--dsw-alias-interactive-bg-hover);',
      'color:var(--dsw-alias-label-secondary);white-space:nowrap;}',
      '.dsh-season-auto{display:flex;align-items:center;gap:13px;margin:20px 0 22px;padding:13px 15px;border:1px solid var(--dsw-alias-border-l1);',
      'border-radius:16px;background:linear-gradient(120deg,color-mix(in srgb,var(--dsw-alias-bg-layer-1) 92%,var(--dsw-alias-state-business-primary)),var(--dsw-alias-bg-layer-1));}',
      '.dsh-season-auto-icon{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;flex:none;border-radius:11px;',
      'background:var(--dsw-alias-state-business-tertiary);color:var(--dsw-alias-state-business-primary);}',
      '.dsh-season-auto-copy{flex:1 1 auto;min-width:0;}',
      '.dsh-season-auto-title{display:flex;align-items:center;gap:7px;margin:0;font-size:13px;line-height:18px;font-weight:600;}',
      '.dsh-season-auto-state{font-size:9px;line-height:15px;padding:1px 6px;border-radius:999px;background:var(--dsw-alias-state-business-tertiary);',
      'color:var(--dsw-alias-state-business-primary);font-weight:600;}',
      '.dsh-season-auto-desc{margin:2px 0 0;font-size:11px;line-height:17px;color:var(--dsw-alias-label-secondary);}',
      '.dsh-season-switch{position:relative;width:38px;height:22px;flex:none;padding:0;border:1px solid var(--dsw-alias-border-l2);border-radius:999px;',
      'background:var(--dsw-alias-interactive-bg-active);cursor:pointer;transition:background-color .16s ease,border-color .16s ease;}',
      '.dsh-season-switch.is-on{background:var(--dsw-alias-brand-primary);border-color:transparent;}',
      '.dsh-season-switch-thumb{position:absolute;left:3px;top:3px;width:16px;height:16px;border-radius:50%;background:var(--dsw-alias-bg-layer-1);',
      'box-shadow:0 1px 2px rgba(0,0,0,.14);transition:transform .16s ease;',
      'background:var(--dsw-alias-switch-thumb,var(--dsw-alias-bg-layer-1));}',
      '.dsh-season-switch.is-on .dsh-season-switch-thumb{transform:translateX(16px);}',
      '.dsh-season-section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:12px;margin:0 0 10px;}',
      '.dsh-season-section-title{margin:0;font-size:13px;line-height:18px;font-weight:600;}',
      '.dsh-season-section-hint{font-size:10px;line-height:15px;color:var(--dsw-alias-label-tertiary);}',
      '.dsh-season-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:13px;}',
      '.dsh-season-card{--season-accent:#8aa395;position:relative;display:flex;flex-direction:column;min-width:0;padding:0;overflow:hidden;',
      'border:1px solid var(--dsw-alias-border-l1);border-radius:16px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);',
      'font:inherit;text-align:left;cursor:pointer;transition:transform .16s ease,border-color .16s ease,box-shadow .16s ease;}',
      '.dsh-season-card:hover{transform:translateY(-1px);border-color:var(--dsw-alias-border-l3);box-shadow:var(--dsw-elevation-soft,0 8px 22px rgba(0,0,0,.06));}',
      '.dsh-season-card.is-active{border-color:var(--season-accent);box-shadow:0 0 0 1px var(--season-accent);}',
      '.dsh-season-card.is-active .dsh-season-card-body{background:color-mix(in srgb,var(--season-accent) 4%,var(--dsw-alias-bg-layer-1));}',
      '.dsh-season-preview{position:relative;display:block;height:118px;overflow:hidden;border-bottom:1px solid var(--dsw-alias-border-l1);',
      'background-image:var(--season-preview-light,none);background-size:cover;background-position:center;}',
      'body[data-ds-dark-theme] .dsh-season-preview{background-image:var(--season-preview-dark,none);}',
      '.dsh-season-preview::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,0));pointer-events:none;}',
      'body[data-ds-dark-theme] .dsh-season-preview::after{background:linear-gradient(180deg,rgba(255,255,255,.02),rgba(0,0,0,.04));}',
      '.dsh-season-preview-rail{position:absolute;left:12px;top:12px;bottom:12px;width:30px;border-radius:8px;',
      'background:rgba(255,255,255,.48);border:1px solid rgba(255,255,255,.62);box-shadow:0 2px 7px rgba(37,50,43,.06);}',
      '.dsh-season-preview-rail::before{content:"";position:absolute;left:7px;right:7px;top:8px;height:4px;border-radius:99px;background:rgba(37,50,43,.18);}',
      '.dsh-season-preview-rail::after{content:"";position:absolute;left:7px;right:7px;top:17px;height:3px;border-radius:99px;',
      'background:rgba(37,50,43,.1);box-shadow:0 7px 0 rgba(37,50,43,.1),0 14px 0 rgba(37,50,43,.07);}',
      'body[data-ds-dark-theme] .dsh-season-preview-rail{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.14);}',
      'body[data-ds-dark-theme] .dsh-season-preview-rail::before{background:rgba(255,255,255,.22);}',
      'body[data-ds-dark-theme] .dsh-season-preview-rail::after{background:rgba(255,255,255,.14);box-shadow:0 7px 0 rgba(255,255,255,.14),0 14px 0 rgba(255,255,255,.09);}',
      '.dsh-season-preview-main{position:absolute;left:50px;right:12px;top:12px;bottom:12px;display:flex;flex-direction:column;gap:6px;',
      'padding:9px 10px;border-radius:10px;background:rgba(255,255,255,.46);border:1px solid rgba(255,255,255,.64);backdrop-filter:blur(4px);}',
      'body[data-ds-dark-theme] .dsh-season-preview-main{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.13);}',
      '.dsh-season-preview-title{display:block;width:44%;height:5px;border-radius:99px;background:rgba(37,50,43,.24);}',
      'body[data-ds-dark-theme] .dsh-season-preview-title{background:rgba(255,255,255,.28);}',
      '.dsh-season-preview-line{display:block;height:4px;border-radius:99px;background:rgba(37,50,43,.12);}',
      'body[data-ds-dark-theme] .dsh-season-preview-line{background:rgba(255,255,255,.16);}',
      '.dsh-season-preview-line.is-long{width:74%;}',
      '.dsh-season-preview-line.is-short{width:52%;}',
      '.dsh-season-preview-pill{display:block;width:46px;height:12px;margin-top:auto;border-radius:99px;background:var(--season-accent);opacity:.62;}',
      '.dsh-season-preview-night{position:absolute;right:10px;bottom:9px;width:74px;height:46px;padding:7px;box-sizing:border-box;',
      'border-radius:8px;border:1px solid rgba(255,255,255,.32);background-image:var(--season-preview-dark,none);background-size:cover;box-shadow:0 6px 14px rgba(27,38,30,.18);}',
      'body[data-ds-dark-theme] .dsh-season-preview-night{background-image:var(--season-preview-light,none);border-color:rgba(255,255,255,.38);}',
      '.dsh-season-preview-night-dot{display:block;width:11px;height:11px;border-radius:50%;background:rgba(255,255,255,.78);}',
      'body[data-ds-dark-theme] .dsh-season-preview-night-dot{background:rgba(28,42,34,.34);}',
      '.dsh-season-preview-night-line{display:block;width:68%;height:3px;margin-top:5px;border-radius:99px;background:rgba(255,255,255,.35);}',
      'body[data-ds-dark-theme] .dsh-season-preview-night-line{background:rgba(28,42,34,.2);}',
      '.dsh-season-check{position:absolute;top:10px;right:10px;display:inline-flex;align-items:center;justify-content:center;width:21px;height:21px;',
      'border-radius:50%;background:var(--season-accent);color:#26352b;box-shadow:0 2px 6px rgba(37,50,43,.2);}',
      '.dsh-season-card-body{display:flex;flex-direction:column;gap:4px;padding:11px 13px 13px;transition:background-color .16s ease;}',
      '.dsh-season-card-title-row{display:flex;align-items:center;justify-content:space-between;gap:10px;}',
      '.dsh-season-card-name{font-size:13px;line-height:19px;font-weight:600;}',
      '.dsh-season-card-months{flex:none;font-size:9px;line-height:15px;padding:1px 6px;border-radius:999px;',
      'border:1px solid var(--dsw-alias-border-l1);color:var(--dsw-alias-label-tertiary);background:var(--dsw-alias-bg-layer-2);}',
      '.dsh-season-card-poem{margin:0;font-size:11px;line-height:17px;color:var(--dsw-alias-label-secondary);}',
      '.dsh-season-active-label{align-self:flex-start;display:inline-flex;align-items:center;gap:4px;margin-top:2px;font-size:9px;line-height:14px;',
      'letter-spacing:.04em;color:var(--dsw-alias-state-business-primary);font-weight:600;}',
      '.dsh-season-footer{display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;margin-top:18px;padding-top:13px;',
      'border-top:1px dashed var(--dsw-alias-border-l1);}',
      '.dsh-season-note{display:flex;align-items:flex-start;gap:7px;max-width:600px;font-size:10px;line-height:16px;color:var(--dsw-alias-label-tertiary);}',
      '.dsh-season-note svg{flex:none;margin-top:1px;color:var(--dsw-alias-state-business-primary);}',
      '.dsh-season-reset{display:inline-flex;align-items:center;gap:5px;height:26px;padding:0 9px;border:1px solid var(--dsw-alias-border-l1);',
      'border-radius:8px;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:10px;cursor:pointer;}',
      '.dsh-season-reset:hover{color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-border-l2);background:var(--dsw-alias-interactive-bg-hover);}',
      '.dsh-season-offline{font-size:10px;line-height:15px;color:var(--dsw-alias-label-tertiary);}',
      '.dsh-season-page button:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:3px;}',
      '@media (max-width:760px){.dsh-season-scroll{padding:0 18px 26px;}.dsh-season-inner{padding-top:calc(var(--dsh-frame-top-clearance,0px) + 16px);}',
      '.dsh-season-head{align-items:flex-start;flex-direction:column;gap:12px;}.dsh-season-current{align-self:flex-start;}.dsh-season-title{font-size:25px;line-height:33px;}',
      '.dsh-season-grid{grid-template-columns:minmax(0,1fr);}.dsh-season-auto{align-items:flex-start;}.dsh-season-section-head{align-items:flex-start;flex-direction:column;gap:2px;}}',
      '@media (prefers-reduced-motion:reduce){.dsh-season-page *{transition:none !important;}.dsh-season-card:hover{transform:none;}}',
    ].join('');

    function format(template, params) {
      if (!params) return String(template);
      return String(template).replace(/\{(\w+)\}/g, (match, key) =>
        params[key] === undefined ? match : String(params[key]),
      );
    }

    function activeLanguage(locale) {
      let id = '';
      try {
        const snapshot = locale && typeof locale.getLocale === 'function' ? locale.getLocale() : null;
        if (snapshot) id = snapshot.active || snapshot.id || snapshot.locale || '';
      } catch (error) {
        id = '';
      }
      if (!id && typeof navigator !== 'undefined' && navigator.language) id = navigator.language;
      return String(id || 'en').toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en';
    }

    function makeTranslate(locale, bound) {
      const fallback = DICTS[activeLanguage(locale)] || DICTS.en;
      return function translate(key, params) {
        let text = '';
        if (bound) {
          try {
            const value = bound(key);
            if (typeof value === 'string' && value !== '' && value !== key) text = value;
          } catch (error) {
            text = '';
          }
        }
        if (!text) text = fallback[key] || DICTS.en[key] || key;
        return format(text, params);
      };
    }

    function useLocaleRefresh(locale) {
      const [, refresh] = React.useState(0);
      React.useEffect(() => {
        if (!locale || typeof locale.subscribe !== 'function') return undefined;
        return locale.subscribe(() => refresh((value) => value + 1));
      }, [locale]);
    }

    function seasonById(id) {
      for (let index = 0; index < SEASONS.length; index += 1) {
        if (SEASONS[index].id === id) return SEASONS[index];
      }
      return null;
    }

    function seasonForMonth(month) {
      if (month >= 2 && month <= 4) return SEASONS[0];
      if (month >= 5 && month <= 7) return SEASONS[1];
      if (month >= 8 && month <= 10) return SEASONS[2];
      return SEASONS[3];
    }

    function seasonForNow() {
      return seasonForMonth(new Date().getMonth());
    }

    function readState() {
      const current = seasonForNow().id;
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return { enabled: true, auto: true, season: current };
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== 'object') return { enabled: true, auto: true, season: current };
        return {
          enabled: parsed.enabled !== false,
          auto: parsed.auto !== false,
          season: seasonById(parsed.season) ? parsed.season : current,
        };
      } catch (error) {
        return { enabled: true, auto: true, season: current };
      }
    }

    function writeState(state) {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
          enabled: state.enabled !== false,
          auto: state.auto !== false,
          season: seasonById(state.season) ? state.season : seasonForNow().id,
        }));
      } catch (error) {
        /* A refused storage keeps the selection for this page load only. */
      }
    }

    function createThemeStore(theme) {
      let state = readState();
      let disposed = false;
      let started = false;
      let layer = null;
      let appliedId = null;
      const listeners = new Set();

      function resolveActive() {
        if (!state.enabled) return null;
        return state.auto ? seasonForNow() : (seasonById(state.season) || seasonForNow());
      }

      let snapshot = {
        enabled: state.enabled,
        auto: state.auto,
        season: state.season,
        activeId: resolveActive() ? resolveActive().id : null,
      };

      function notify() {
        listeners.forEach((listener) => {
          try {
            listener();
          } catch (error) {
            /* A listener must not break the theme transaction. */
          }
        });
      }

      function disposeLayer() {
        if (!layer) return;
        try {
          layer();
        } catch (error) {
          /* The theme service may already have disposed this layer. */
        }
        layer = null;
        appliedId = null;
      }

      function commit(persist) {
        if (disposed) return;
        const active = resolveActive();
        if (active) {
          if (theme && typeof theme.overrideTokens === 'function' && appliedId !== active.id) {
            try {
              layer = theme.overrideTokens(THEME_SOURCE, tokenModes(active.light, active.dark));
              appliedId = active.id;
            } catch (error) {
              layer = null;
              appliedId = null;
              if (typeof console !== 'undefined') console.error('[seasonal-theme] token override failed', error);
            }
          }
          if (typeof document !== 'undefined') {
            document.documentElement.dataset.seasonTheme = active.id;
          }
        } else {
          disposeLayer();
          if (typeof document !== 'undefined') delete document.documentElement.dataset.seasonTheme;
        }

        snapshot = {
          enabled: state.enabled,
          auto: state.auto,
          season: state.season,
          activeId: active ? active.id : null,
        };
        if (persist) writeState(state);
        notify();
      }

      return {
        getSnapshot() {
          return snapshot;
        },
        subscribe(listener) {
          listeners.add(listener);
          return () => listeners.delete(listener);
        },
        start() {
          if (started || disposed) return;
          started = true;
          commit(true);
        },
        setAuto(value) {
          if (disposed) return;
          state = {
            ...state,
            enabled: value ? true : state.enabled,
            auto: Boolean(value),
          };
          if (state.auto) state.season = seasonForNow().id;
          commit(true);
        },
        setSeason(id) {
          if (disposed || !seasonById(id)) return;
          state = {
            ...state,
            enabled: true,
            auto: false,
            season: id,
          };
          commit(true);
        },
        reset() {
          if (disposed) return;
          state = { ...state, enabled: false, auto: false };
          commit(true);
        },
        refreshAuto() {
          if (disposed || !state.enabled || !state.auto) return;
          const current = seasonForNow();
          if (current.id !== snapshot.activeId) {
            state = { ...state, season: current.id };
            commit(true);
          }
        },
        dispose() {
          if (disposed) return;
          disposed = true;
          disposeLayer();
          if (typeof document !== 'undefined') delete document.documentElement.dataset.seasonTheme;
          listeners.clear();
        },
      };
    }

    function svg(size, children, extra) {
      return h(
        'svg',
        {
          viewBox: '0 0 24 24',
          width: size,
          height: size,
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: extra && extra.strokeWidth ? extra.strokeWidth : 1.7,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          'aria-hidden': 'true',
          style: { display: 'block', flex: 'none' },
        },
        children,
      );
    }

    function SeasonGlyph(props) {
      const size = props && props.size ? props.size : 18;
      return svg(
        size,
        [
          h('path', { key: 'spring', d: 'M12 11.6C9 11.6 6.9 9.9 6.2 6.8c3.2-.4 5.4 1.1 5.8 4.8Z' }),
          h('path', { key: 'summer', d: 'M12.4 12c0-3 1.7-5.1 4.8-5.8.4 3.2-1.1 5.4-4.8 5.8Z' }),
          h('path', { key: 'autumn', d: 'M12 12.4c3 0 5.1 1.7 5.8 4.8-3.2.4-5.4-1.1-5.8-4.8Z' }),
          h('path', { key: 'winter', d: 'M11.6 12c0 3-1.7 5.1-4.8 5.8-.4-3.2 1.1-5.4 4.8-5.8Z' }),
          h('circle', { key: 'core', cx: 12, cy: 12, r: 1.55, fill: 'currentColor', stroke: 'none' }),
        ],
        { strokeWidth: props && props.active ? 1.9 : 1.65 },
      );
    }

    function SparkGlyph(props) {
      const size = props && props.size ? props.size : 12;
      return svg(size, [
        h('path', { key: 'star', d: 'M12 3.6l1.45 4.95L18.4 10l-4.95 1.45L12 16.4l-1.45-4.95L5.6 10l4.95-1.45Z' }),
      ]);
    }

    function OrbitGlyph(props) {
      const size = props && props.size ? props.size : 17;
      return svg(size, [
        h('circle', { key: 'core', cx: 12, cy: 12, r: 3.1 }),
        h('ellipse', { key: 'orbit', cx: 12, cy: 12, rx: 8.2, ry: 4.1, transform: 'rotate(-28 12 12)' }),
        h('circle', { key: 'moon', cx: 18.2, cy: 8.1, r: 1.35, fill: 'currentColor', stroke: 'none' }),
      ]);
    }

    function CheckGlyph(props) {
      const size = props && props.size ? props.size : 12;
      return svg(size, [h('path', { key: 'check', d: 'M5.5 12.2l4.1 4.1 8.9-9.1' })], { strokeWidth: 2.2 });
    }

    function ResetGlyph(props) {
      const size = props && props.size ? props.size : 12;
      return svg(size, [
        h('path', { key: 'arc', d: 'M5.2 9.1A7 7 0 1 1 5 15.4' }),
        h('path', { key: 'head', d: 'M4.9 4.8v4.5h4.5' }),
      ]);
    }

    function ShieldGlyph(props) {
      const size = props && props.size ? props.size : 12;
      return svg(size, [
        h('path', { key: 'shield', d: 'M12 3.8l6 2.2v5.1c0 3.6-2.3 6.7-6 8.1-3.7-1.4-6-4.5-6-8.1V6Z' }),
        h('path', { key: 'check', d: 'M9.1 12.2l2 2 3.9-4.2' }),
      ]);
    }

    function SidebarIcon(props) {
      const size = props && typeof props.size === 'number' ? props.size : 18;
      return h(SeasonGlyph, { size, active: Boolean(props && props.active) });
    }

    function SeasonCard(props) {
      const { season, active, t, onSelect } = props;
      const style = {
        '--season-accent': season.accent,
        '--season-preview-light': season.previewLight,
        '--season-preview-dark': season.previewDark,
      };
      return h(
        'button',
        {
          type: 'button',
          className: 'dsh-season-card' + (active ? ' is-active' : ''),
          style,
          'aria-pressed': active ? 'true' : 'false',
          'aria-label': t('card.apply', { name: t(season.nameKey) }),
          onClick: () => onSelect(season.id),
        },
        h(
          'span',
          { className: 'dsh-season-preview' },
          h('span', { className: 'dsh-season-preview-rail' }),
          h(
            'span',
            { className: 'dsh-season-preview-main' },
            h('span', { className: 'dsh-season-preview-title' }),
            h('span', { className: 'dsh-season-preview-line is-long' }),
            h('span', { className: 'dsh-season-preview-line is-short' }),
            h('span', { className: 'dsh-season-preview-pill' }),
          ),
          h(
            'span',
            { className: 'dsh-season-preview-night' },
            h('span', { className: 'dsh-season-preview-night-dot' }),
            h('span', { className: 'dsh-season-preview-night-line' }),
          ),
          active
            ? h('span', { className: 'dsh-season-check' }, h(CheckGlyph, { size: 11 }))
            : null,
        ),
        h(
          'span',
          { className: 'dsh-season-card-body' },
          h(
            'span',
            { className: 'dsh-season-card-title-row' },
            h('span', { className: 'dsh-season-card-name' }, t(season.nameKey)),
            h('span', { className: 'dsh-season-card-months' }, t(season.monthsKey)),
          ),
          h('span', { className: 'dsh-season-card-poem' }, t(season.poemKey)),
          active ? h('span', { className: 'dsh-season-active-label' }, t('card.active')) : null,
        ),
      );
    }

    function SeasonPage(props) {
      const { store, locale, bound } = props;
      useLocaleRefresh(locale);
      const t = makeTranslate(locale, bound);
      const snapshot = React.useSyncExternalStore(store.subscribe, store.getSnapshot, store.getSnapshot);
      const active = snapshot.enabled ? seasonById(snapshot.activeId) : null;
      const autoOn = snapshot.enabled && snapshot.auto;
      const modeKey = !snapshot.enabled ? 'mode.off' : snapshot.auto ? 'mode.auto' : 'mode.manual';

      return h(
        'div',
        { className: 'dsh-season-page' },
        h(
          'div',
          { className: 'dsh-season-scroll' },
          h(
            'div',
            { className: 'dsh-season-inner' },
            h(
              'header',
              { className: 'dsh-season-head' },
              h(
                'div',
                { className: 'dsh-season-heading' },
                h(
                  'span',
                  { className: 'dsh-season-kicker' },
                  h(SparkGlyph, { size: 11 }),
                  t('page.eyebrow'),
                ),
                h('h1', { className: 'dsh-season-title' }, t('page.title')),
                h('p', { className: 'dsh-season-subtitle' }, t('page.subtitle')),
              ),
              h(
                'div',
                { className: 'dsh-season-current', 'aria-live': 'polite' },
                h('span', {
                  className: 'dsh-season-current-orb' + (active ? '' : ' is-off'),
                  style: active
                    ? {
                        '--season-orb-light': active.previewLight,
                        '--season-orb-dark': active.previewDark,
                      }
                    : undefined,
                }),
                h(
                  'span',
                  { className: 'dsh-season-current-copy' },
                  h('span', { className: 'dsh-season-current-label' }, t('current.label')),
                  h('span', { className: 'dsh-season-current-name' }, active ? t(active.nameKey) : t('current.off')),
                ),
                h('span', { className: 'dsh-season-current-mode' }, t(modeKey)),
              ),
            ),
            h(
              'section',
              { className: 'dsh-season-auto' },
              h('span', { className: 'dsh-season-auto-icon' }, h(OrbitGlyph, { size: 17 })),
              h(
                'div',
                { className: 'dsh-season-auto-copy' },
                h(
                  'h2',
                  { className: 'dsh-season-auto-title' },
                  t('auto.title'),
                  h('span', { className: 'dsh-season-auto-state' }, t(modeKey)),
                ),
                h('p', { className: 'dsh-season-auto-desc' }, t(autoOn ? 'auto.on' : 'auto.off')),
                h('p', { className: 'dsh-season-auto-desc' }, t('auto.desc')),
              ),
              h(
                'button',
                {
                  type: 'button',
                  role: 'switch',
                  className: 'dsh-season-switch' + (autoOn ? ' is-on' : ''),
                  'aria-checked': autoOn ? 'true' : 'false',
                  'aria-label': t('auto.title'),
                  onClick: () => store.setAuto(!autoOn),
                },
                h('span', { className: 'dsh-season-switch-thumb' }),
              ),
            ),
            h(
              'div',
              { className: 'dsh-season-section-head' },
              h('h2', { className: 'dsh-season-section-title' }, t('choose.title')),
              h('span', { className: 'dsh-season-section-hint' }, t('choose.hint')),
            ),
            h(
              'div',
              { className: 'dsh-season-grid' },
              SEASONS.map((season) =>
                h(SeasonCard, {
                  key: season.id,
                  season,
                  active: Boolean(active && active.id === season.id),
                  t,
                  onSelect: store.setSeason,
                }),
              ),
            ),
            h(
              'footer',
              { className: 'dsh-season-footer' },
              h(
                'span',
                { className: 'dsh-season-note' },
                h(ShieldGlyph, { size: 12 }),
                t('footer.note'),
              ),
              snapshot.enabled
                ? h(
                    'button',
                    {
                      type: 'button',
                      className: 'dsh-season-reset',
                      title: t('footer.resetHint'),
                      onClick: store.reset,
                    },
                    h(ResetGlyph, { size: 11 }),
                    t('footer.reset'),
                  )
                : h('span', { className: 'dsh-season-offline' }, t('footer.off')),
            ),
          ),
        ),
      );
    }

    return {
      inject: ['slots', 'theme'],
      apply(ctx) {
        let locale = null;
        try {
          locale = ctx.get('locale') || null;
        } catch (error) {
          locale = null;
        }

        let theme = null;
        try {
          theme = ctx.get('theme') || null;
        } catch (error) {
          theme = null;
        }

        if (locale && typeof locale.register === 'function') {
          ctx.effect(() => {
            const disposers = [];
            disposers.push(locale.register(NS, 'en', DICTS.en));
            disposers.push(locale.register(NS, 'zh', DICTS.zh));
            return () => {
              for (let index = 0; index < disposers.length; index += 1) {
                try {
                  disposers[index]();
                } catch (error) {
                  /* already disposed */
                }
              }
            };
          }, 'seasonal-theme-locale');
        }

        let bound = null;
        if (locale && typeof locale.bind === 'function') {
          try {
            bound = locale.bind(NS);
          } catch (error) {
            bound = null;
          }
        }

        ctx.effect(() => {
          const tag = document.createElement('style');
          tag.setAttribute('data-seasonal-theme', '1');
          tag.textContent = CSS;
          document.head.append(tag);
          return () => tag.remove();
        }, 'seasonal-theme-styles');

        const store = createThemeStore(theme);
        ctx.effect(() => {
          store.start();
          return () => store.dispose();
        }, 'seasonal-theme-runtime');

        ctx.effect(() => {
          const autoTick = window.setInterval(() => store.refreshAuto(), 30 * 60 * 1000);
          return () => window.clearInterval(autoTick);
        }, 'seasonal-theme-season-clock');

        const translate = () => makeTranslate(locale, bound);

        ctx.slots.inject('sidebar.panellist', () =>
          ctx.slots.register(
            {
              name: 'sidebar.panellist',
              id: 'seasonal-theme',
              order: 30,
              label: () => translate()('panel.label'),
            },
            SidebarIcon,
          ),
        );

        ctx.slots.inject('main', () =>
          ctx.slots.register(
            { name: 'main', key: 'seasonal-theme' },
            () => h(SeasonPage, { store, locale, bound }),
          ),
        );
      },
    };
  },
});
