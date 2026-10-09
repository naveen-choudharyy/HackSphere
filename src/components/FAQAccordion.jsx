import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items = [] }) {
  const [openIds, setOpenIds] = useState(new Set([items[0]?.id || 'faq-1']));

  const toggle = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  if (!items.length) {
    return (
      <p className="text-sm text-slate-500 py-4 text-center">
        No questions available in this section.
      </p>
    );
  }

  return (
    <div className="divide-y divide-slate-200 border-y border-slate-200">
      {items.map((item, index) => {
        const isOpen = openIds.has(item.id);
        const buttonId = `faq-btn-${item.id || index}`;
        const panelId = `faq-panel-${item.id || index}`;

        return (
          <div key={item.id || index} className="py-4">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="w-full flex items-center justify-between text-left gap-4 font-medium text-slate-900 hover:text-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded"
              >
                <span className="text-sm sm:text-base font-semibold leading-snug">
                  {item.question}
                </span>
                <span className={`shrink-0 transition-transform duration-200 text-slate-400 ${isOpen ? 'rotate-180 text-blue-600' : ''}`}>
                  <ChevronDown className="w-5 h-5" aria-hidden="true" />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={`mt-2.5 pr-6 ${!isOpen ? 'hidden' : 'block'}`}
            >
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
