import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Modal } from './components/Modal';
import { VoiceWidget } from './components/VoiceWidget';
import { Shield, BookOpen, Clock, Users, CheckCircle, FileText, ChevronRight, Zap, Award, Smartphone } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar onOpenModal={openModal} />
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-screen">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-blob mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Официальная аккредитация
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight text-white drop-shadow-2xl">
              SAFETY<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ALL</span>
              <br />
              <span className="text-3xl lg:text-5xl text-slate-400 font-normal block mt-2">
                Профессиональное обучение по безопасности труда
              </span>
            </h1>

            <p className="text-slate-300 text-lg lg:text-xl max-w-xl leading-relaxed border-l-2 border-cyan-500/30 pl-6">
              Центр обучения: официальные курсы, аттестация и переобучение по охране труда, промышленной, пожарной и электробезопасности. Соответствие стандартам ISO.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={openModal}
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold font-display tracking-widest rounded hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all transform hover:-translate-y-1 active:scale-95 border border-cyan-400/20"
              >
                НАЧАТЬ ОБУЧЕНИЕ
              </button>
              <a 
                href="#courses"
                className="px-8 py-4 glass text-white font-bold font-display tracking-widest rounded hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
              >
                КАТАЛОГ КУРСОВ <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800">
              <div>
                <p className="text-3xl font-display font-bold text-white">20+</p>
                <p className="text-slate-500 text-sm">Лет опыта</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-white">ISO</p>
                <p className="text-slate-500 text-sm">Стандарты</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-white">100%</p>
                <p className="text-slate-500 text-sm">Легально</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block h-[600px] w-full">
             {/* Abstract 3D Representation using CSS */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] glass-card rounded-2xl rotate-12 z-10 flex items-center justify-center animate-float">
                <Shield size={120} className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-400 w-3/4 animate-pulse-glow"></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-slate-400 font-mono">
                    <span>STATUS: SECURE</span>
                    <span>75% COMPLETED</span>
                  </div>
                </div>
             </div>
             <div className="absolute top-1/2 left-1/2 transform -translate-x-[60%] -translate-y-[40%] w-[350px] h-[350px] glass-card rounded-2xl -rotate-6 z-0 bg-slate-800/40"></div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-20 relative bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 lg:p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">О компании</h2>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                  Надёжный партнёр для вашего бизнеса
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  ТОО «Safetyall» — более 20 лет на рынке профессионального обучения. Мы специализируемся на обучении рабочих, ИТР и руководителей. Все программы официальны, соответствуют законодательству и стандартам ISO.
                </p>
                <ul className="space-y-4">
                  {[
                    "Документы без визитов в офис",
                    "Полностью дистанционный формат",
                    "Проверено аудитами"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                        <CheckCircle size={14} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-full min-h-[300px] flex items-center justify-center">
                 {/* Decorative Map/Globe placeholder */}
                 <div className="relative w-full aspect-square max-w-sm border border-slate-700 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
                    <div className="absolute w-full h-full border border-dashed border-slate-700 rounded-full opacity-50" />
                    <div className="absolute w-3/4 h-3/4 border border-slate-600 rounded-full opacity-50" />
                    <Award size={64} className="text-yellow-500 drop-shadow-lg animate-none" style={{ transform: 'rotate(0deg)' }} /> 
                 </div>
                 <div className="absolute bg-slate-900 px-4 py-2 border border-slate-700 rounded-lg shadow-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-16">
                    <span className="font-mono text-cyan-400 text-sm">ISO CERTIFIED</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- IMPORTANCE / FEATURES --- */}
      <section id="importance" className="py-20 bg-slate-950 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Важность безопасности</h2>
            <p className="text-slate-400">Единые стандарты качества обучения для вашего персонала</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Zap size={32} />, title: "Снижение рисков", desc: "Минимизация травматизма на производстве благодаря качественной подготовке." },
              { icon: <FileText size={32} />, title: "Законность", desc: "Полное соответствие требованиям проверок и государственным нормативам." },
              { icon: <Users size={32} />, title: "Готовность персонала", desc: "Сотрудники готовы к нештатным ситуациям и знают алгоритмы действий." },
            ].map((feature, idx) => (
              <div key={idx} className="group glass-card p-8 rounded-2xl hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-2 cursor-default">
                <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- COURSES --- */}
      <section id="courses" className="py-20 bg-slate-900 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-12 text-center">Каталог курсов</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Охрана труда", desc: "Базовые нормы и правила", color: "from-orange-500 to-red-500" },
              { title: "Пром. безопасность", desc: "Требования и практика", color: "from-blue-500 to-indigo-500" },
              { title: "Пожарная безопасность", desc: "Профилактика и действия при ЧС", color: "from-red-600 to-pink-600" },
              { title: "Электробезопасность", desc: "Работа с электроустановками", color: "from-yellow-400 to-orange-500" },
            ].map((course, idx) => (
              <div key={idx} className="relative group h-80 perspective-1000">
                <div className="absolute inset-0 bg-slate-800 rounded-2xl border border-slate-700 p-6 flex flex-col justify-between transition-transform duration-500 group-hover:scale-[1.02] shadow-xl overflow-hidden">
                  {/* Decorative Background Gradient */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${course.color} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                  
                  <div>
                    <div className={`w-12 h-1 bg-gradient-to-r ${course.color} mb-4`} />
                    <h3 className="text-2xl font-display font-bold text-white mb-2 leading-tight">{course.title}</h3>
                    <p className="text-slate-400 text-sm">{course.desc}</p>
                  </div>

                  <button 
                    onClick={openModal}
                    className="w-full py-3 border border-slate-600 rounded text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10 transition-all text-sm uppercase font-bold tracking-wider"
                  >
                    Подробнее
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MOCKUP / CONVENIENCE --- */}
      <section className="py-20 bg-slate-950 overflow-hidden">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">Удобная платформа</h2>
            <div className="space-y-6">
              {[
                "Доступ 24/7 из личного кабинета",
                "Обучение с любого устройства (ПК, Планшет, Смартфон)",
                "Короткие модули и понятные тесты",
                "Поддержка куратора",
                "Прозрачные сроки"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                    <Smartphone size={20} />
                  </div>
                  <p className="text-slate-300 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
             {/* Abstract Device Mockup */}
             <div className="relative mx-auto w-64 h-[500px] border-8 border-slate-800 rounded-[3rem] bg-slate-900 shadow-2xl overflow-hidden z-10">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20"></div>
                <div className="p-6 mt-8 space-y-4">
                  <div className="h-24 bg-slate-800 rounded-lg animate-pulse"></div>
                  <div className="h-8 bg-slate-800/50 rounded w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-slate-800/30 rounded"></div>
                    <div className="h-4 bg-slate-800/30 rounded"></div>
                    <div className="h-4 bg-slate-800/30 rounded w-5/6"></div>
                  </div>
                  <div className="h-32 bg-cyan-900/20 rounded-lg border border-cyan-500/20 flex items-center justify-center">
                    <div className="text-cyan-500 font-display font-bold text-2xl">LMS SYSTEM</div>
                  </div>
                  <button className="w-full h-10 bg-cyan-600 rounded mt-4"></button>
                </div>
             </div>
             {/* Glow behind phone */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/20 blur-[80px] rounded-full z-0"></div>
          </div>
        </div>
      </section>

      {/* --- PROCESS TIMELINE --- */}
      <section id="process" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
           <h2 className="text-4xl font-display font-bold text-white text-center mb-16">Как проходит обучение</h2>
           
           <div className="relative max-w-4xl mx-auto">
             {/* Vertical Line */}
             <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-600 to-slate-800 md:-translate-x-1/2" />
             
             {[
               { title: "Заявка и консультация", text: "Оставьте заявку, и мы подберем программу." },
               { title: "Оплата курса", text: "Удобные способы оплаты для юр. и физ. лиц." },
               { title: "Онлайн-обучение", text: "Изучение материалов на платформе в удобное время." },
               { title: "Тестирование", text: "Проверка знаний в автоматическом режиме." },
               { title: "Получение документов", text: "Оригиналы документов и сертификаты в личном кабинете." }
             ].map((step, idx) => (
               <div key={idx} className={`relative flex items-center mb-12 md:justify-between ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                 {/* Dot */}
                 <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-slate-900 border-4 border-cyan-500 rounded-full flex items-center justify-center z-10 md:-translate-x-1/2 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                    <span className="text-xs font-bold text-white">{idx + 1}</span>
                 </div>
                 
                 {/* Spacer for mobile layout alignment */}
                 <div className="w-12 md:hidden"></div>

                 {/* Content */}
                 <div className={`glass-card p-6 rounded-xl w-full md:w-[45%] ml-4 md:ml-0 hover:border-cyan-500/50 transition-colors`}>
                   <h3 className="text-xl font-display font-bold text-white mb-2">{step.title}</h3>
                   <p className="text-slate-400 text-sm">{step.text}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* --- DOCUMENTS --- */}
      <section id="documents" className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-12">Официальные документы</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass p-8 rounded-2xl border border-slate-700 relative group overflow-hidden">
               <div className="absolute top-4 right-4 opacity-50"><Shield className="text-green-500" size={40} /></div>
               <div className="h-48 bg-white/5 rounded mb-6 flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform">
                  <FileText size={64} className="text-slate-500" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Удостоверение</h3>
               <p className="text-slate-400 text-sm">Установленного образца с протоколом проверки знаний. Действительно на всей территории РК.</p>
            </div>
            <div className="glass p-8 rounded-2xl border border-slate-700 relative group overflow-hidden">
               <div className="absolute top-4 right-4 opacity-50"><Award className="text-yellow-500" size={40} /></div>
               <div className="h-48 bg-white/5 rounded mb-6 flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform">
                  <FileText size={64} className="text-slate-500" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Протокол проверки</h3>
               <p className="text-slate-400 text-sm">Официальное подтверждение успешной сдачи экзаменов комиссией.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACTS & FOOTER --- */}
      <section id="contacts" className="relative bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-display font-bold text-white mb-8">Контакты</h2>
              <div className="space-y-6 text-lg">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 text-cyan-400"><Clock /></div>
                  <div>
                    <p className="text-white font-bold">Режим работы</p>
                    <p className="text-slate-400">Пн-Пт: 09:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 text-cyan-400"><Smartphone /></div>
                  <div>
                    <p className="text-white font-bold">Телефон</p>
                    <p className="text-slate-400">+7 (777) 123-45-67</p>
                    <p className="text-slate-500 text-sm">Доступен WhatsApp</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                 <button 
                  onClick={openModal}
                  className="w-full md:w-auto px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded shadow-lg transition-all"
                 >
                   ОСТАВИТЬ ЗАЯВКУ
                 </button>
              </div>
            </div>
            
            <div className="h-[300px] md:h-auto bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center relative overflow-hidden">
                {/* Simulated Map */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20"></div>
                <div className="z-10 text-center">
                    <div className="w-4 h-4 bg-cyan-500 rounded-full animate-ping mx-auto mb-2"></div>
                    <p className="text-cyan-400 font-mono text-sm">LOCATING OFFICE...</p>
                    <p className="text-white font-bold text-xl mt-2">Казахстан, Алматы</p>
                </div>
            </div>
          </div>
        </div>
        
        {/* Simple Footer */}
        <div className="bg-slate-950 py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© SAFETYALL, 2025. Все права защищены.</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="hover:text-cyan-400">Политика конфиденциальности</a>
            <a href="#" className="hover:text-cyan-400">Договор оферты</a>
          </div>
        </div>
      </section>

      {/* Floating Bottom CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-slate-900/90 backdrop-blur border-t border-slate-800 md:hidden z-40 flex justify-center">
         <button 
          onClick={openModal}
          className="w-full py-3 bg-cyan-600 text-white font-bold rounded shadow-lg"
         >
           ОСТАВИТЬ ЗАЯВКУ
         </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <VoiceWidget />
    </div>
  );
}