/**
 * Selo "Feito por DØERING". Herda a cor e a fonte do texto em volta.
 * Uso: <FeitoPorDoering site="dominio-do-cliente.com.br" pill />
 */
const css = `.doering-selo{display:inline-flex;align-items:center;gap:.55em;color:inherit;font:inherit;font-size:12px;line-height:1;letter-spacing:.02em;text-decoration:none;opacity:.72;transition:opacity .2s}
.doering-selo:hover,.doering-selo:focus-visible{opacity:1}
.doering-selo:focus-visible{outline:2px solid #397BFF;outline-offset:4px;border-radius:4px}
.doering-selo__logo{display:block;flex:none;height:11px;width:auto;overflow:visible;transition:filter .3s}
.doering-selo:hover .doering-selo__logo{filter:drop-shadow(0 0 3px rgba(57,123,255,.55))}
.doering-selo--pill{padding:7px 12px;border:1px solid rgba(127,127,127,.35);border-radius:999px}
@media (prefers-reduced-motion:no-preference){.doering-selo:hover .doering-selo__risco{animation:doering-selo-risco .5s cubic-bezier(.4,0,.2,1)}}
@keyframes doering-selo-risco{from{stroke-dasharray:1;stroke-dashoffset:1}to{stroke-dasharray:1;stroke-dashoffset:0}}`;

export default function FeitoPorDoering({ site, pill = false }: { site: string; pill?: boolean }) {
  const href = `https://doering.com.br/?utm_source=${encodeURIComponent(site)}&utm_medium=selo&utm_campaign=feito-por`;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <a className={`doering-selo${pill ? " doering-selo--pill" : ""}`} href={href} target="_blank" rel="noopener">
        <span className="doering-selo__txt">Feito por</span>
        <svg className="doering-selo__logo" viewBox="0 -14 772 128" role="img" aria-label="DØERING">
          <g fill="none" stroke="currentColor" strokeWidth="13" strokeLinejoin="miter">
            <path d="M6 6H52A44 44 0 0 1 52 94H6Z" />
            <path d="M260 6H350M260 50H344M260 94H350" />
            <path d="M386 94V6H430A22 22 0 0 1 430 50H386M424 50L472 94" />
            <path d="M510 6V94" />
            <path d="M546 94V6L626 94V6" />
            <path d="M760 6H712A44 44 0 0 0 712 94H760V54H724" />
            <circle cx="180" cy="50" r="44" />
          </g>
          <path className="doering-selo__risco" d="M150 112L216 -12" pathLength="1" stroke="#397BFF" strokeWidth="13" strokeLinecap="round" />
        </svg>
      </a>
    </>
  );
}
