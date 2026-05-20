import React, { useState, useMemo } from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { incidents, categoryColors, categoryIcons } from './data/incidents'

const allCategories = Object.keys(categoryColors)

function StatsBar({ filtered }) {
  const countries = new Set(filtered.map(i => i.country)).size
  const notDetected = filtered.filter(i =>
    i.outcome.toLowerCase().includes('not detected') ||
    i.outcome.toLowerCase().includes('too late') ||
    i.outcome.toLowerCase().includes('harm already')
  ).length
  const pct = filtered.length > 0 ? Math.round((notDetected / filtered.length) * 100) : 0

  return (
    <div style={{
      display: 'flex', gap: 24, padding: '16px 0', borderBottom: '1px solid var(--navy-mid)',
      marginBottom: 16, flexWrap: 'wrap'
    }}>
      {[
        { label: 'Incidents', value: filtered.length },
        { label: 'Countries', value: countries },
        { label: 'Detection Failure', value: `${pct}%` },
      ].map(s => (
        <div key={s.label} style={{ textAlign: 'center', minWidth: 80 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'var(--accent-blue)' }}>
            {s.value}
          </div>
          <div style={{ fontSize: 11, color: 'var(--slate-light)', textTransform: 'uppercase', letterSpacing: 1 }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  )
}

function CategoryFilter({ active, onToggle }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}>
      <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: 1.5, color: 'var(--slate)', marginBottom: 4 }}>
        Filter by category
      </div>
      {allCategories.map(cat => {
        const isActive = active.includes(cat)
        return (
          <button
            key={cat}
            onClick={() => onToggle(cat)}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '8px 12px', border: 'none', borderRadius: 8,
              background: isActive ? categoryColors[cat] + '22' : 'transparent',
              color: isActive ? categoryColors[cat] : 'var(--slate)',
              cursor: 'pointer', fontSize: 13, fontFamily: 'var(--font-body)',
              transition: 'all 0.2s', textAlign: 'left',
              borderLeft: `3px solid ${isActive ? categoryColors[cat] : 'transparent'}`
            }}
          >
            <span style={{ fontSize: 16 }}>{categoryIcons[cat]}</span>
            <span style={{ fontWeight: isActive ? 600 : 400 }}>{cat}</span>
          </button>
        )
      })}
      <button
        onClick={() => onToggle('ALL')}
        style={{
          marginTop: 4, padding: '6px 12px', border: '1px solid var(--navy-mid)',
          borderRadius: 8, background: 'transparent', color: 'var(--slate-light)',
          cursor: 'pointer', fontSize: 12, fontFamily: 'var(--font-body)'
        }}
      >
        {active.length === allCategories.length ? 'Clear all' : 'Select all'}
      </button>
    </div>
  )
}

function IncidentPopup({ incident }) {
  const primaryCat = incident.categories[0]
  const color = categoryColors[primaryCat]

  return (
    <div style={{ padding: 20, maxWidth: 360 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <span style={{
          background: color, color: '#fff', padding: '3px 10px', borderRadius: 20,
          fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5
        }}>
          {primaryCat}
        </span>
        {incident.categories.length > 1 && (
          <span style={{
            background: categoryColors[incident.categories[1]] + '33',
            color: categoryColors[incident.categories[1]],
            padding: '3px 10px', borderRadius: 20, fontSize: 11, fontWeight: 600
          }}>
            +{incident.categories.length - 1}
          </span>
        )}
      </div>

      <h3 style={{
        fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700,
        marginBottom: 8, lineHeight: 1.3, color: 'var(--white)'
      }}>
        {incident.country} — {incident.date}
      </h3>

      <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--slate-light)', marginBottom: 14 }}>
        {incident.description}
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12 }}>
        <div>
          <div style={{ fontSize: 10, color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>
            Channel
          </div>
          <div style={{ fontSize: 12, color: 'var(--off-white)' }}>{incident.channel}</div>
        </div>
        <div>
          <div style={{ fontSize: 10, color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>
            Outcome
          </div>
          <div style={{
            fontSize: 12,
            color: incident.outcome.toLowerCase().includes('not detected') ? '#ef4444' : '#22c55e'
          }}>
            {incident.outcome}
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 10, color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>
          Forensic Signals
        </div>
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          {incident.contentSignals.map(s => (
            <span key={s} style={{
              background: '#2563eb22', color: '#60a5fa', padding: '2px 8px',
              borderRadius: 4, fontSize: 11, fontWeight: 500
            }}>
              {s}
            </span>
          ))}
          {incident.contextSignals.map(s => (
            <span key={s} style={{
              background: '#f9731622', color: '#fb923c', padding: '2px 8px',
              borderRadius: 4, fontSize: 11, fontWeight: 500
            }}>
              {s}
            </span>
          ))}
          {incident.contentSignals.length === 0 && incident.contextSignals.length === 0 && (
            <span style={{ fontSize: 11, color: 'var(--slate)' }}>No signals annotated</span>
          )}
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--navy-mid)', paddingTop: 10 }}>
        <div style={{ fontSize: 10, color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>
          Source ({incident.tier})
        </div>
        <div style={{ fontSize: 11, color: 'var(--slate-light)' }}>{incident.source}</div>
      </div>
    </div>
  )
}

function Legend() {
  return (
    <div style={{
      position: 'absolute', bottom: 24, left: 24, zIndex: 1000,
      background: 'var(--navy-light)', border: '1px solid var(--navy-mid)',
      borderRadius: 12, padding: 16, backdropFilter: 'blur(8px)'
    }}>
      <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: 1.5, color: 'var(--slate)', marginBottom: 8 }}>
        Categories
      </div>
      {allCategories.map(cat => (
        <div key={cat} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: categoryColors[cat] }} />
          <span style={{ fontSize: 11, color: 'var(--slate-light)' }}>{cat}</span>
        </div>
      ))}
      <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ fontSize: 10, background: '#2563eb22', color: '#60a5fa', padding: '1px 6px', borderRadius: 3 }}>Content</span>
          <span style={{ fontSize: 10, background: '#f9731622', color: '#fb923c', padding: '1px 6px', borderRadius: 3 }}>Context</span>
        </div>
      </div>
    </div>
  )
}

function ImagePanel({ title, src, alt }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div style={{ marginBottom: 32 }}>
      <h3 style={{
        fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700,
        marginBottom: 12, color: 'var(--white)'
      }}>
        {title}
      </h3>
      <div
        onClick={() => setExpanded(!expanded)}
        style={{
          cursor: 'pointer', borderRadius: 12, overflow: 'hidden',
          border: '1px solid var(--navy-mid)', transition: 'transform 0.3s',
          transform: expanded ? 'scale(1)' : 'scale(1)'
        }}
      >
        <img src={src} alt={alt} style={{ width: '100%', display: 'block' }} />
      </div>
      {expanded && (
        <div
          onClick={() => setExpanded(false)}
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.9)', zIndex: 2000,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', padding: 40
          }}
        >
          <img src={src} alt={alt} style={{ maxWidth: '95%', maxHeight: '95vh', borderRadius: 12 }} />
        </div>
      )}
    </div>
  )
}

function IncidentList({ filtered }) {
  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: 1.5, color: 'var(--slate)', marginBottom: 8 }}>
        All incidents ({filtered.length})
      </div>
      <div style={{ maxHeight: 300, overflowY: 'auto' }}>
        {filtered.map(inc => {
          const color = categoryColors[inc.categories[0]]
          return (
            <div key={inc.id} style={{
              padding: '10px 12px', borderBottom: '1px solid var(--navy-mid)',
              borderLeft: `3px solid ${color}`, marginBottom: 4, borderRadius: 4
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--white)' }}>
                  {inc.country}
                </span>
                <span style={{ fontSize: 11, color: 'var(--slate)' }}>{inc.date}</span>
              </div>
              <div style={{ fontSize: 11, color: 'var(--slate-light)', marginTop: 2, lineHeight: 1.4 }}>
                {inc.description.substring(0, 100)}...
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function App() {
  const [activeCategories, setActiveCategories] = useState([...allCategories])
  const [activeTab, setActiveTab] = useState('map')

  const handleToggle = (cat) => {
    if (cat === 'ALL') {
      setActiveCategories(
        activeCategories.length === allCategories.length ? [] : [...allCategories]
      )
    } else {
      setActiveCategories(prev =>
        prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
      )
    }
  }

  const filtered = useMemo(() =>
    incidents.filter(inc => inc.categories.some(c => activeCategories.includes(c))),
    [activeCategories]
  )

  return (
    <div style={{ minHeight: '100vh', background: 'var(--navy)' }}>
      {/* Header */}
      <header style={{
        padding: '24px 32px', borderBottom: '1px solid var(--navy-mid)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 16
      }}>
        <div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700,
            color: 'var(--white)', letterSpacing: -0.5
          }}>
            🌐 Global Deepfake Incident Map
          </h1>
          <p style={{ fontSize: 13, color: 'var(--slate-light)', marginTop: 4 }}>
            30 documented incidents across 18 countries — interactive companion to
            <em> "Where Deepfakes Strike"</em>
          </p>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {['map', 'analysis'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '8px 20px', border: 'none', borderRadius: 8,
                background: activeTab === tab ? 'var(--accent-blue)' : 'var(--navy-mid)',
                color: activeTab === tab ? '#fff' : 'var(--slate-light)',
                cursor: 'pointer', fontSize: 13, fontWeight: 600,
                fontFamily: 'var(--font-body)', textTransform: 'capitalize',
                transition: 'all 0.2s'
              }}
            >
              {tab === 'map' ? '🗺️ Map' : '📊 Analysis'}
            </button>
          ))}
        </div>
      </header>

      {activeTab === 'map' ? (
        <div style={{ display: 'flex', height: 'calc(100vh - 85px)' }}>
          {/* Sidebar */}
          <div style={{
            width: 300, padding: '20px 20px', overflowY: 'auto',
            borderRight: '1px solid var(--navy-mid)', flexShrink: 0
          }}>
            <StatsBar filtered={filtered} />
            <CategoryFilter active={activeCategories} onToggle={handleToggle} />
            <IncidentList filtered={filtered} />
          </div>

          {/* Map */}
          <div style={{ flex: 1, position: 'relative' }}>
            <MapContainer
              center={[20, 30]}
              zoom={2.5}
              minZoom={2}
              maxZoom={8}
              style={{ height: '100%', width: '100%' }}
              worldCopyJump={true}
            >
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />
              {filtered.map(inc => {
                const color = categoryColors[inc.categories[0]]
                return (
                  <CircleMarker
                    key={inc.id}
                    center={[inc.lat, inc.lng]}
                    radius={8}
                    pathOptions={{
                      fillColor: color,
                      fillOpacity: 0.85,
                      color: '#fff',
                      weight: 2,
                      opacity: 0.9
                    }}
                  >
                    <Popup maxWidth={400}>
                      <IncidentPopup incident={inc} />
                    </Popup>
                  </CircleMarker>
                )
              })}
              <Legend />
            </MapContainer>
          </div>
        </div>
      ) : (
        /* Analysis tab */
        <div style={{
          maxWidth: 1000, margin: '0 auto', padding: '40px 32px'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700,
            marginBottom: 8, color: 'var(--white)'
          }}>
            Analysis & Visualizations
          </h2>
          <p style={{ fontSize: 14, color: 'var(--slate-light)', marginBottom: 32, lineHeight: 1.6 }}>
            These figures summarize patterns across 30 documented deepfake incidents spanning 18 countries, 
            5 abuse categories, and 7 forensic signal dimensions. Click any image to expand.
          </p>

          <ImagePanel
            title="Figure 1: Pathways of Deepfake Incidents (Sankey Diagram)"
            src="./sankey.png"
            alt="Sankey diagram showing flows from category through delivery channel to detection outcome"
          />

          <ImagePanel
            title="Figure 2: Signal Prevalence Across Incidents (Radar Chart)"
            src="./radar.png"
            alt="Radar chart showing prevalence of content-level and context-level signals"
          />

          {/* Key findings summary */}
          <div style={{
            background: 'var(--navy-light)', borderRadius: 16, padding: 32,
            border: '1px solid var(--navy-mid)', marginTop: 16
          }}>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700,
              marginBottom: 20, color: 'var(--white)'
            }}>
              Key Findings
            </h3>
            {[
              { stat: '46.7%', label: 'of incidents were not detected in time — harm preceded detection in nearly half of all cases.' },
              { stat: '100%', label: 'of financial fraud incidents involved context-level signals, yet no current benchmark addresses context-level detection.' },
              { stat: '78%', label: 'of NCII incidents involved spatial/geometric signals, but harm is driven by distribution, not believability.' },
              { stat: '18', label: 'countries represented in incidents vs. 3–4 countries in major detection benchmarks (FF++, DFDC, Celeb-DF).' },
              { stat: '80%+', label: 'of financial fraud and social engineering cases involved context-level signals that current automated detectors cannot address.' },
            ].map((f, i) => (
              <div key={i} style={{
                display: 'flex', gap: 16, marginBottom: 16, alignItems: 'baseline',
                paddingBottom: 16, borderBottom: i < 4 ? '1px solid var(--navy-mid)' : 'none'
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700,
                  color: 'var(--accent-blue)', minWidth: 80, textAlign: 'right'
                }}>
                  {f.stat}
                </span>
                <span style={{ fontSize: 14, color: 'var(--slate-light)', lineHeight: 1.5 }}>
                  {f.label}
                </span>
              </div>
            ))}
          </div>

          {/* Methodology note */}
          <div style={{
            marginTop: 32, padding: 24, borderRadius: 12,
            border: '1px solid var(--navy-mid)', background: 'var(--navy-light)'
          }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 14, color: 'var(--white)', marginBottom: 8 }}>
              About this dataset
            </h4>
            <p style={{ fontSize: 13, color: 'var(--slate-light)', lineHeight: 1.6 }}>
              This interactive map accompanies the paper <em>"Where Deepfakes Strike: A Geographic Mapping 
              of Synthetic Media Threats and Detection Signal Relevance"</em>. Incidents were collected from 
              government reports (FinCEN, FBI IC3, Europol), academic datasets (Deepfake-Eval-2024), 
              fact-checking organisations (BOOM Live, AFP), investigative journalism, and NGO reports. 
              Each incident is annotated against the forensic signal taxonomy from <em>"Beyond Artifacts: 
              A Failure-Mode Taxonomy of Content and Context Signals for Deepfake Detection"</em>. 
              This map reflects documented incidents and does not represent the true global distribution of 
              deepfake threats — gaps in coverage reflect reporting infrastructure, not absence of harm.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
