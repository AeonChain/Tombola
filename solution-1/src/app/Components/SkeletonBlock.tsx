export default function SkeletonBlock(
  props: React.PropsWithChildren<{ loaded: boolean; classNames: string }>,
) {
  const classNames = `${props.classNames} ${props.loaded ? "" : "bg-slate-700 animate-pulse"}`;
  return <div className={classNames}>{props.children}</div>;
}
