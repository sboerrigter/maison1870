export default function Map({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <path d="m0 0h600v600h-600z" fill="#eee" opacity="0" />
        <rect fill="#eafaf4" height="540" rx="270" width="540" x="60" y="10" />
        <g transform="translate(280 200)">
          <path d="m0 0h120v60h-120z" />
          <g stroke="#1e2937" strokeLinejoin="round">
            <path d="m90.5 30.5c0-3.3137085-2.6862915-6-6-6s-6 2.6862915-6 6v9h12z" />
            <path d="m80.5 49.5c0-2.7614237-2.2385763-5-5-5s-5 2.2385763-5 5v9h10z" />
            <path d="m52.5 49.5c0-2.7614237-2.2385763-5-5-5s-5 2.2385763-5 5v4h10z" />
            <path d="m66.5 49.5c0-2.7614237-2.2385763-5-5-5s-5 2.2385763-5 5v4h10z" />
            <path d="m94.5 49.5c0-2.7614237-2.2385763-5-5-5s-5 2.2385763-5 5v4h10z" />
            <path d="m108.5 49.5c0-2.7614237-2.238576-5-5-5s-5 2.2385763-5 5v4h10z" />
            <path d="m108.5 30.5c0-3.3137085-2.686292-6-6-6-3.3137085 0-6 2.6862915-6 6v9h12z" />
            <path d="m36.5 35.5h78v4h-78z" />
            <path d="m5 19h31v40h-31z" strokeWidth="2" />
            <path
              d="m36 19h79v40h-79z"
              strokeWidth="2"
              transform="matrix(-1 0 0 1 151 0)"
            />
            <path d="m81.5 35.5v4" />
            <path d="m84.5 35.5v4" />
            <path d="m87.5 35.5v4" />
            <path d="m93.5 35.5v4" />
            <path d="m99.5 35.5v4" />
            <path d="m99.5 35.5v4" />
            <path d="m102.5 35.5v4" />
            <path d="m105.5 35.5v4" />
            <path d="m111.5 35.5v4" />
            <path d="m54.5 30.5c0-3.3137085-2.6862915-6-6-6s-6 2.6862915-6 6v9h12z" />
            <path d="m72.5 30.5c0-3.3137085-2.6862915-6-6-6s-6 2.6862915-6 6v9h12z" />
            <path d="m45.5 35.5v4" />
            <path d="m39.5 35.5v4" />
            <path d="m48.5 35.5v4" />
            <path d="m51.5 35.5v4" />
            <path d="m57.5 35.5v4" />
            <path d="m63.5 35.5v4" />
            <path d="m63.5 35.5v4" />
            <path d="m66.5 35.5v4" />
            <path d="m69.5 35.5v4" />
            <path d="m75.5 35.5v4" />
            <path d="m17.5 26.5h6v8h-6z" />
            <path d="m17.5 44.5h6v8h-6z" />
            <path
              d="m38 19-2-14-15.5-4-15.5 4-2 14z"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <path
              d="m117 19-2-14-12-4h-82.5l15.5 4 2 14z"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <path d="m51.5 8.5h6v6h-6z" />
            <path d="m58.5 8.5h-8l4-3z" strokeLinecap="round" />
            <path d="m17.5 8.5h6v6h-6z" />
            <path d="m24.5 8.5h-8l4-3z" strokeLinecap="round" />
            <path d="m72.5 8.5h6v6h-6z" />
            <path d="m79.5 8.5h-8l4-3z" strokeLinecap="round" />
            <path d="m93.5 8.5h6v6h-6z" />
            <path d="m100.5 8.5h-8l4-3z" strokeLinecap="round" />
            <path d="m1 59h118" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
        <g strokeLinecap="round">
          <path
            d="m597 375c-11.699544 6.688802-24.547852 8.980469-38.544922 6.875-20.995605-3.158203-14.718262-13.838867-34.098633-12.370117s-15.608398 16.702148-24.68457 25.495117-26.690918 4.926758-40.893555 15c-14.202636 10.073242-25.713867 24.419922-42.246093 29.22168-16.532227 4.801758-28.684082-1.132325-32.975586-11.779297-4.291504-10.646973 1.499344-14.000892-3.033692-21.774903-5.522949-9.471679-18.388672-7.326171-19.187988 3.17627s10.843262 10.502441 10.843262 23.489746c0 4.071009-4.332032 9.523926-10.843262 5.636231-5.707528-3.407825-22.441129-16.462863-33.895508-4.896485-9.538086 9.631348 8.067383 15.145508 0 28.336426s-29.512207 12.565918-46.645508 2.935547c-17.1333-9.630371-9.33304-15.656189-5.047363-26.375488 2.253418-5.636231-4.304199-14.64795-13.228516-8.527344-8.924316 6.120605-5.070312 24.916992-25.375 21.964355-20.304687-2.952636 7.060547-40.482422-19.143066-40.482422s-17.897461 25.818848-48.329102 33.099122c-30.43164 7.280273-33.998046-12.973633-55.422851-10.950196-21.4248048 2.023438-37.8731476 30.780163-66.4228517 25.271973-21.0514323-4.061524-35.993164-20.176595-44.8251953-48.345215"
            stroke="#7dd3fd"
            strokeWidth="6"
          />
          <path
            d="m410 2c-5.899089 13.8694661-12.732422 22.441569-20.5 25.7163086-11.651367 4.9121094-26.539062-5.3432617-38.98584 0-12.446777 5.3432617-3.665527 43.7338867-43.432129 49.1157226-39.766601 5.381836-33.848633 62.3330078-70.082031 62.3330078-13.514648 0-7.517578-30.46875-25.744141-25.103516-15.551291 4.577733-11.898437 46.335938-28.25 50.69043-16.351562 4.354492-19.005859-15.871094-32.005859-4.621094s12.176758 27.917969-1.262695 34.684571c-13.439453 6.766601-12.421955-5.774853-22.81836-9.325196-14.833007-5.065429-22.783203 12.238282-14.833007 19.925782 7.950195 7.6875 21.84968 8.816737 14.833007 27.583984-4.400539 11.769968-28.0810153 39.50574-66.8203122 31.798828-41.390625-8.234375-34.9892578 35.201172-58.0986328 45.201172"
            stroke="#7dd3fd"
            strokeWidth="4"
          />
          <path
            d="m340 360h-40l-40 40h-40"
            stroke="#1e2937"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="m320 60h60l40 40v180h-160l-60-60h-60"
            stroke="#1e2937"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="m340 360h40l40 40h40l40-40h75"
            stroke="#1e2937"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="m340 460v-200"
            stroke="#1e2937"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
        <g transform="translate(550 325)">
          <rect fill="#e11d48" height="20" rx="4" width="40" />
          <text fill="#fff" fontSize="12" fontWeight="bold">
            <tspan x="7.639648" y="14">
              A20
            </tspan>
          </text>
        </g>
        <g transform="translate(48 390)">
          <text fill="#1e2937" fontSize="16" fontWeight="500">
            <tspan x="0" y="15">
              Beynac-et-Cazenac
            </tspan>
          </text>
          <text fill="#6b7280" fontSize="14">
            <tspan x="0" y="33">
              15 min.
            </tspan>
          </text>
          <circle
            cx="172"
            cy="10"
            fill="#eafaf4"
            r="4"
            stroke="#1e2937"
            strokeWidth="2"
          />
        </g>
        <g transform="translate(335 450)">
          <text fill="#1e2937" fontSize="16" fontWeight="500">
            <tspan x="25" y="15">
              Domme
            </tspan>
          </text>
          <text fill="#6b7280" fontSize="14">
            <tspan x="25" y="33">
              20 min.
            </tspan>
          </text>
          <circle
            cx="5"
            cy="10"
            fill="#eafaf4"
            r="4"
            stroke="#1e2937"
            strokeWidth="2"
          />
        </g>
        <text fill="#7dd3fd" fontSize="12" fontWeight="bold">
          <tspan x="25" y="476">
            DORDOGNE
          </tspan>
        </text>
        <g transform="translate(40 210)">
          <text fill="#1e2937" fontSize="16" fontWeight="500">
            <tspan x="0" y="15">
              Les Eyzies
            </tspan>
          </text>
          <text fill="#6b7280" fontSize="14">
            <tspan x="0" y="33">
              20 min.
            </tspan>
          </text>
          <circle
            cx="100"
            cy="10"
            fill="#eafaf4"
            r="4"
            stroke="#1e2937"
            strokeWidth="2"
          />
        </g>
        <g transform="translate(153 50)">
          <text fill="#6b7280" fontSize="14">
            <tspan x="0" y="36">
              25 min.
            </tspan>
          </text>
          <text fill="#1e2937" fontSize="16" fontWeight="500">
            <tspan x="0" y="15">
              Montignac-Lascaux
            </tspan>
          </text>
          <circle
            cx="167"
            cy="10"
            fill="#eafaf4"
            r="4"
            stroke="#1e2937"
            strokeWidth="2"
          />
        </g>
        <g transform="translate(335 290)">
          <text fill="#1e2937" fontSize="16" fontWeight="500">
            <tspan x="25" y="15">
              Sarlat-la-canéda center
            </tspan>
          </text>
          <text fill="#6b7280" fontSize="14">
            <tspan x="25" y="33">
              5 min.
            </tspan>
          </text>
          <circle
            cx="5"
            cy="10"
            fill="#eafaf4"
            r="4"
            stroke="#1e2937"
            strokeWidth="2"
          />
        </g>
        <path
          d="m569 355 6 5-6 5"
          stroke="#1e2937"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}
