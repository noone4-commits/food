from TTS.api import TTS

# בחר מודל שתומך בעברית – למשל "tts_models/multilingual/multi-dataset/your_tts"
tts = TTS(model_name="tts_models/multilingual/multi-dataset/your_tts", progress_bar=False)

# טקסט לדוגמה
tts.tts_to_file(text="שלום, מה שלומך היום?", file_path="output.wav")