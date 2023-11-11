import { motion } from "framer-motion";
import {
  defaultParentFastVariant,
  defaultParentVariant,
  fromLeftVariant,
  fromBottomAloneVariant,
  fromBottomVariant,
  fromLeftAloneVariant,
  fromRightAloneVariant,
  fromTopAloneVariant,
  opacityAloneVariant,
  transElementVariant,
  transStartVariant,
  fromRightVariant,
  defaultParentVariantInView,
  fromLeftAloneVarianSlow,
  defaultParentVariantInSlow,
} from "./variants";
import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from "react";

interface TransitionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, PropsWithChildren {
  addClass?: string;
  onClick?: () => void;
}

export const TransitionElement: React.FC<TransitionProps> = ({ children }) => {
  return (
    <motion.div variants={transElementVariant} initial="initial" whileInView="animate" viewport={{ once: true }}>
      {children}
    </motion.div>
  );
};

export const TransitionStart: React.FC<TransitionProps> = ({ children }) => {
  return (
    <motion.div
      variants={transStartVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      style={{ gap: "0rem" }}
    >
      {children}
    </motion.div>
  );
};

// -------------------------PARENTS-------------------------

export const TransitionParent: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div
      variants={defaultParentVariant}
      initial="initial"
      animate="animate"
      className={`${props.className} ${addClass && addClass}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export const TransitionParentInView: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div
      variants={defaultParentVariantInView}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`${props.className} ${addClass && addClass}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export const TransitionParentInViewSlow: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div
      variants={defaultParentVariantInSlow}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`${props.className} ${addClass && addClass}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export const TransitionParentFast: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div
      variants={defaultParentFastVariant}
      initial="initial"
      animate="animate"
      className={`${props.className} ${addClass && addClass}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

// -------------------------CHILDREN-------------------------

export const TransitionFromLeft: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div variants={fromLeftVariant} className={`${props.className} ${addClass && addClass}`} onClick={onClick}>
      {children}
    </motion.div>
  );
};

export const TransitionFromRight: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div variants={fromRightVariant} className={`${props.className} ${addClass && addClass}`} onClick={onClick}>
      {children}
    </motion.div>
  );
};

export const TransitionFromBottom: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div variants={fromBottomVariant} className={`${props.className} ${addClass && addClass}`} onClick={onClick}>
      {children}
    </motion.div>
  );
};

export const TransitionOpacity: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div
      variants={opacityAloneVariant}
      className={`${props.className} ${addClass && addClass}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

// Standalone
export const TransitionOpacityAlone: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div
      variants={opacityAloneVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`${props.className} ${addClass && addClass}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export const TransitionFromTopAlone: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div
      variants={fromTopAloneVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      exit="exit"
      className={`${props.className} ${addClass && addClass}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export const TransitionFromBottomAlone: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div
      variants={fromBottomAloneVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      exit="exit"
      className={`${props.className} ${addClass && addClass}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export const TransitionFromLeftAlone: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div
      variants={fromLeftAloneVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      exit="exit"
      className={`${props.className} ${addClass && addClass}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export const TransitionFromLeftAloneSlow: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div
      variants={fromLeftAloneVarianSlow}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      exit="exit"
      className={`${props.className} ${addClass && addClass}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export const TransitionFromRightAlone: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div
      variants={fromRightAloneVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      exit="exit"
      className={`${props.className} ${addClass && addClass}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export const FromBottomTransition: FC<PropsWithChildren> = ({ children }) => (
  <motion.div
    initial={{ y: "100%", opacity: 0 }}
    whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.4, ease: "backInOut" } }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);
