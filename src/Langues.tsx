import { use, useState } from 'react'
import type { Language } from './type'

type LanguesProps = {
  languagesPromise: Promise<Language[]>
}

const Langues = ({ languagesPromise }: LanguesProps) => {
  const languages = use(languagesPromise)
  const [selectedIds, setSelectedIds] = useState<number[]>([])

  const toggleLanguage = (id: number) => {
    setSelectedIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }

  const selectedLanguages = languages.filter((language) => selectedIds.includes(language.id))

  return (
    <div className="layout">
      <div className="card-grid">
        {languages.map((language) => {
          const isSelected = selectedIds.includes(language.id)

          return (
            <div key={language.id} className={`card ${isSelected ? 'selected' : ''}`}>
              <div className="card-top">
                <span className="icon" aria-hidden="true" />
                {language.badge ? <span className="badge">{language.badge}</span> : null}
              </div>

              <h3>{language.name}</h3>
              <p>{language.description}</p>

              <div className="meta">
                <span>{language.category}</span>
                <span>{language.level}</span>
                <span>★ {language.rating}</span>
              </div>

              <button type="button" className="cta" onClick={() => toggleLanguage(language.id)}>
                {isSelected ? 'Remove from Stack' : 'Add to Stack'}
              </button>
            </div>
          )
        })}
      </div>

      <aside className="stack">
        <div className="stack-head">
          <h4>Your Stack</h4>
          <span>{selectedIds.length}</span>
        </div>

        {selectedLanguages.length === 0 ? (
          <p className="empty">No technologies selected yet.</p>
        ) : (
          <>
            <div className="stack-items">
              {selectedLanguages.map((language) => (
                <div key={language.id} className="stack-item">
                  <span className="stack-name">
                    <span className="stack-icon">{language.name.charAt(0)}</span>
                    {language.name}
                  </span>
                  <button type="button" onClick={() => toggleLanguage(language.id)}>
                    ×
                  </button>
                </div>
              ))}
            </div>

            <button type="button" className="clear-button" onClick={() => setSelectedIds([])}>
              Remove All
            </button>
          </>
        )}
      </aside>
    </div>
  )
}

export default Langues