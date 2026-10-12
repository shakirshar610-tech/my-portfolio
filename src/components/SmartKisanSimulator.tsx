import React, { useState } from 'react';
import { Sprout, AlertCircle, CheckCircle2, Droplets, ShieldCheck, RefreshCw, Sparkles, ExternalLink } from 'lucide-react';

interface CropCase {
  id: string;
  name: string;
  urduName: string;
  season: 'Kharif' | 'Rabi';
  region: string;
  symptoms: {
    label: string;
    disease: string;
    confidence: number;
    severity: 'Low' | 'Moderate' | 'Critical';
    organicRemedy: string;
    chemicalRemedy: string;
    waterAdvice: string;
  }[];
}

const CROP_DATABASE: CropCase[] = [
  {
    id: 'cotton',
    name: 'Cotton (Kapas)',
    urduName: 'کپاس',
    season: 'Kharif',
    region: 'Sindh (Sukkur, Ghotki, Khairpur) & Southern Punjab',
    symptoms: [
      {
        label: 'Upward curling leaves, thickened veins, stunted square formation',
        disease: 'Cotton Leaf Curl Virus (CLCuV) transmitted by Whitefly',
        confidence: 96,
        severity: 'Critical',
        organicRemedy: 'Neem oil spray (2%) + yellow sticky traps (15 per acre) to curb whitefly vectors.',
        chemicalRemedy: 'Targeted vector management using Pyriproxyfen or Diafenthiuron as per agricultural department guidelines.',
        waterAdvice: 'Avoid water stress during square formation; ensure drainage to prevent vector humidity spikes.',
      },
      {
        label: 'Water-soaked angular spots on leaves turning dark brown/black',
        disease: 'Bacterial Blight / Angular Leaf Spot (Xanthomonas malvacearum)',
        confidence: 91,
        severity: 'Moderate',
        organicRemedy: 'Copper oxychloride seed treatment; destroy infected plant debris after harvest.',
        chemicalRemedy: 'Foliar spray of Copper Hydroxide combined with Streptocycline under extension officer supervision.',
        waterAdvice: 'Irrigate via furrows; avoid overhead splashing which spreads bacteria.',
      },
    ],
  },
  {
    id: 'wheat',
    name: 'Wheat (Gandum)',
    urduName: 'گندم',
    season: 'Rabi',
    region: 'Indus Basin canal irrigated lands',
    symptoms: [
      {
        label: 'Yellow linear stripes of powdery pustules along leaf veins',
        disease: 'Stripe Rust / Yellow Rust (Puccinia striiformis)',
        confidence: 94,
        severity: 'Critical',
        organicRemedy: 'Plant resistant local cultivars (e.g. Akbar-2019, Dilkash-20); apply bio-fungicide extracts.',
        chemicalRemedy: 'Immediate foliar spray of Tebuconazole or Propiconazole @ 200ml/acre.',
        waterAdvice: 'Cease excessive late-stage irrigation during cool foggy mornings to reduce fungal spore germination.',
      },
      {
        label: 'Black powdery mass replacing grain heads at maturity',
        disease: 'Loose Smut (Ustilago tritici)',
        confidence: 98,
        severity: 'Moderate',
        organicRemedy: 'Solar heat treatment of seeds in June/July sun before sowing season.',
        chemicalRemedy: 'Pre-sowing seed dressing with Carboxin + Thiram (Vitavax).',
        waterAdvice: 'Standard crown root irrigation schedule; maintain balanced potassium.',
      },
    ],
  },
  {
    id: 'rice',
    name: 'Rice (Chawal)',
    urduName: 'چاول',
    season: 'Kharif',
    region: 'Sindh (Larkana, Jacobabad, Shikarpur)',
    symptoms: [
      {
        label: 'Spindle-shaped lesions with grey center and brown borders on leaves',
        disease: 'Rice Blast (Magnaporthe oryzae)',
        confidence: 95,
        severity: 'Critical',
        organicRemedy: 'Silica soil supplementation; avoid excessive split urea doses.',
        chemicalRemedy: 'Tricyclazole 75% WP @ 120g/acre applied during tillering and panicle emergence.',
        waterAdvice: 'Maintain continuous 2-inch shallow standing water; avoid drying the paddy completely.',
      },
    ],
  },
  {
    id: 'mango',
    name: 'Mango (Aam)',
    urduName: 'آم',
    season: 'Kharif',
    region: 'Sindh (Mirpurkhas, Hyderabad) & Multan',
    symptoms: [
      {
        label: 'Dark sunken spots on developing fruit and flower panicle blight',
        disease: 'Anthracnose (Colletotrichum gloeosporioides)',
        confidence: 92,
        severity: 'Moderate',
        organicRemedy: 'Prune dead twigs after harvest; spray Bordeaux mixture 1% prior to blossom burst.',
        chemicalRemedy: 'Spray Azoxystrobin + Difenoconazole during fruit set stage.',
        waterAdvice: 'Drip or basin irrigation away from the tree trunk collar to prevent root mold.',
      },
    ],
  },
];

export const SmartKisanSimulator: React.FC = () => {
  const [selectedCropId, setSelectedCropId] = useState('cotton');
  const [selectedSymptomIdx, setSelectedSymptomIdx] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [showUrdu, setShowUrdu] = useState(false);

  const currentCrop = CROP_DATABASE.find((c) => c.id === selectedCropId) || CROP_DATABASE[0];
  const activeCase = currentCrop.symptoms[selectedSymptomIdx] || currentCrop.symptoms[0];

  const handleCropChange = (cropId: string) => {
    setIsSimulating(true);
    setSelectedCropId(cropId);
    setSelectedSymptomIdx(0);
    setTimeout(() => setIsSimulating(false), 300);
  };

  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
      {/* Simulator Bar */}
      <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Sprout className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-white">
              SmartKisan AI Advisory Simulator
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Interactive diagnostic engine built by Shakir Hussain for Pakistani agriculture
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowUrdu(!showUrdu)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
              showUrdu
                ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white'
            }`}
          >
            {showUrdu ? 'اردو فعال (Urdu Active)' : 'Switch to Urdu Labels'}
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        
        {/* Step 1: Crop Selection Buttons */}
        <div className="space-y-2">
          <div className="text-xs font-semibold text-slate-400">
            {showUrdu ? '1. فصل منتخب کریں (Select Target Crop):' : '1. Select Target Crop:'}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {CROP_DATABASE.map((crop) => (
              <button
                key={crop.id}
                onClick={() => handleCropChange(crop.id)}
                className={`p-3 rounded-xl text-left border transition-all ${
                  selectedCropId === crop.id
                    ? 'bg-emerald-500/10 border-emerald-500/50 text-white'
                    : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <div className="text-xs font-bold flex items-center justify-between">
                  <span>{crop.name}</span>
                  {selectedCropId === crop.id && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 font-mono">
                  {crop.season} · {showUrdu ? crop.urduName : crop.region.split('&')[0]}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Symptom Selection */}
        <div className="space-y-2">
          <div className="text-xs font-semibold text-slate-400">
            {showUrdu ? '2. علامات کا انتخاب کریں (Select Observed Field Symptoms):' : '2. Select Observed Field Symptoms:'}
          </div>
          <div className="space-y-1.5">
            {currentCrop.symptoms.map((sym, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedSymptomIdx(idx)}
                className={`w-full p-3 rounded-lg text-left text-xs transition-colors border flex items-center justify-between ${
                  selectedSymptomIdx === idx
                    ? 'bg-slate-800/90 border-slate-700 text-white font-medium'
                    : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="leading-relaxed">"{sym.label}"</span>
                <span className="text-[11px] font-mono text-emerald-400 shrink-0 ml-3">
                  Match {idx + 1}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* AI Output Card */}
        <div className={`p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4 transition-opacity ${isSimulating ? 'opacity-50' : 'opacity-100'}`}>
          
          {/* Output Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
            <div>
              <div className="text-[11px] font-semibold text-emerald-400">
                AI Diagnostic Result
              </div>
              <h4 className="text-base font-bold text-white mt-0.5">
                {activeCase.disease}
              </h4>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="text-slate-400">
                Confidence: <strong className="text-emerald-400 font-bold">{activeCase.confidence}%</strong>
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                activeCase.severity === 'Critical' 
                  ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30' 
                  : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
              }`}>
                {activeCase.severity} Severity
              </span>
            </div>
          </div>

          {/* Actionable Remedies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            
            {/* Organic Remedy */}
            <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-1.5 font-semibold text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{showUrdu ? 'قدرتی و نامیاتی علاج' : 'Organic / Cultural Action'}</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                {activeCase.organicRemedy}
              </p>
            </div>

            {/* Chemical Treatment */}
            <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-1.5 font-semibold text-blue-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{showUrdu ? 'کیمیائی سفارشات' : 'Recommended Agro-Chemical'}</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                {activeCase.chemicalRemedy}
              </p>
            </div>

            {/* Irrigation Advisory */}
            <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-1.5 font-semibold text-cyan-300">
                <Droplets className="w-3.5 h-3.5" />
                <span>{showUrdu ? 'آبپاشی و موسمی مشورہ' : 'Water & Canal Timing'}</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                {activeCase.waterAdvice}
              </p>
            </div>

          </div>

          <div className="text-[11px] text-slate-500 flex items-center justify-between pt-2">
            <span>Model trained with regional agronomic parameters for Sindh & Punjab farming conditions.</span>
            <a
              href="https://github.com/shakirshar610-tech/Smartkisan-Agriculture-App"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline inline-flex items-center gap-1"
            >
              <span>Repository Code</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
