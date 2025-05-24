export function Footer() {
  return (
    <div className="mt-auto text-center py-4 text-xs text-gray-400">
      <div className="flex flex-col items-center gap-1">
        <div>
          Open-source vanity wallet generator for EVM
        </div>
        <div className="flex gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <a
            href="https://x.com/0xsyncroot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700"
            title="Twitter/X"
          >
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 1200 1227">
              <path d="M684 523l423-493h-99L636 474 322 30H42l441 630-441 514h99l395-459 327 459h280L684 523zm-139-162l-57-83H136v-1l241 344 57 82-402 463h225l260-299 58-70 388 369h162L684 781l-76-71 1-2 420-487h-221L545 361z" />
            </svg>
          </a>
          <a
            href="https://t.me/syncroot0x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700"
            title="Telegram"
          >
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.036 16.665l-0.397 4.118c0.568 0 0.811-0.243 1.104-0.536l2.652-2.573 5.506 4.009c1.008 0.555 1.726 0.263 1.978-0.934l3.588-16.93c0.326-1.519-0.579-2.116-1.551-1.78l-20.819 8.029c-1.423 0.555-1.405 1.348-0.243 1.711l5.321 1.662 12.36-7.787c0.583-0.371 1.117-0.165 0.679 0.206l-10.017 9.09z" />
            </svg>
          </a>
        </div>
        <div className="text-[10px] opacity-50">
          &copy; {new Date().getFullYear()} Syncroot
        </div>
      </div>
    </div>
  );
}
