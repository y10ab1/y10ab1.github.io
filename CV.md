<link rel="stylesheet" type="text/css" href="resume.css">

<!-- <span class="name">Yueh-Po Peng</span> -->

# Yueh-Po Peng

<div style="text-align: center;">
<a href="mailto:yuehpo.peng@gmail.com"><img src="assets/mail-svgrepo-com.svg" alt="Mail" width="16" height="16" style="vertical-align: text-bottom;"></a> |
<a href="https://github.com/y10ab1"><img src="assets/github-142-svgrepo-com.svg" alt="GitHub" width="16" height="16" style="vertical-align: text-bottom;"></a> |
<a href="https://linkedin.com/in/yueh-po-peng"><img src="assets/linkedin-svgrepo-com.svg" alt="LinkedIn" width="16" height="16" style="vertical-align: text-bottom;"></a> |
<a href="https://scholar.google.com/citations?user=uFf4DmoAAAAJ"><img src="assets/googlescholar-svgrepo-com.svg" alt="Google Scholar" width="16" height="16" style="vertical-align: text-bottom;"></a>
</div>

## Experience

### Senior Machine Learning Engineer <time> Jul 2025 – Present </time>
**[Gamania Digital Entertainment](https://www.gamania.com)**
<location>**Taipei, Taiwan**</location>
#### AI Manga & Webtoon Creation Platform ([Muztrix](https://muztrix.gamaniaocc.com))
- Led development of Muztrix, a public AI platform where a conversational agent collaborates with creators through multi-turn dialogue (Ask/Agent modes, tool calling, web search, file uploads) to develop storylines, then orchestrates generation of characters, locations, storyboards, and page or vertical-scroll manga.
- Designed a retrieval-augmented storyboard system with reference-image binding and versioned image editing to keep characters and locations visually consistent across panels.
- Integrated multiple generation models for images, line art, image-to-3D, and music, and built an AI game studio where coding agents create and publish web games inside isolated cloud sandboxes.
- Shipped a full-stack production service (Next.js, FastAPI, PocketBase on GCP Cloud Run) with CI/CD, monitoring, usage-based credits, OAuth, and 4-language i18n; reduced manga chapter prototyping from days to under 30 minutes.
#### Multimodal AI Applications
- Prototyped retail and restaurant video analytics combining segmentation/detection, speech recognition, and vision-language models.
- Built an AI comic-diary LINE Bot for older adults with LLM story writing, image generation, and TTS narration.
#### AI Vtuber & Voice
- Trained voice cloning models enabling AI virtual characters to cover songs in target speaker voices with ~30 minutes of training data.
- Integrated Live2D avatar animation with LLM-driven persona dialogue and voice cloning, and designed expressive TTS voices for game characters.

### Visiting Researcher <time> Jun 2025 – Oct 2025 </time> 
**[Sony Computer Science Laboratories (Sony CSL)](https://www.csl.sony.co.jp/en/)**
<location>**Tokyo, Japan (Hybrid)**</location>
#### Research Topics: Music Information Retrieval, Automatic Music Transcription
- Proposed VioPTT, a lightweight cascade model for violin technique-aware transcription with a novel synthetic dataset (MOSA-VPT). Published at ICASSP 2026 **<a href="#publication-1">[1]</a>**.
- Investigated transfer learning for violin AMT, showing training from scratch on instrument-specific data can match fine-tuned piano-pretrained models. Published at ISMIR 2025 **<a href="#publication-2">[2]</a>**.

### AI Engineer <time> Oct 2024 – May 2025 </time> 
**[Gate.io](https://www.gate.io)** <location>**Taipei, Taiwan (Remote)**</location>
- Developed a Text-to-SQL AI agent enabling non-technical teams to access internal data, boosting query efficiency by 20%.
- Developed a fund flows anomaly detection system with LLMs and tree-based models, enhancing financial security.
<!-- - Working on advanced AI-driven research projects in cryptocurrency and financial analytics. -->

<!-- ### Research Assistant <time> Jul 2024 – Oct 2024 <br> Mar 2022 – Feb 2023 </time>  -->
### Research Assistant <time> Mar 2022 – Oct 2024 </time>
**[Institute of Information Science, Academia Sinica](https://www.iis.sinica.edu.tw/zh/index.html) | [MCTLAB](https://sites.google.com/view/mctl/) | Supervisor: Dr. Li Su** 
<location>**Taipei, Taiwan**</location>
#### Research Topics: Self-Supervised Learning, Medical Imaging
- Proposed a Transformer-based self-supervised learning method for decoding brain signals (fMRI), achieving an 77% reduction in memory footprint.
- Conducted distributed training experiments on high-resolution 4D medical images (fMRI) using TWCC HPC.
- Proposed a whole-brain feature selection method for decoding musical pitch from fMRI **<a href="#publication-5">[5]</a>**.

### AI Engineer Intern <time> Mar 2023 – Jul 2024 </time>
**[Tomofun](https://furbo.com/tw) - World's leading pet technology company** <location>**Taipei, Taiwan**</location>
#### Research Topics: Computer Vision, Large Language Models, Multimodal Learning
- Developed an automatic short music video generation system for daily pet clips.
- Fine-tuned visual language models (e.g., BLIP), achieving a 20.6% improvement in visual question answering.
- Enhanced LLaVA image inference speed by 250% with only a 3% accuracy reduction.
- Developed APIs for visual language models using llama.cpp/ollama for image-caption pair datasets.

<hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">

## Education

### National Taiwan University <time> Feb 2023 – Jun 2024 </time>
<location>**Taipei, Taiwan**</location>
- M.S. in Data Science
- Thesis topic: Whole-Brain Feature Selection Methods for Decoding from fMRI Data

### National Taiwan University <time> Sep 2019 – Jan 2022 </time>
<location>**Taipei, Taiwan**</location>
- B.S. in Computer Science and Information Engineering (CSIE)

<hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">

## Research & Projects

### Guitar Effect Removal <time> Collaboration with [Positive Grid](https://www.positivegrid.com/) ML Team </time>
- Proposed a two-stage method to remove distortion effects from guitar recordings using Positive Grid VST plugins.
- Achieved 20% higher audio quality than the best baseline, rated by 26 professional guitarists.
- Published in DAFx 2024 **<a href="#publication-4">[4]</a>**.

### Whole Brain fMRI Feature Selection
- Proposed a two-stage method to extract fMRI features and predict musical pitch.
- Demonstrated 2-fold improvement over ROI-based feature selection in fMRI-music analysis.
- Published in ICASSP 2023 **<a href="#publication-5">[5]</a>**.

<hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">

## Publications

**<a id="publication-1">[1]</a>** Wang, T. K.\*, **Peng, Y. P.\***, Su, L., & Cheung, V. K. M.
  "VioPTT: Violin Technique-Aware Transcription from Synthetic Data Augmentation," Proc. IEEE Int. Conf. on Acoustics, Speech, and Signal Processing 2026 (ICASSP'26). **(\* equally contributed)**
  **[Paper](https://arxiv.org/abs/2509.23759)**

**<a id="publication-2">[2]</a>** **Peng, Y. P.\***, Wang, T. K.\*, Su, L., & Cheung, V. K. M.
  "Is Transfer Learning Necessary for Violin Transcription?," Int. Society for Music Information Retrieval Conf. 2025 (ISMIR'25) - Late Breaking/Demo. **(\* equally contributed)**
  **[Paper](https://arxiv.org/abs/2508.13516)**

**<a id="publication-3">[3]</a>** **Peng, Y. P.**, Cheung, V. K. M., & Su, L.
  "Whole-Brain Transferable Representations from Large-Scale fMRI Data Improve Task-Evoked Brain Activity Decoding," arXiv preprint arXiv:2507.22378, 2025.
  **[Paper](https://arxiv.org/abs/2507.22378)**

**<a id="publication-4">[4]</a>** Lee, Y. S.\*, **Peng, Y. P.\***, Wu, J. T., Cheng, M., Su, L., & Yang, Y. H.
  "Distortion Recovery: A Two-Stage Method for Guitar Effect Removal," Proc. Int. Conf. Digital Audio Effects 2024 (DAFx'24). **(\* equally contributed)**
  **[Paper](https://arxiv.org/abs/2407.16639) | [Demo](https://y10ab1.github.io/guitar_effect_removal/)**

**<a id="publication-5">[5]</a>** Cheung, V. K.\*, **Peng, Y. P.\***, Lin, J. H., & Su, L.
  "Decoding Musical Pitch from Human Brain Activity with Automatic Voxel-Wise Whole-Brain FMRI Feature Selection," Proc. IEEE Int. Conf. on Acoustics, Speech, and Signal Processing 2023 (ICASSP'23). **(\* equally contributed)**
  **[Paper](https://arxiv.org/abs/2303.01599)**

<hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">

## Skills

- **Languages/Frameworks**: Python, PyTorch, TensorFlow, Hugging Face, LangChain, LlamaIndex, Pandas, Scikit-learn, TypeScript, JavaScript, React, Next.js, FastAPI, Go, Slurm, C++, C, Linux.
- **Cloud/Infra**: GCP (Cloud Run, Vertex AI), AWS, Cloudflare Workers, TWCC HPC, Docker, PocketBase, Git, CI/CD.
- **Skillset**: LLM Agents, Tool Calling, RAG, Vision-Language Models, Image/Audio Generation, Prompt Engineering, Text-to-SQL, Voice Cloning, Self-Supervised Learning, Computer Vision, Music Information Retrieval, Multimodal Learning, Distributed Training.