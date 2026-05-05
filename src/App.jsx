import { useState } from "react";

const HEADSHOT = "/headshot.jpg";

const GALLERY = [
  { src: "/gallery1.jpg", caption: "BOLDforce — Dreaming in Action 2024", context: "AI Lunch N Learn · Co-Founder & Executive Sponsor" },
  { src: "/gallery6.jpg", caption: "BOLDforce — Dreaming in Action 2024", context: "Co-Founder & Executive Sponsor · Salesforce Toronto" },
  { src: "/gallery2.jpg", caption: "Salesforce Connections — Theater 3", context: "Featured Speaker · ABM in Healthcare & Life Sciences" },
  { src: "/gallery3.jpg", caption: "BLK Owned — Trailblazer Programme", context: "Board Secretary & Strategy Lead" },
  { src: "/gallery4.jpg", caption: "BLK Owned — Community Event", context: "Board Secretary & Strategy Lead" },
  { src: "/gallery5.jpg", caption: "Red Bulls Stadium — Customer Visit", context: "Strategic Enterprise · New York" },
  { src: "/gallery7.jpg", caption: "Dreamforce — Marketing Cloud", context: "Featured Speaker · San Francisco" },
  { src: "/gallery8.jpg", caption: "BOLDforce Canada — Team", context: "Co-Founder & Executive Sponsor · Salesforce" },
  { src: "/gallery9.jpg", caption: "OBSIDI by BPTN Awards", context: "Presenting · BMO Sponsored · Toronto" },
];

const STATS = [
  { value: "12", label: "Years at Salesforce" },
  { value: "139%", label: "Career Attainment Avg" },
  { value: "9×", label: "Quota Achievers Club" },
  { value: "400+", label: "Walmart Locations Won" },
  { value: "500+", label: "ERG Members Built" },
];

const TABS = ["Overview", "Experience", "Case Studies", "Leadership", "Gallery"];

const ROLES = [
  {
    title: "Director, Enterprise Sales",
    company: "Salesforce",
    period: "FY26 – FY27",
    tag: "Fortune 500 · Physical Operations & Distribution",
    intro: "Built and led a 10-person enterprise AE team across six North American offices covering Fortune 500 accounts with large-scale physical operations, distribution networks, and field workforces — generating USD $10M annual run rate, 30% of total segment revenue.",
    bullets: [
      "Key accounts: Walmart, PepsiCo, Coca-Cola, Walgreens, Kroger, L'Oréal, MARS — organisations with tens of thousands of field employees, complex supply chains, and distributed physical operations.",
      "Drove C-suite engagement across CMO, CTO, and CDO stakeholders with multi-year expansion strategies; coached AEs on enterprise cycle navigation and competitive displacement.",
      "Secured L1A executive transfer visa based on specialised enterprise leadership impact.",
    ],
  },
  {
    title: "Strategic Enterprise Account Executive",
    company: "Salesforce Canada",
    period: "FY23 – FY25",
    tag: "Fleet · Retail Operations · Fuel Distribution · Energy",
    intro: "Covered Canada's largest physical-economy enterprises — organisations with national fleet footprints, distributed field workforces, and complex operations. 144% quota attainment. Peak Performers Club FY23. CAD $10M TCV.",
    bullets: [
      "Walmart Canada: Net-new after 24-month competitive displacement — enterprise-wide platform adoption across 400+ locations, national fleet and operations footprint. +90% push engagement, +40% CTR.",
      "Home Depot Canada: Won 12-month competitive RFP across a field-service and retail operations environment. 80× ROI, 7-month payback, $115.9M projected annual impact.",
      "Harnois Énergies: Net-new for a Quebec-based fuel distribution and energy company — 40% conversion rate, 66% captured in the first 30 days of deployment.",
      "Beer Store: Full competitive displacement of incumbent stack in 7 weeks — end-to-end platform adoption including website, app, and enterprise data infrastructure across a province-wide distribution network.",
      "Loblaw Companies: Multi-year C-suite advisory relationship across 25+ lines of business — organisations reaching 50%+ of the Canadian population across grocery, pharmacy, and fuel.",
    ],
  },
  {
    title: "Enterprise Account Executive",
    company: "Salesforce",
    period: "FY20 – FY22",
    tag: "Retail · Technology · Healthcare",
    intro: "Managed Fortune 500 enterprise accounts across technology, healthcare, and retail & consumer goods. 107% quota attainment. Quota Achievers Club FY20–FY22.",
    bullets: [
      "Roots Canada: AI-driven commerce deployment — 26.2% of total revenue via personalised recommendations, 7× ROI on abandoned recovery.",
      "#1 Global Pardot AE (FY19). Quota Achievers Club consecutive.",
    ],
  },
  {
    title: "SMB & Commercial Account Executive",
    company: "Salesforce",
    period: "FY16 – FY19",
    tag: "Healthcare & Life Sciences · Field Operations",
    intro: "High-velocity SMB and commercial territory across US and Canada. 131% attainment (FY16–FY19). 2× Peak Performers Club.",
    bullets: [
      "Sole field contributor on Salesforce's global Healthcare & Life Sciences ABM go-to-market strategy — featured speaker at Dreamforce, Connections, and World Tour.",
      "Attained 167% quota as BDR; ranked #1 — promoted to Account Executive within 12 months.",
    ],
  },
];

const CASES = [
  {
    tag: "Fleet & Retail Operations — National Scale",
    company: "Walmart Canada",
    challenge: "Walmart Canada needed enterprise-wide platform adoption across their national operations footprint — 400+ locations, a large field workforce, and a supply chain spanning coast to coast. Incumbent vendor entrenched after a 24-month competitive cycle.",
    approach: "Led a full competitive displacement over 24 months — building C-suite relationships across IT, operations, and marketing, navigating Walmart's global procurement governance with alignment at their Bentonville HQ.",
    outcome: "Net-new enterprise close. Platform adopted across 400+ locations nationwide. +90% push engagement, +40% CTR, +11% AOV. First WhatsApp deployment in Canada.",
  },
  {
    tag: "Fuel Distribution & Energy",
    company: "Harnois Énergies",
    challenge: "Harnois Énergies, a Quebec-based fuel distributor and energy company operating a large physical network of service stations and distribution assets, needed to modernise their customer communications and operations platform.",
    approach: "Led a net-new enterprise close — navigating a French-language procurement environment, aligning IT, marketing, and operations stakeholders, and sequencing deployment to hit Q1 targets.",
    outcome: "40% overall conversion rate. 66% of conversions captured within the first 30 days of deployment. Full platform live within 12 months.",
  },
  {
    tag: "Retail Operations — RFP Displacement",
    company: "Home Depot Canada",
    challenge: "Home Depot Canada required a platform capable of delivering measurable operations and customer experience ROI across a large-format retail and field-service environment. 12-month competitive RFP evaluated three platforms.",
    approach: "Led the full RFP response and executive engagement across digital, IT, and operations stakeholders. Designed a phased deployment roadmap tied to measurable outcomes across their store and field-service network.",
    outcome: "80× ROI post-implementation. 7-month payback period. $115.9M projected annual impact.",
  },
  {
    tag: "Distribution Network — Speed to Value",
    company: "Beer Store",
    challenge: "The Beer Store, operating a province-wide distribution and retail network, needed to modernise their technology stack and launch new digital infrastructure on a compressed timeline — displacing MailChimp and HubSpot.",
    approach: "Structured a full competitive displacement and platform close in 7 weeks. Sequenced end-to-end deployment across marketing, IT, and operations to hit their launch window.",
    outcome: "7-week net-new close. Full platform deployed at launch — website, app, enterprise data infrastructure, and personalised communications across their distribution network.",
  },
  {
    tag: "Large-Scale Physical Operations",
    company: "Loblaw Companies",
    challenge: "Loblaw, Canada's largest retailer with 25+ lines of business spanning grocery, pharmacy, fuel, and financial services, needed a platform capable of operating at national scale across a massive physical and field workforce.",
    approach: "Built a multi-year C-suite advisory relationship across Loblaw's digital, IT, and operations leadership. Architected a phased expansion roadmap — starting with PC Optimum loyalty and growing across Shoppers, Joe Fresh, PC Financial, and their fuel network.",
    outcome: "Platform reaches 50%+ of the Canadian population. +33% AOV across programmes. Multi-year strategic relationship spanning 25+ lines of business.",
  },
  {
    tag: "Fortune 500 Physical Operations — US",
    company: "Walmart, PepsiCo, Coca-Cola, Walgreens, Kroger",
    challenge: "Leading a team covering the largest physical-economy enterprises in North America — organisations with tens of thousands of field employees, national distribution infrastructure, and complex multi-stakeholder procurement cycles.",
    approach: "Built a 10-person enterprise AE team covering six US cities. Established structured pipeline cadences, coaching frameworks, and multi-year expansion playbooks for physical-economy accounts.",
    outcome: "USD $10M annual run rate — 30% of total digital segment revenue. Team closed major platform expansions across the US Retail & Consumer Goods enterprise field organisation.",
  },
];

const LEADERSHIP = [
  {
    org: "BOLDforce Canada",
    role: "Co-Founder & Executive Sponsor",
    desc: "Built Salesforce's national Black employee resource group from zero to 500+ members across Canada. Secured a $300K partnership with Black Professionals in Tech Network (BPTN). Contributed to Salesforce's Global Racial Justice Task Force in partnership with the Chief People Officer. Generated 50+ referrals and 15 hires through a structured Insiders Programme with a 99%+ acceptance rate.",
    wide: false,
  },
  {
    org: "BLK Owned",
    role: "Board Secretary & Strategy Lead",
    desc: "Redesigned the Trailblazer Programme into a 6-month multi-pillar curriculum. Secured Salesforce as anchor sponsor (~$260K CAD in-kind over 4 years). Launched inaugural cohort of 17 entrepreneurs — roadmap to 60+ participants by 2030, supporting 160+ Black-owned businesses.",
    wide: false,
  },
  {
    org: "Speaking & Recognition",
    role: "Dreamforce · Connections · World Tour",
    desc: "Featured speaker at Dreamforce, Salesforce Connections, and multiple World Tours. Accelerate Leadership Programme — Top 1% globally. 9× Quota Achievers Club. 3× Peak Performers Club (FY17, FY19, FY23). L1A Executive Transfer Visa — United States. University of Guelph, Bachelor of Commerce (Honours). Challenger Sale · Sandler Selling System (Silver) · JB Sales.",
    wide: true,
  },
];

const CREDS = ["139% Career Attainment Avg (FY15–FY23)","9× Quota Achievers Club","3× Peak Performers Club","Accelerate Leadership Programme — Top 1% Globally","L1A Executive Transfer Visa — United States","Co-Founder BOLDforce Canada (500+ Members)","Board Secretary — BLK Owned","Walmart Canada — 400+ Locations","Harnois Énergies — Fuel & Energy","Home Depot Canada — 80× ROI"];


const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0D1B2A;--navy2:#132233;--gold:#C9A84C;--gold-line:rgba(201,168,76,0.35);--cream:#F0EAD6;--muted:#8A94A6;--border:rgba(255,255,255,0.07);--serif:'Cormorant Garamond',Georgia,serif;--sans:'DM Sans',system-ui,sans-serif;--mono:'DM Mono',monospace;}
  body{background:var(--navy);color:var(--cream);font-family:var(--sans);}
  .cr{min-height:100vh;}
  .cr-inner{max-width:1100px;margin:0 auto;padding:0 28px;position:relative;z-index:1;}
  .cr-hero{padding:64px 0 52px;display:grid;grid-template-columns:160px 1fr;gap:40px;align-items:start;border-bottom:1px solid var(--border);position:relative;}
  .cr-hero::after{content:'';position:absolute;bottom:-1px;left:0;width:220px;height:2px;background:linear-gradient(90deg,var(--gold),transparent);}
  .cr-photo{width:140px;height:180px;border-radius:4px;object-fit:cover;border:1px solid var(--gold-line);filter:grayscale(18%) contrast(1.05);box-shadow:0 8px 32px rgba(0,0,0,0.45);}
  .cr-identity{padding-top:4px;}
  .cr-eyebrow{font-family:var(--mono);font-size:10px;letter-spacing:.18em;color:var(--gold);text-transform:uppercase;margin-bottom:10px;}
  .cr-name{font-family:var(--serif);font-size:clamp(38px,5vw,58px);font-weight:600;line-height:1.0;color:var(--cream);letter-spacing:-.01em;margin-bottom:10px;}
  .cr-title{font-size:14px;font-weight:400;color:var(--muted);line-height:1.5;margin-bottom:18px;max-width:540px;}
  .cr-title strong{color:var(--cream);font-weight:500;}
  .cr-contact{display:flex;gap:18px;flex-wrap:wrap;font-family:var(--mono);font-size:11px;color:var(--muted);}
  .cr-contact a{color:var(--gold);text-decoration:none;}
  .cr-stats{display:grid;grid-template-columns:repeat(5,1fr);border:1px solid var(--border);border-radius:6px;overflow:hidden;margin:28px 0 0;}
  .cr-stat{padding:16px 12px;text-align:center;border-right:1px solid var(--border);background:var(--navy2);}
  .cr-stat:last-child{border-right:none;}
  .cr-stat-val{font-family:var(--serif);font-size:24px;font-weight:600;color:var(--gold);line-height:1;}
  .cr-stat-lbl{font-size:10px;color:var(--muted);margin-top:4px;letter-spacing:.05em;}
  .cr-tabs-wrap{position:sticky;top:0;z-index:40;background:var(--navy);border-bottom:1px solid var(--border);}
  .cr-tabs{display:flex;overflow-x:auto;scrollbar-width:none;max-width:1100px;margin:0 auto;padding:0 28px;}
  .cr-tabs::-webkit-scrollbar{display:none;}
  .cr-tab{padding:16px 20px;font-size:12px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;white-space:nowrap;cursor:pointer;border:none;background:transparent;color:var(--muted);border-bottom:2px solid transparent;transition:color .2s,border-color .2s;font-family:var(--sans);}
  .cr-tab:hover{color:var(--cream);}
  .cr-tab.active{color:var(--gold);border-bottom-color:var(--gold);}
  .cr-body{padding:52px 0 80px;}
  .cr-sl{font-family:var(--mono);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin-bottom:10px;}
  .cr-st{font-family:var(--serif);font-size:clamp(26px,3.5vw,38px);font-weight:600;line-height:1.15;color:var(--cream);margin-bottom:12px;}
  .cr-ss{font-size:14px;color:var(--muted);line-height:1.7;max-width:640px;margin-bottom:40px;}
  .cr-div{height:1px;background:var(--border);margin:36px 0;}
  .cr-og{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:36px;}
  .cr-oc{background:var(--navy2);border:1px solid var(--border);border-radius:6px;padding:22px 24px;}
  .cr-oct{font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);margin-bottom:10px;}
  .cr-ocb{font-size:13px;color:var(--muted);line-height:1.65;}
  .cr-ocb strong{color:var(--cream);font-weight:500;}
  .cr-cs{display:flex;flex-wrap:wrap;gap:10px;margin-top:36px;}
  .cr-c{padding:7px 14px;border:1px solid var(--border);border-radius:2px;font-size:11px;color:var(--muted);}
  .cr-exp{margin-bottom:40px;padding-bottom:40px;border-bottom:1px solid var(--border);}
  .cr-exp:last-child{border-bottom:none;}
  .cr-etag{display:inline-block;padding:3px 10px;border:1px solid var(--gold-line);border-radius:2px;font-size:10px;letter-spacing:.1em;color:var(--gold);text-transform:uppercase;margin-bottom:12px;}
  .cr-eh{display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:8px;margin-bottom:4px;}
  .cr-et{font-family:var(--serif);font-size:22px;font-weight:600;color:var(--cream);}
  .cr-ep{font-family:var(--mono);font-size:11px;color:var(--muted);}
  .cr-ec{font-size:13px;font-weight:500;color:var(--gold);margin-bottom:10px;}
  .cr-ei{font-size:13px;color:var(--muted);line-height:1.65;margin-bottom:14px;}
  .cr-eb{display:flex;gap:10px;font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:8px;}
  .cr-eb::before{content:"▸";color:var(--gold);flex-shrink:0;margin-top:1px;}
  .cr-eb strong{color:var(--cream);font-weight:500;}
  .cr-case{background:var(--navy2);border:1px solid var(--border);border-radius:6px;padding:28px;margin-bottom:20px;}
  .cr-ctag{font-family:var(--mono);font-size:10px;letter-spacing:.14em;color:var(--gold);text-transform:uppercase;margin-bottom:6px;}
  .cr-cco{font-family:var(--serif);font-size:20px;font-weight:600;color:var(--cream);margin-bottom:18px;}
  .cr-cr{display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;}
  .cr-cbl{font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);margin-bottom:6px;}
  .cr-cbt{font-size:12.5px;color:var(--muted);line-height:1.65;}
  .cr-lead{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:8px;}
  .cr-lc{background:var(--navy2);border:1px solid var(--border);border-radius:6px;padding:24px 26px;}
  .cr-lo{font-family:var(--serif);font-size:20px;font-weight:600;color:var(--cream);margin-bottom:4px;}
  .cr-lr{font-size:11px;font-weight:500;letter-spacing:.08em;color:var(--gold);text-transform:uppercase;margin-bottom:14px;}
  .cr-ld{font-size:13px;color:var(--muted);line-height:1.65;}
  .cr-gal{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:8px;} .cr-gimg,.cr-gem{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;}
  .cr-gi{border-radius:4px;overflow:hidden;border:1px solid var(--border);background:var(--navy2);}
  .cr-gimg{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;}
  .cr-gem{width:100%;aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;background:var(--navy2);color:var(--muted);font-size:11px;letter-spacing:.08em;text-transform:uppercase;}
  .cr-gcap{padding:12px 14px;}
  .cr-gct{font-size:12px;font-weight:500;color:var(--cream);margin-bottom:3px;}
  .cr-gcs{font-size:10px;color:var(--muted);letter-spacing:.06em;text-transform:uppercase;}
  .cr-footer{margin-top:60px;padding-top:24px;border-top:1px solid var(--border);font-size:11px;color:var(--muted);display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;}
  .cr-footer a{color:var(--gold);text-decoration:none;}
  @media(max-width:680px){
    .cr-hero{grid-template-columns:1fr;}
    .cr-stats{grid-template-columns:repeat(3,1fr);}
    .cr-og,.cr-lead{grid-template-columns:1fr;}
    .cr-cr{grid-template-columns:1fr;}
    .cr-gal{grid-template-columns:repeat(2,1fr);}
  }
`;

export default function ChrisRobertsMotive() {
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <div className="cr">
      <style>{css}</style>
      <div className="cr-inner">
        <div className="cr-hero">
          <img src={HEADSHOT} alt="Chris Roberts" className="cr-photo" />
          <div className="cr-identity">
            <div className="cr-eyebrow">Regional Sales Director · Fleet &amp; Physical Operations</div>
            <h1 className="cr-name">Chris Roberts</h1>
            <p className="cr-title">Twelve years selling into and leading teams at <strong>Canada's largest physical-economy enterprises</strong> — Walmart Canada, Home Depot, Harnois Énergies, Beer Store, Loblaw. <strong>Fleet, field operations, and distributed workforces are the through-line.</strong></p>
            <div className="cr-contact">
              <span>905-580-9430</span><span>·</span>
              <a href="mailto:chris.h.roberts@outlook.com">chris.h.roberts@outlook.com</a><span>·</span>
              <span>Toronto, ON</span><span>·</span>
              <a href="https://linkedin.com/in/chrishroberts" target="_blank" rel="noopener noreferrer">linkedin.com/in/chrishroberts</a>
            </div>
            <div className="cr-stats">
              {STATS.map((s,i)=>(
                <div className="cr-stat" key={i}>
                  <div className="cr-stat-val">{s.value}</div>
                  <div className="cr-stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="cr-tabs-wrap">
        <div className="cr-tabs">
          {TABS.map(t=>(
            <button key={t} className={`cr-tab ${activeTab===t?"active":""}`} onClick={()=>setActiveTab(t)}>{t}</button>
          ))}
        </div>
      </div>
      <div className="cr-inner">
        <div className="cr-body">

          {activeTab==="Overview"&&(
            <section>
              <div className="cr-sl">Professional Profile</div>
              <h2 className="cr-st">Physical economy.<br/>Fleet, field ops, enterprise scale.</h2>
              <p className="cr-ss">Twelve years selling enterprise technology into Canada's largest physical-economy organisations — Walmart Canada (400+ locations), Home Depot, Harnois Énergies, Beer Store, Loblaw. Every deal navigated at the C-suite level across IT, operations, and field leadership. The accounts, the complexity, and the cycles map directly to what Motive sells into.</p>
              <div className="cr-div"/>
              <div className="cr-og">
                <div className="cr-oc"><div className="cr-oct">MarTech &amp; CRM Platforms</div><div className="cr-ocb"><strong>Marketing Cloud</strong> (Email Studio, Journey Builder, Advertising Studio, Mobile Studio) · <strong>Pardot / Account Engagement</strong> · <strong>Data Cloud (CDP)</strong> · CRM Analytics</div></div>
                <div className="cr-oc"><div className="cr-oct">Digital Channels &amp; AI</div><div className="cr-ocb"><strong>Agentforce</strong> · Commerce Cloud · Service Cloud · Experience Cloud · Slack · Omnichannel · Journey Builder</div></div>
                <div className="cr-oc"><div className="cr-oct">Executive Leadership</div><div className="cr-ocb">C-Suite engagement (<strong>CMO · CDO · CTO · CFO</strong>) · Complex stakeholder management · Programme governance · Cross-functional alignment</div></div>
                <div className="cr-oc"><div className="cr-oct">Commercial Growth</div><div className="cr-ocb">Revenue operations · Strategic account expansion · <strong>RFP navigation</strong> · Pipeline discipline · P&amp;L ownership</div></div>
              </div>
              <div className="cr-div"/>
              <div className="cr-sl">Recognition</div>
              <div className="cr-cs">{CREDS.map((c,i)=><div className="cr-c" key={i}>{c}</div>)}</div>
            </section>
          )}

          {activeTab==="Experience"&&(
            <section>
              <div className="cr-sl">Professional Experience</div>
              <h2 className="cr-st">Twelve years.<br/>Canada's most complex accounts.</h2>
              <p className="cr-ss">Every stage built expertise in the accounts, decision-makers, and procurement cycles that define enterprise physical-economy selling — from fuel distributors to national retailers to Fortune 500 distribution networks.</p>
              <div className="cr-div"/>
              {ROLES.map((r,i)=>(
                <div className="cr-exp" key={i}>
                  <div className="cr-etag">{r.tag}</div>
                  <div className="cr-eh"><div className="cr-et">{r.title}</div><div className="cr-ep">{r.period}</div></div>
                  <div className="cr-ec">{r.company}</div>
                  <div className="cr-ei">{r.intro}</div>
                  {r.bullets.map((b,j)=>{
                    const ci=b.indexOf(":");
                    return ci>0&&ci<35
                      ?<div className="cr-eb" key={j}><span><strong>{b.slice(0,ci)}:</strong>{b.slice(ci+1)}</span></div>
                      :<div className="cr-eb" key={j}><span>{b}</span></div>;
                  })}
                </div>
              ))}
            </section>
          )}

          {activeTab==="Case Studies"&&(
            <section>
              <div className="cr-sl">Customer Transformation Stories</div>
              <h2 className="cr-st">Technology decisions<br/>that changed businesses.</h2>
              <p className="cr-ss">Six enterprise wins in physical-economy accounts — fleet operators, fuel distributors, national retailers, and distribution networks. Each with a distinct procurement cycle and a measurable outcome.</p>
              <div className="cr-div"/>
              {CASES.map((c,i)=>(
                <div className="cr-case" key={i}>
                  <div className="cr-ctag">{c.tag}</div>
                  <div className="cr-cco">{c.company}</div>
                  <div className="cr-cr">
                    <div><div className="cr-cbl">Challenge</div><div className="cr-cbt">{c.challenge}</div></div>
                    <div><div className="cr-cbl">Approach</div><div className="cr-cbt">{c.approach}</div></div>
                    <div><div className="cr-cbl">Outcome</div><div className="cr-cbt">{c.outcome}</div></div>
                  </div>
                </div>
              ))}
            </section>
          )}

          {activeTab==="Leadership"&&(
            <section>
              <div className="cr-sl">Community &amp; Recognition</div>
              <h2 className="cr-st">Beyond the day job.</h2>
              <p className="cr-ss">Leadership that extends outside the enterprise — into community, equity, and the next generation of professionals in tech.</p>
              <div className="cr-div"/>
              <div className="cr-lead">
                {LEADERSHIP.map((l,i)=>(
                  <div className="cr-lc" key={i} style={l.wide?{gridColumn:"1 / -1"}:{}}>
                    <div className="cr-lo">{l.org}</div>
                    <div className="cr-lr">{l.role}</div>
                    <div className="cr-ld">{l.desc}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab==="Gallery"&&(
            <section>
              <div className="cr-sl">In the Field</div>
              <h2 className="cr-st">Community. Leadership.<br/>Culture.</h2>
              <p className="cr-ss">Moments from the work beyond the quota — BOLDforce, Blkowned, Dreamforce, and the community initiatives that run alongside the commercial career.</p>
              <div className="cr-div"/>
              <div className="cr-gal">
                {GALLERY.map((g,i)=>(
                  <div className="cr-gi" key={i}>
                    {g.src?<img src={g.src} alt={g.caption} className="cr-gimg"/>:<div className="cr-gem">Photo coming soon</div>}
                    <div className="cr-gcap">
                      <div className="cr-gct">{g.caption}</div>
                      <div className="cr-gcs">{g.context}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="cr-footer">
            <span>Chris Roberts · Toronto, ON · <a href="mailto:chris.h.roberts@outlook.com">chris.h.roberts@outlook.com</a></span>
            <span><a href="https://linkedin.com/in/chrishroberts" target="_blank" rel="noopener noreferrer">linkedin.com/in/chrishroberts</a></span>
          </div>

        </div>
      </div>
    </div>
  );
}
