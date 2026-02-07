import React, { useState } from 'react'
import { Settings, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react'

export function SceneInspector({ config, setConfig }) {
    const [isOpen, setIsOpen] = useState(true)
    const [copied, setCopied] = useState(false)
    const [activeTab, setActiveTab] = useState('monitor')

    const copyToClipboard = () => {
        navigator.clipboard.writeText(JSON.stringify(config, null, 2))
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const handleUpdate = (path, value) => {
        const newConfig = { ...config }
        const keys = path.split('.')
        let current = newConfig
        for (let i = 0; i < keys.length - 1; i++) {
            current = current[keys[i]]
        }
        current[keys[keys.length - 1]] = value
        setConfig(newConfig)
    }

    const ControlGroup = ({ title, path, values }) => (
        <div className="mb-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-[#00ff41] mb-2">{title}</h4>
            <div className="grid grid-cols-3 gap-2">
                {['x', 'y', 'z'].map((axis, i) => (
                    <div key={axis} className="flex flex-col">
                        <label className="text-[8px] uppercase text-white/40 mb-1">{axis}</label>
                        <input
                            type="number"
                            step="0.001"
                            value={values[i]}
                            onChange={(e) => {
                                const newValues = [...values]
                                newValues[i] = parseFloat(e.target.value)
                                handleUpdate(path, newValues)
                            }}
                            className="bg-black/50 border border-white/10 rounded px-1 py-1 text-[10px] text-white focus:border-[#00ff41] outline-none"
                        />
                    </div>
                ))}
            </div>
        </div>
    )

    const SingleControl = ({ title, path, value, step = 0.01 }) => (
        <div className="mb-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-[#00ff41] mb-2">{title}</h4>
            <input
                type="number"
                step={step}
                value={value}
                onChange={(e) => handleUpdate(path, parseFloat(e.target.value))}
                className="w-full bg-black/50 border border-white/10 rounded px-1 py-1 text-[10px] text-white focus:border-[#00ff41] outline-none"
            />
        </div>
    )

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed top-4 right-4 z-[100] p-3 bg-black/80 text-white rounded-full border border-white/20 hover:bg-[#00ff41] hover:text-black transition-colors"
            >
                <Settings size={20} />
            </button>
        )
    }

    return (
        <div className="fixed top-4 right-4 z-[100] w-72 bg-black/90 backdrop-blur-xl border border-white/20 rounded-lg shadow-2xl flex flex-col max-h-[90vh]">
            <header className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
                <div className="flex items-center gap-2">
                    <Settings size={16} className="text-[#00ff41]" />
                    <h3 className="text-xs font-black uppercase tracking-tighter text-white">Scene Inspector</h3>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => handleUpdate('showGizmos', !config.showGizmos)}
                        className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded border transition-colors ${config.showGizmos ? 'bg-[#00ff41] text-black border-[#00ff41]' : 'text-white/40 border-white/10 hover:border-white/40'}`}
                    >
                        Gizmos
                    </button>
                    <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
                        <ChevronUp size={16} />
                    </button>
                </div>
            </header>

            <div className="flex border-b border-white/10 bg-black/40">
                {['monitor', 'phone', 'camera'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest transition-colors ${activeTab === tab ? 'text-[#00ff41] bg-white/5' : 'text-white/30 hover:text-white/60'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="p-4 overflow-y-auto flex-1 custom-scrollbar-none">
                {activeTab === 'monitor' && (
                    <>
                        <ControlGroup title="Monitor Position" path="monitor.position" values={config.monitor.position} />
                        <ControlGroup title="Monitor Rotation" path="monitor.rotation" values={config.monitor.rotation} />
                        <SingleControl title="Distance Factor (Scale)" path="monitor.distanceFactor" value={config.monitor.distanceFactor} step={0.1} />
                    </>
                )}

                {activeTab === 'phone' && (
                    <>
                        <ControlGroup title="Phone Position" path="phone.position" values={config.phone.position} />
                        <ControlGroup title="Phone Rotation" path="phone.rotation" values={config.phone.rotation} />
                        <SingleControl title="Distance Factor (Scale)" path="phone.distanceFactor" value={config.phone.distanceFactor} step={0.01} />
                    </>
                )}

                {activeTab === 'camera' && (
                    <>
                        <ControlGroup title="Initial Camera Pos" path="camera.initial" values={config.camera.initial} />
                        <ControlGroup title="PC Focus Pos" path="camera.pc.position" values={config.camera.pc.position} />
                        <ControlGroup title="PC Focus LookAt" path="camera.pc.lookAt" values={config.camera.pc.lookAt} />
                    </>
                )}
            </div>

            <footer className="p-4 border-t border-white/10 bg-black/40">
                <button
                    onClick={copyToClipboard}
                    className="w-full flex items-center justify-center gap-2 py-2 bg-[#00ff41] text-black text-[10px] font-black uppercase tracking-widest rounded hover:bg-[#00f03c] active:scale-[0.98] transition-all"
                >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? 'Copied to Clipboard!' : 'Copy Configuration'}
                </button>
                <p className="mt-2 text-[8px] text-white/30 text-center uppercase tracking-widest">Paste the config in our chat when ready.</p>
            </footer>
        </div>
    )
}
