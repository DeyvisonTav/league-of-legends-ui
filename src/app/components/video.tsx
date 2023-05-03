interface VideoProps {
  identification: string;
}
export function VideoPlayer({ identification }: VideoProps) {
  return (
    <div className="w-full col-span-3">
      {identification === "zed" ? (
        <video autoPlay muted loop src="/assets/videoZed.mp4" />
      ) : (
        <video autoPlay muted loop src="/assets/videoAkali.mp4" />
      )}
    </div>
  );
}
