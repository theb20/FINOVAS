export default function LazyImage({ src, alt, className = "", fallback, onError, width, height, fetchPriority, loading = "lazy", decoding = "async", style, ...rest }) {
  const handleError = (e) => {
    if (fallback) {
      e.currentTarget.onerror = null;
      e.currentTarget.src = fallback;
    }
    if (onError) onError(e);
  };
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      width={width}
      height={height}
      fetchpriority={fetchPriority}
      style={{ aspectRatio: width && height ? `${width} / ${height}` : undefined, ...style }}
      onError={handleError}
      {...rest}
    />
  );
}
