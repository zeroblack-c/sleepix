function BxHomeAltIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="none"
        d="M8.003 15c0-1.103.897-2 2-2h4c1.103 0 2 .897 2 2v5h3.001l-.001-8.586-7-7-7 7V20h3v-5z"
      />
      <path fill="none" d="M10.003 15h4v5h-4z" />
      <path d="M5.003 22h14c1.103 0 2-.897 2-2v-9a.997.997 0 00-.293-.707l-8-8a.999.999 0 00-1.414 0l-8 8a.997.997 0 00-.293.707v9c0 1.103.897 2 2 2zm5-2v-5h4v5h-4zm-5-8.586l7-7 7 7L19.004 20h-3.001v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5h-3v-8.586z" />
    </svg>
  );
}

export default BxHomeAltIcon;