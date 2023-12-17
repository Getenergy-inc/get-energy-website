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
  fromLeftAloneVariantSlow,
  defaultParentVariantInViewSlow,
  fromRightAloneVariantSlow,
  defaultParentVariantInViewFast,
} from "./variants";
import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from "react";

interface TransitionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, PropsWithChildren {
  addClass?: string;
  onClick?: () => void;
}

const windowSize = window.innerWidth;

export const TransitionElement: React.FC<TransitionProps> = ({ children }) => {
  return (
    <motion.div
      variants={windowSize > 768 ? transElementVariant : {}}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const TransitionStart: React.FC<TransitionProps> = ({ children }) => {
  return (
    <motion.div
      variants={windowSize > 768 ? transStartVariant : {}}
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
      variants={windowSize > 768 ? defaultParentVariant : {}}
      initial="initial"
      animate="animate"
      className={`${props.className} ${addClass ?? ""}`}
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
      variants={windowSize > 768 ? defaultParentVariantInView : {}}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`${props.className} ${addClass ?? ""}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export const TransitionParentInViewFast: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div
      variants={windowSize > 768 ? defaultParentVariantInViewFast : {}}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`${props.className} ${addClass ?? ""}`}
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
      variants={windowSize > 768 ? defaultParentVariantInViewSlow : {}}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`${props.className} ${addClass ?? ""}`}
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
      variants={windowSize > 768 ? defaultParentFastVariant : {}}
      initial="initial"
      animate="animate"
      className={`${props.className} ${addClass ?? ""}`}
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
    <motion.div
      variants={windowSize > 768 ? fromLeftVariant : {}}
      className={`${props.className} ${addClass ?? ""}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export const TransitionFromRight: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div
      variants={windowSize > 768 ? fromRightVariant : {}}
      className={`${props.className} ${addClass ?? ""}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export const TransitionFromBottom: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div
      variants={windowSize > 768 ? fromBottomVariant : {}}
      className={`${props.className} ${addClass ?? ""}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export const TransitionOpacity: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div
      variants={windowSize > 768 ? opacityAloneVariant : {}}
      className={`${props.className} ${addClass ?? ""}`}
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
      variants={windowSize > 768 ? opacityAloneVariant : {}}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`${props.className} ${addClass ?? ""}`}
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
      variants={windowSize > 768 ? fromTopAloneVariant : {}}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      exit="exit"
      className={`${props.className} ${addClass ?? ""}`}
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
      variants={windowSize > 768 ? fromBottomAloneVariant : {}}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      exit="exit"
      className={`${props.className} ${addClass ?? ""}`}
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
      variants={windowSize > 768 ? fromLeftAloneVariant : {}}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      exit="exit"
      className={`${props.className} ${addClass ?? ""}`}
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
      variants={windowSize > 768 ? fromLeftAloneVariantSlow : {}}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      exit="exit"
      className={`${props.className} ${addClass ?? ""}`}
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
      variants={windowSize > 768 ? fromRightAloneVariant : {}}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      exit="exit"
      className={`${props.className} ${addClass ?? ""}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export const TransitionFromRightAloneSlow: React.FC<TransitionProps> = (props) => {
  const { addClass, children, onClick } = props;
  return (
    <motion.div
      variants={windowSize > 768 ? fromRightAloneVariantSlow : {}}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      exit="exit"
      className={`${props.className} ${addClass ?? ""}`}
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
