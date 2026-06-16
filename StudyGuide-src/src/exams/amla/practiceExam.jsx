import React, { useMemo, useState } from "react";
import { AMLA_LESSONS, amlaLessonHref } from "../../lessons/amla/amlaManifest.js";

const QUESTIONS = [
  {
    id: "l01-advanced-expectation",
    lessonCode: "L01",
    lessonId: "amla-2026-04-16-intro-advanced",
    prompt: "Which expectation best matches the jump from AML Basic to AMLA?",
    options: [
      "The course reteaches every Python and scikit-learn detail from zero.",
      "Basic ML is assumed, and AMLA adds neural networks, notebooks and stronger interpretation.",
      "Only theory matters; implementation details are optional.",
      "A high metric is enough even if the model cannot be explained.",
    ],
    correct: 1,
    explanation: "The launch lecture frames AMLA as a more autonomous, interpretation-heavy continuation of Basic.",
    tags: ["course setup", "study strategy"],
    difficulty: "easy",
  },
  {
    id: "l01-perceptron-linear-boundary",
    lessonCode: "L01",
    lessonId: "amla-2026-04-16-intro-advanced",
    prompt: "Why does a single perceptron fail on XOR-like patterns?",
    options: [
      "It has no trainable weights.",
      "It can only create a linear decision boundary.",
      "It cannot accept numeric inputs.",
      "It always predicts continuous regression values.",
    ],
    correct: 1,
    explanation: "A perceptron/TLU applies a weighted sum and threshold, so one unit separates with a line or hyperplane.",
    tags: ["perceptron", "linear models"],
    difficulty: "easy",
  },
  {
    id: "l01-activation-depth",
    lessonCode: "L01",
    lessonId: "amla-2026-04-16-intro-advanced",
    prompt: "A student stacks many Dense layers but uses only linear activations. What is the best critique?",
    options: [
      "Depth alone guarantees nonlinear behavior.",
      "The stack is still equivalent to one linear transformation.",
      "The network becomes recurrent.",
      "The model cannot use gradient descent.",
    ],
    correct: 1,
    explanation: "Composing linear transformations does not create nonlinear decision boundaries.",
    tags: ["activation functions", "nonlinearity"],
    difficulty: "medium",
  },
  {
    id: "l01-playground-overfit",
    lessonCode: "L01",
    lessonId: "amla-2026-04-16-intro-advanced",
    prompt: "In the TensorFlow playground, a large model shows low loss but a strange boundary that isolates individual points. What should you do?",
    options: [
      "Accept it because low loss is the only relevant evidence.",
      "Inspect validation behavior, boundary shape and likely overfitting before claiming success.",
      "Remove all hidden layers.",
      "Switch to linear activation because it always generalizes better.",
    ],
    correct: 1,
    explanation: "The playground mini-lab emphasizes that metrics and visual behavior must be interpreted together.",
    tags: ["overfitting", "diagnostics"],
    difficulty: "medium",
  },
  {
    id: "l01-feature-representation",
    lessonCode: "L01",
    lessonId: "amla-2026-04-16-intro-advanced",
    prompt: "Adding squared input features makes a circular pattern easier to classify. What principle does this show?",
    options: [
      "Representation can make a learning problem easier.",
      "Feature engineering is forbidden in deep learning.",
      "Squared features are always optimal.",
      "Labels are no longer needed.",
    ],
    correct: 0,
    explanation: "A better input representation can reduce the burden on architecture and training.",
    tags: ["representation", "capacity"],
    difficulty: "medium",
  },
  {
    id: "l01-bias-term",
    lessonCode: "L01",
    lessonId: "amla-2026-04-16-intro-advanced",
    prompt: "In the neuron analogy, the bias term most closely corresponds to what linear-model component?",
    options: ["The intercept", "The residual", "The p-value", "The validation split"],
    correct: 0,
    explanation: "The professor used the y = ax + b analogy: the bias shifts the activation threshold.",
    tags: ["bias", "neuron"],
    difficulty: "easy",
  },
  {
    id: "l02-framework-choice",
    lessonCode: "L02",
    lessonId: "amla-2026-04-17-hands-on-setup",
    prompt: "Why does AMLA discuss scikit-learn, TensorFlow/Keras, PyTorch and Hugging Face together?",
    options: [
      "They are interchangeable names for the same library.",
      "Framework choice affects baselines, model building, pretrained access and project workflow.",
      "Only TensorFlow can train any neural network.",
      "Hugging Face is used only for spreadsheet analysis.",
    ],
    correct: 1,
    explanation: "The lesson frames libraries as workflow choices, not just syntax choices.",
    tags: ["frameworks", "workflow"],
    difficulty: "easy",
  },
  {
    id: "l02-keras-relationship",
    lessonCode: "L02",
    lessonId: "amla-2026-04-17-hands-on-setup",
    prompt: "What is the role of Keras in the course's TensorFlow workflow?",
    options: [
      "It is the high-level interface used to define and train models.",
      "It is a replacement for all numerical arrays.",
      "It is only a plotting package.",
      "It prevents using GPUs or tensors.",
    ],
    correct: 0,
    explanation: "Keras provides the high-level model-building interface used in the AMLA notebooks.",
    tags: ["Keras", "TensorFlow"],
    difficulty: "easy",
  },
  {
    id: "l02-sequential-api",
    lessonCode: "L02",
    lessonId: "amla-2026-04-17-hands-on-setup",
    prompt: "When is the Keras Sequential API the cleanest choice?",
    options: [
      "When the architecture is one simple stack of layers.",
      "When the model has several branches and multiple inputs.",
      "When the input shape is unknowable.",
      "When no training loop is needed.",
    ],
    correct: 0,
    explanation: "Sequential is meant for straightforward one-path layer stacks.",
    tags: ["Keras", "Sequential"],
    difficulty: "easy",
  },
  {
    id: "l02-functional-api",
    lessonCode: "L02",
    lessonId: "amla-2026-04-17-hands-on-setup",
    prompt: "Which model design most strongly suggests using the Keras Functional API?",
    options: [
      "A two-layer Dense classifier.",
      "A model with branches, merges or multiple inputs.",
      "A model trained for exactly one epoch.",
      "A model with only one output class.",
    ],
    correct: 1,
    explanation: "Functional API supports graph-like model topologies that Sequential cannot express cleanly.",
    tags: ["Keras", "Functional API"],
    difficulty: "medium",
  },
  {
    id: "l02-compile-fit-order",
    lessonCode: "L02",
    lessonId: "amla-2026-04-17-hands-on-setup",
    prompt: "Which ordering best matches the basic Keras workflow?",
    options: [
      "fit, compile, define architecture, evaluate",
      "define architecture, compile, fit, evaluate",
      "evaluate, fit, compile, define architecture",
      "compile, evaluate, fit, define architecture",
    ],
    correct: 1,
    explanation: "The class workflow is build the model, compile the training recipe, train, then evaluate.",
    tags: ["Keras workflow"],
    difficulty: "easy",
  },
  {
    id: "l02-validation-split",
    lessonCode: "L02",
    lessonId: "amla-2026-04-17-hands-on-setup",
    prompt: "In `model.fit`, what does `validation_split=0.1` mean?",
    options: [
      "10% of the training data is held out for validation metrics during training.",
      "10% of the test data updates the weights.",
      "The learning rate is set to 0.1.",
      "Only 10% of the model parameters are trained.",
    ],
    correct: 0,
    explanation: "Keras holds out part of the provided training data to monitor validation metrics after epochs.",
    tags: ["validation", "model.fit"],
    difficulty: "easy",
  },
  {
    id: "l03-mnist-continuity",
    lessonCode: "L03",
    lessonId: "amla-2026-04-20-neural-networks",
    prompt: "Why does the course return to MNIST in the Keras continuation?",
    options: [
      "To change the scientific problem completely.",
      "To keep the dataset familiar while comparing workflows and model behavior.",
      "Because MNIST requires no preprocessing or evaluation.",
      "Because MNIST cannot be solved by classical ML.",
    ],
    correct: 1,
    explanation: "The continuity lets students focus on the Keras workflow rather than relearning the dataset.",
    tags: ["MNIST", "workflow"],
    difficulty: "easy",
  },
  {
    id: "l03-softmax-output",
    lessonCode: "L03",
    lessonId: "amla-2026-04-20-neural-networks",
    prompt: "Why does the MNIST classifier use a 10-unit softmax output?",
    options: [
      "Each unit corresponds to one digit class and softmax gives class probabilities.",
      "Softmax is required for binary regression.",
      "The 10 units are the first 10 pixels.",
      "It removes the need for labels.",
    ],
    correct: 0,
    explanation: "MNIST has ten digit classes, so the output head represents ten class probabilities.",
    tags: ["softmax", "classification"],
    difficulty: "easy",
  },
  {
    id: "l03-flatten-shape",
    lessonCode: "L03",
    lessonId: "amla-2026-04-20-neural-networks",
    prompt: "What is the role of flattening in the simple MNIST Dense model?",
    options: [
      "It converts the 2D image grid into a vector that Dense layers can consume.",
      "It removes all grayscale information.",
      "It performs convolution.",
      "It splits the data into train and test sets.",
    ],
    correct: 0,
    explanation: "Dense layers expect vector-like inputs, so the 28x28 image is flattened.",
    tags: ["MNIST", "input shape"],
    difficulty: "easy",
  },
  {
    id: "l03-history-curves",
    lessonCode: "L03",
    lessonId: "amla-2026-04-20-neural-networks",
    prompt: "Training loss decreases while validation loss rises after several epochs. What is the most defensible interpretation?",
    options: [
      "The model may be overfitting and needs diagnostic action.",
      "The model is definitely underfitting.",
      "Validation loss is never useful.",
      "The test set will necessarily improve.",
    ],
    correct: 0,
    explanation: "Diverging train/validation curves are a common overfitting warning.",
    tags: ["history", "overfitting"],
    difficulty: "medium",
  },
  {
    id: "l03-evaluate-vs-fit",
    lessonCode: "L03",
    lessonId: "amla-2026-04-20-neural-networks",
    prompt: "Why should final `evaluate` results not be confused with validation metrics during `fit`?",
    options: [
      "Validation metrics monitor training decisions; final evaluation estimates performance on held-out test data.",
      "Evaluation updates the model weights more aggressively.",
      "Validation data has no labels.",
      "They are mathematically identical in all projects.",
    ],
    correct: 0,
    explanation: "Validation and test evaluation serve different roles in the workflow.",
    tags: ["validation", "evaluation"],
    difficulty: "medium",
  },
  {
    id: "l03-loss-choice",
    lessonCode: "L03",
    lessonId: "amla-2026-04-20-neural-networks",
    prompt: "For integer MNIST labels with a softmax output, which loss family is most appropriate?",
    options: [
      "Sparse categorical crossentropy.",
      "Mean squared error only.",
      "Binary crossentropy with one output unit.",
      "Dice loss for pixel masks.",
    ],
    correct: 0,
    explanation: "Sparse categorical crossentropy matches integer multiclass labels and softmax probabilities.",
    tags: ["loss", "multiclass"],
    difficulty: "medium",
  },
  {
    id: "l04-forward-prop",
    lessonCode: "L04",
    lessonId: "amla-2026-04-23-deep-learning-frameworks",
    prompt: "In forward propagation, what happens layer by layer?",
    options: [
      "Inputs are multiplied by weights, shifted by biases and passed through activations.",
      "Labels are randomly assigned before every prediction.",
      "The validation set replaces the weights.",
      "Only the final layer computes anything.",
    ],
    correct: 0,
    explanation: "The lecture formalizes neural networks as weighted sums plus bias and activation across layers.",
    tags: ["forward propagation", "neural networks"],
    difficulty: "easy",
  },
  {
    id: "l04-bias-unit",
    lessonCode: "L04",
    lessonId: "amla-2026-04-23-deep-learning-frameworks",
    prompt: "Why is a bias unit included in the network representation?",
    options: [
      "It lets the activation threshold shift independently of the input values.",
      "It removes the need for hidden layers.",
      "It guarantees zero training error.",
      "It converts classification into clustering.",
    ],
    correct: 0,
    explanation: "Bias terms add an intercept-like shift to the unit's weighted input.",
    tags: ["bias", "representation"],
    difficulty: "easy",
  },
  {
    id: "l04-xnor-hidden-layer",
    lessonCode: "L04",
    lessonId: "amla-2026-04-23-deep-learning-frameworks",
    prompt: "What does the XNOR example show about hidden layers?",
    options: [
      "Hidden layers can combine simpler boundaries to solve patterns one perceptron cannot.",
      "Hidden layers are only decorative.",
      "XNOR can only be solved by decision trees.",
      "Activations must always be linear.",
    ],
    correct: 0,
    explanation: "The hidden layer creates intermediate representations that make the final decision possible.",
    tags: ["XNOR", "hidden layers"],
    difficulty: "medium",
  },
  {
    id: "l04-decision-tree-value",
    lessonCode: "L04",
    lessonId: "amla-2026-04-23-deep-learning-frameworks",
    prompt: "Why keep decision trees in an advanced neural-network course?",
    options: [
      "They provide interpretable baselines and contrast with neural-network decision logic.",
      "They are the same architecture as MLPs.",
      "They always outperform deep learning on images.",
      "They eliminate the need for data splits.",
    ],
    correct: 0,
    explanation: "Decision trees are useful interpretable references before moving to more complex models.",
    tags: ["decision trees", "baseline"],
    difficulty: "easy",
  },
  {
    id: "l04-cart-splits",
    lessonCode: "L04",
    lessonId: "amla-2026-04-23-deep-learning-frameworks",
    prompt: "A CART-style tree makes predictions by:",
    options: [
      "Following feature-threshold splits until reaching a leaf prediction.",
      "Applying softmax to every pixel.",
      "Unrolling hidden state through time.",
      "Sampling from a latent Gaussian.",
    ],
    correct: 0,
    explanation: "Trees route examples through learned feature thresholds toward leaf outputs.",
    tags: ["CART", "interpretability"],
    difficulty: "easy",
  },
  {
    id: "l04-tree-overfit",
    lessonCode: "L04",
    lessonId: "amla-2026-04-23-deep-learning-frameworks",
    prompt: "A decision tree perfectly fits training data but has unstable tiny leaves. What is the likely issue?",
    options: [
      "Overfitting due to excessive depth or weak pruning constraints.",
      "Too much BatchNorm.",
      "A missing softmax unit.",
      "The model is underparameterized.",
    ],
    correct: 0,
    explanation: "Unconstrained trees can memorize training data and generalize poorly.",
    tags: ["decision trees", "overfitting"],
    difficulty: "medium",
  },
  {
    id: "l05-output-heads",
    lessonCode: "L05",
    lessonId: "amla-2026-05-07-training-diagnostics",
    prompt: "Which output-head choice best matches a multiclass single-label classification task?",
    options: [
      "One softmax unit per class.",
      "One linear unit only.",
      "One sigmoid unit per pixel.",
      "No output activation.",
    ],
    correct: 0,
    explanation: "Single-label multiclass classification typically uses a softmax head with one unit per class.",
    tags: ["MLP", "output heads"],
    difficulty: "easy",
  },
  {
    id: "l05-bp-vs-gd",
    lessonCode: "L05",
    lessonId: "amla-2026-05-07-training-diagnostics",
    prompt: "How are backpropagation and gradient descent related?",
    options: [
      "Backpropagation computes gradients; gradient descent uses them to update parameters.",
      "They are unrelated algorithms from different fields.",
      "Gradient descent computes labels; backpropagation splits data.",
      "Backpropagation replaces the optimizer.",
    ],
    correct: 0,
    explanation: "The lecture separates gradient computation from parameter-update logic.",
    tags: ["backpropagation", "gradient descent"],
    difficulty: "easy",
  },
  {
    id: "l05-epoch-minibatch",
    lessonCode: "L05",
    lessonId: "amla-2026-05-07-training-diagnostics",
    prompt: "What is an epoch in mini-batch training?",
    options: [
      "One full pass over the training data.",
      "One individual sample.",
      "One neuron in a hidden layer.",
      "One validation metric only.",
    ],
    correct: 0,
    explanation: "An epoch means the training algorithm has processed the full training set once.",
    tags: ["epochs", "mini-batches"],
    difficulty: "easy",
  },
  {
    id: "l05-tensor-rank",
    lessonCode: "L05",
    lessonId: "amla-2026-05-07-training-diagnostics",
    prompt: "Why does tensor rank matter in deep-learning workflows?",
    options: [
      "It tells you how data dimensions are organized before layers operate on them.",
      "It replaces the loss function.",
      "It determines the class names automatically.",
      "It prevents overfitting by itself.",
    ],
    correct: 0,
    explanation: "Images, batches and sequences have different tensor shapes, so rank/shape reasoning prevents architecture mistakes.",
    tags: ["tensors", "shape"],
    difficulty: "medium",
  },
  {
    id: "l05-dense-operation",
    lessonCode: "L05",
    lessonId: "amla-2026-05-07-training-diagnostics",
    prompt: "Inside a Dense layer, the core operation is best summarized as:",
    options: [
      "Matrix multiplication plus bias, then an activation.",
      "Sorting labels alphabetically.",
      "Random cropping plus pooling.",
      "Sampling from the discriminator.",
    ],
    correct: 0,
    explanation: "Dense layers compute affine transformations followed by optional nonlinear activations.",
    tags: ["Dense layers", "tensors"],
    difficulty: "easy",
  },
  {
    id: "l05-learning-rate",
    lessonCode: "L05",
    lessonId: "amla-2026-05-07-training-diagnostics",
    prompt: "Why is learning rate a high-impact optimizer parameter?",
    options: [
      "It controls update size; too small can be slow, too large can diverge.",
      "It chooses the train/test split.",
      "It sets the number of output classes.",
      "It replaces model evaluation.",
    ],
    correct: 0,
    explanation: "The optimizer step size directly affects convergence behavior.",
    tags: ["optimizers", "learning rate"],
    difficulty: "medium",
  },
  {
    id: "l06-local-receptive-fields",
    lessonCode: "L06",
    lessonId: "amla-2026-05-08-model-regularization",
    prompt: "What is the core intuition behind local receptive fields in CNNs?",
    options: [
      "Nearby pixels often form useful local patterns.",
      "Every pixel must connect to every neuron in the first layer.",
      "CNNs ignore image structure.",
      "Convolutions require text tokens.",
    ],
    correct: 0,
    explanation: "CNNs exploit local spatial structure instead of flattening all pixels immediately.",
    tags: ["CNN", "receptive fields"],
    difficulty: "easy",
  },
  {
    id: "l06-weight-sharing",
    lessonCode: "L06",
    lessonId: "amla-2026-05-08-model-regularization",
    prompt: "Why does weight sharing matter in convolution?",
    options: [
      "The same filter detects a pattern across different spatial locations with fewer parameters.",
      "It forces all outputs to be identical.",
      "It removes the need for activation functions.",
      "It converts images into labels directly.",
    ],
    correct: 0,
    explanation: "Filters reuse weights across the image, improving parameter efficiency and translation handling.",
    tags: ["convolution", "weight sharing"],
    difficulty: "easy",
  },
  {
    id: "l06-padding-stride",
    lessonCode: "L06",
    lessonId: "amla-2026-05-08-model-regularization",
    prompt: "A convolution uses larger stride with no padding. What is the likely effect on feature-map size?",
    options: [
      "The spatial output becomes smaller.",
      "The number of classes doubles.",
      "The input image becomes colorized.",
      "The model becomes recurrent.",
    ],
    correct: 0,
    explanation: "Stride and padding control how the filter moves and therefore the output spatial dimensions.",
    tags: ["stride", "padding"],
    difficulty: "medium",
  },
  {
    id: "l06-pooling-purpose",
    lessonCode: "L06",
    lessonId: "amla-2026-05-08-model-regularization",
    prompt: "What is a practical role of pooling in CNNs?",
    options: [
      "Reduce spatial resolution while keeping salient local responses.",
      "Generate class labels without training.",
      "Replace every convolutional layer.",
      "Turn an image task into time-series forecasting.",
    ],
    correct: 0,
    explanation: "Pooling summarizes local regions and reduces spatial size.",
    tags: ["pooling", "CNN"],
    difficulty: "easy",
  },
  {
    id: "l06-filter-visualization",
    lessonCode: "L06",
    lessonId: "amla-2026-05-08-model-regularization",
    prompt: "What is the safest interpretation of early CNN feature maps?",
    options: [
      "They show activated visual patterns, but should not be overinterpreted as complete reasoning.",
      "They prove the model is fair.",
      "They replace validation metrics.",
      "They identify causal biological mechanisms automatically.",
    ],
    correct: 0,
    explanation: "The lesson uses visualizations as helpful but limited inspection tools.",
    tags: ["feature maps", "interpretation"],
    difficulty: "medium",
  },
  {
    id: "l06-architecture-tour",
    lessonCode: "L06",
    lessonId: "amla-2026-05-08-model-regularization",
    prompt: "Why mention VGG, ResNet and related CNN architectures in AMLA?",
    options: [
      "To recognize design patterns and pretrained-model context, not to memorize every layer.",
      "To show that all CNNs have identical topology.",
      "To replace all project baselines.",
      "To avoid using validation data.",
    ],
    correct: 0,
    explanation: "The architecture tour gives context for modern CNN design and transfer-learning choices.",
    tags: ["VGG", "ResNet", "architecture"],
    difficulty: "medium",
  },
  {
    id: "l07-ae-purpose",
    lessonCode: "L07",
    lessonId: "amla-2026-05-14-convolutional-networks",
    prompt: "What is the main training objective of a basic autoencoder?",
    options: [
      "Reconstruct its input through a compressed or structured latent representation.",
      "Classify images into fixed labels only.",
      "Maximize discriminator loss.",
      "Generate decision-tree splits.",
    ],
    correct: 0,
    explanation: "Autoencoders learn representations by reconstructing inputs through an encoder-decoder structure.",
    tags: ["autoencoders", "latent space"],
    difficulty: "easy",
  },
  {
    id: "l07-denoising-ae",
    lessonCode: "L07",
    lessonId: "amla-2026-05-14-convolutional-networks",
    prompt: "In a denoising autoencoder, what does the model learn?",
    options: [
      "Map corrupted inputs back toward clean targets.",
      "Add noise to every output forever.",
      "Replace labels with random numbers.",
      "Train a discriminator against a generator.",
    ],
    correct: 0,
    explanation: "Denoising AEs learn robust representations by reconstructing clean data from noisy inputs.",
    tags: ["denoising", "autoencoders"],
    difficulty: "easy",
  },
  {
    id: "l07-sparse-ae",
    lessonCode: "L07",
    lessonId: "amla-2026-05-14-convolutional-networks",
    prompt: "What is the point of adding sparsity pressure to an autoencoder?",
    options: [
      "Encourage compact, selective internal representations.",
      "Guarantee a perfect reconstruction for every dataset.",
      "Remove the decoder.",
      "Convert the model into a random forest.",
    ],
    correct: 0,
    explanation: "Sparse AEs constrain activations so the representation is more selective.",
    tags: ["sparse AE", "representation"],
    difficulty: "medium",
  },
  {
    id: "l07-svm-margin",
    lessonCode: "L07",
    lessonId: "amla-2026-05-14-convolutional-networks",
    prompt: "What does the margin intuition in SVMs emphasize?",
    options: [
      "Choose a separating boundary with maximum distance to support vectors.",
      "Always use the deepest neural network.",
      "Ignore points near the boundary.",
      "Use softmax for every binary task.",
    ],
    correct: 0,
    explanation: "SVMs seek a boundary with a large margin around critical support vectors.",
    tags: ["SVM", "margin"],
    difficulty: "easy",
  },
  {
    id: "l07-kernel-trick",
    lessonCode: "L07",
    lessonId: "amla-2026-05-14-convolutional-networks",
    prompt: "Why is the kernel trick useful for SVMs?",
    options: [
      "It enables nonlinear separation through implicit feature spaces.",
      "It removes all hyperparameters.",
      "It only works on images.",
      "It makes PCA unnecessary in every case.",
    ],
    correct: 0,
    explanation: "Kernels let SVMs behave as if data were mapped to richer feature spaces.",
    tags: ["SVM", "kernel trick"],
    difficulty: "medium",
  },
  {
    id: "l07-pca-purpose",
    lessonCode: "L07",
    lessonId: "amla-2026-05-14-convolutional-networks",
    prompt: "What is PCA primarily doing in the dimensionality-reduction section?",
    options: [
      "Finding directions of high variance for compression or visualization.",
      "Learning pixel-wise segmentation masks.",
      "Training a recurrent hidden state.",
      "Replacing all model evaluation.",
    ],
    correct: 0,
    explanation: "PCA projects data onto principal components that capture variance.",
    tags: ["PCA", "dimensionality reduction"],
    difficulty: "easy",
  },
  {
    id: "l08-voting-ensemble",
    lessonCode: "L08",
    lessonId: "amla-2026-05-15-cnn-practice",
    prompt: "What is the core idea of a voting ensemble?",
    options: [
      "Combine predictions from multiple models to produce a final prediction.",
      "Train one model without labels.",
      "Use a single neuron with no bias.",
      "Generate images from random noise.",
    ],
    correct: 0,
    explanation: "Voting aggregates model predictions, either by class votes or probabilities.",
    tags: ["ensemble", "voting"],
    difficulty: "easy",
  },
  {
    id: "l08-hard-soft-voting",
    lessonCode: "L08",
    lessonId: "amla-2026-05-15-cnn-practice",
    prompt: "What is the difference between hard and soft voting?",
    options: [
      "Hard voting uses predicted classes; soft voting combines predicted probabilities.",
      "Hard voting trains neural networks; soft voting trains decision trees.",
      "Hard voting uses images; soft voting uses text.",
      "There is no difference.",
    ],
    correct: 0,
    explanation: "Soft voting can use confidence information when calibrated probabilities are meaningful.",
    tags: ["voting", "probabilities"],
    difficulty: "easy",
  },
  {
    id: "l08-bagging",
    lessonCode: "L08",
    lessonId: "amla-2026-05-15-cnn-practice",
    prompt: "Bagging mainly reduces model variance by:",
    options: [
      "Training models on bootstrap samples and aggregating them.",
      "Increasing one tree's depth until it memorizes data.",
      "Removing all randomization.",
      "Using only the test set.",
    ],
    correct: 0,
    explanation: "Bootstrap aggregation stabilizes high-variance learners like decision trees.",
    tags: ["bagging", "variance"],
    difficulty: "medium",
  },
  {
    id: "l08-random-forest",
    lessonCode: "L08",
    lessonId: "amla-2026-05-15-cnn-practice",
    prompt: "What extra randomness helps random forests decorrelate trees?",
    options: [
      "Sampling features considered at splits.",
      "Using no training data.",
      "Replacing trees with RNNs.",
      "Removing all labels.",
    ],
    correct: 0,
    explanation: "Random forests combine bagging with random feature subsets at splits.",
    tags: ["random forest", "bagging"],
    difficulty: "medium",
  },
  {
    id: "l08-boosting",
    lessonCode: "L08",
    lessonId: "amla-2026-05-15-cnn-practice",
    prompt: "How does boosting differ from bagging?",
    options: [
      "Boosting builds learners sequentially to correct previous errors.",
      "Boosting trains all models independently on equal bootstrap samples only.",
      "Boosting cannot overfit.",
      "Boosting is only used for image segmentation.",
    ],
    correct: 0,
    explanation: "Boosting creates an additive sequence where later learners focus on remaining errors.",
    tags: ["boosting", "XGBoost"],
    difficulty: "medium",
  },
  {
    id: "l08-stacking",
    lessonCode: "L08",
    lessonId: "amla-2026-05-15-cnn-practice",
    prompt: "What is the key risk when training a stacking meta-model?",
    options: [
      "Leaking target information if base-model predictions are not generated carefully.",
      "Having more than one base model.",
      "Using validation data at all.",
      "Using tabular features.",
    ],
    correct: 0,
    explanation: "Stacking needs careful out-of-fold style predictions to avoid training the meta-learner on leaked answers.",
    tags: ["stacking", "leakage"],
    difficulty: "hard",
  },
  {
    id: "l09-fluocells-difficulty",
    lessonCode: "L09",
    lessonId: "amla-2026-05-21-vision-mini-project",
    prompt: "Why is Fluocells a difficult object-counting problem?",
    options: [
      "Crowding, artifacts, noisy masks and ambiguous cell boundaries complicate counting.",
      "Every image has exactly one perfectly centered cell.",
      "The labels are unnecessary.",
      "Pixel intensity never varies.",
    ],
    correct: 0,
    explanation: "The lecture emphasizes dataset-specific EDA and failure modes before modeling.",
    tags: ["Fluocells", "EDA"],
    difficulty: "easy",
  },
  {
    id: "l09-threshold-baseline",
    lessonCode: "L09",
    lessonId: "amla-2026-05-21-vision-mini-project",
    prompt: "Why build a thresholding baseline before deep segmentation?",
    options: [
      "It creates a simple reference point and exposes data/metric issues.",
      "It guarantees the best possible model.",
      "It removes the need for masks.",
      "It converts images into text tokens.",
    ],
    correct: 0,
    explanation: "A baseline shows whether advanced models actually improve the workflow.",
    tags: ["thresholding", "baseline"],
    difficulty: "easy",
  },
  {
    id: "l09-pixel-accuracy-trap",
    lessonCode: "L09",
    lessonId: "amla-2026-05-21-vision-mini-project",
    prompt: "A Fluocells model has high pixel accuracy but misses many cells. Why can the metric be misleading?",
    options: [
      "Background pixels dominate, so a model can look good while failing object-level counting.",
      "Pixel accuracy is always the same as Dice loss.",
      "High pixel accuracy proves perfect counting.",
      "The model must be an RNN.",
    ],
    correct: 0,
    explanation: "Class imbalance makes pixel accuracy weak for small foreground objects.",
    tags: ["metrics", "class imbalance"],
    difficulty: "medium",
  },
  {
    id: "l09-segmentation-vs-counting",
    lessonCode: "L09",
    lessonId: "amla-2026-05-21-vision-mini-project",
    prompt: "Why can segmentation help object counting?",
    options: [
      "A mask can identify cell regions that can later be counted or post-processed.",
      "Segmentation removes the need for evaluation.",
      "Segmentation only predicts a single scalar.",
      "Segmentation is identical to PCA.",
    ],
    correct: 0,
    explanation: "The Fluocells workflow uses segmentation as a path toward object recognition/counting.",
    tags: ["segmentation", "counting"],
    difficulty: "medium",
  },
  {
    id: "l09-mask-quality",
    lessonCode: "L09",
    lessonId: "amla-2026-05-21-vision-mini-project",
    prompt: "What project issue follows from masks being semi-automatic or expert-refined?",
    options: [
      "Labels may contain subjectivity/noise, so model errors must be interpreted carefully.",
      "Masks are guaranteed perfect ground truth.",
      "No validation set is required.",
      "The model cannot be trained.",
    ],
    correct: 0,
    explanation: "Label quality affects both training and evaluation interpretation.",
    tags: ["labels", "masks"],
    difficulty: "medium",
  },
  {
    id: "l09-eda-before-model",
    lessonCode: "L09",
    lessonId: "amla-2026-05-21-vision-mini-project",
    prompt: "What should EDA for Fluocells establish before modeling?",
    options: [
      "Image sizes, intensities, artifacts, foreground balance and label examples.",
      "Only final leaderboard rank.",
      "Only the number of epochs.",
      "Only the optimizer name.",
    ],
    correct: 0,
    explanation: "EDA turns the broad task into a concrete modeling and evaluation workflow.",
    tags: ["EDA", "project"],
    difficulty: "easy",
  },
  {
    id: "l10-semantic-segmentation",
    lessonCode: "L10",
    lessonId: "amla-2026-05-22-segmentation-workflow",
    prompt: "In the Fluocells workflow, semantic segmentation means:",
    options: [
      "Classifying each pixel as background or cell.",
      "Assigning one class to the whole image only.",
      "Generating text from a prompt.",
      "Clustering patients by tabular features.",
    ],
    correct: 0,
    explanation: "The segmentation model outputs a pixel-level class/probability map.",
    tags: ["semantic segmentation", "Fluocells"],
    difficulty: "easy",
  },
  {
    id: "l10-instance-vs-semantic",
    lessonCode: "L10",
    lessonId: "amla-2026-05-22-segmentation-workflow",
    prompt: "Why is instance segmentation conceptually closer to counting separate cells than semantic segmentation?",
    options: [
      "It distinguishes individual objects rather than only foreground/background pixels.",
      "It ignores masks.",
      "It uses no images.",
      "It is another name for BatchNorm.",
    ],
    correct: 0,
    explanation: "Semantic masks show cell pixels; instance masks separate individual cells.",
    tags: ["instance segmentation", "counting"],
    difficulty: "medium",
  },
  {
    id: "l10-cresunet",
    lessonCode: "L10",
    lessonId: "amla-2026-05-22-segmentation-workflow",
    prompt: "What is the purpose of U-Net/c-ResUNet style skip connections?",
    options: [
      "Combine high-resolution spatial detail with deeper contextual features.",
      "Remove all convolutional layers.",
      "Turn masks into text.",
      "Avoid training data completely.",
    ],
    correct: 0,
    explanation: "Segmentation architectures need both localization and semantic context.",
    tags: ["U-Net", "c-ResUNet"],
    difficulty: "medium",
  },
  {
    id: "l10-dataloaders",
    lessonCode: "L10",
    lessonId: "amla-2026-05-22-segmentation-workflow",
    prompt: "What must a segmentation DataLoader keep synchronized?",
    options: [
      "Input images and their corresponding masks, including transformations.",
      "Only model weights and optimizer names.",
      "Only class names and file extensions.",
      "Only training and test labels without images.",
    ],
    correct: 0,
    explanation: "Image/mask pairs must receive matching spatial transforms.",
    tags: ["FastAI", "DataLoaders"],
    difficulty: "easy",
  },
  {
    id: "l10-augmentation-trap",
    lessonCode: "L10",
    lessonId: "amla-2026-05-22-segmentation-workflow",
    prompt: "A student randomly crops Fluocells images but leaves masks unchanged. What is wrong?",
    options: [
      "The mask no longer aligns with the image, corrupting supervision.",
      "Cropping always improves segmentation.",
      "Masks never need transformations.",
      "The loss function automatically fixes alignment.",
    ],
    correct: 0,
    explanation: "Spatial augmentations must be applied consistently to both images and masks.",
    tags: ["augmentation", "masks"],
    difficulty: "medium",
  },
  {
    id: "l10-dice-loss",
    lessonCode: "L10",
    lessonId: "amla-2026-05-22-segmentation-workflow",
    prompt: "Why can Dice-style objectives be useful for Fluocells segmentation?",
    options: [
      "They focus on overlap and are less dominated by abundant background pixels.",
      "They remove the need for masks.",
      "They only work for language models.",
      "They replace data augmentation entirely.",
    ],
    correct: 0,
    explanation: "Overlap-based metrics/losses are useful when foreground is small relative to background.",
    tags: ["Dice loss", "class imbalance"],
    difficulty: "medium",
  },
  {
    id: "l11-interpretability-xai",
    lessonCode: "L11",
    lessonId: "amla-2026-05-28-explainable-ai",
    prompt: "Which statement best matches the lecture's distinction between interpretability and explainability?",
    options: [
      "Interpretability is model-understandability; XAI methods explain behavior when models are less transparent.",
      "They mean exactly the same thing in every context.",
      "Explainability is only about plotting accuracy.",
      "Interpretability removes bias automatically.",
    ],
    correct: 0,
    explanation: "The XAI lecture separates transparent models from tools that explain model behavior.",
    tags: ["XAI", "interpretability"],
    difficulty: "easy",
  },
  {
    id: "l11-global-local",
    lessonCode: "L11",
    lessonId: "amla-2026-05-28-explainable-ai",
    prompt: "A SHAP summary plot is mainly useful for what kind of explanation?",
    options: [
      "Global feature influence across many samples.",
      "Only one pixel mask for one image.",
      "A recurrent hidden state.",
      "A train/test split.",
    ],
    correct: 0,
    explanation: "SHAP summary plots aggregate feature effects across observations.",
    tags: ["SHAP", "global explanation"],
    difficulty: "easy",
  },
  {
    id: "l11-local-explanation",
    lessonCode: "L11",
    lessonId: "amla-2026-05-28-explainable-ai",
    prompt: "Why might a local explanation be necessary even when global feature importance looks reasonable?",
    options: [
      "Individual predictions can rely on different feature patterns than the global average.",
      "Global explanations are always fake.",
      "Local explanations replace the trained model.",
      "Local explanations require no input data.",
    ],
    correct: 0,
    explanation: "Local explanations inspect the reasons behind a specific prediction.",
    tags: ["local explanation", "XAI"],
    difficulty: "medium",
  },
  {
    id: "l11-lime-surrogate",
    lessonCode: "L11",
    lessonId: "amla-2026-05-28-explainable-ai",
    prompt: "What is the core idea behind LIME?",
    options: [
      "Fit a simple local surrogate around one prediction to approximate model behavior nearby.",
      "Train a GAN discriminator.",
      "Normalize hidden states in an RNN.",
      "Compute PCA directions only.",
    ],
    correct: 0,
    explanation: "LIME explains a prediction through a locally faithful, simpler model.",
    tags: ["LIME", "surrogate"],
    difficulty: "medium",
  },
  {
    id: "l11-xai-pitfall",
    lessonCode: "L11",
    lessonId: "amla-2026-05-28-explainable-ai",
    prompt: "What is a common XAI trap in project reporting?",
    options: [
      "Treating an explanation plot as proof that the model is correct or unbiased.",
      "Stating whether the explanation is local or global.",
      "Comparing explanations across methods.",
      "Using XAI to inspect failures.",
    ],
    correct: 0,
    explanation: "XAI supports inspection; it does not certify correctness by itself.",
    tags: ["XAI pitfalls", "bias"],
    difficulty: "hard",
  },
  {
    id: "l11-shap-disagreement",
    lessonCode: "L11",
    lessonId: "amla-2026-05-28-explainable-ai",
    prompt: "SHAP and LIME give different explanations for one case. What is the best response?",
    options: [
      "Investigate assumptions, locality, model behavior and data context before choosing a narrative.",
      "Delete the method with the less attractive plot.",
      "Assume both are useless.",
      "Report only accuracy instead.",
    ],
    correct: 0,
    explanation: "The lesson encourages critical comparison when XAI methods disagree.",
    tags: ["SHAP", "LIME", "comparison"],
    difficulty: "hard",
  },
  {
    id: "l12-rnn-input-shape",
    lessonCode: "L12",
    lessonId: "amla-2026-05-29-project-xai-sequential",
    prompt: "Which shape best matches the RNN time-series framing from the final lecture?",
    options: [
      "[batch_size, n_steps, dimensionality]",
      "[height, width, channels]",
      "[classes, probabilities]",
      "[features, labels, loss]",
    ],
    correct: 0,
    explanation: "RNN input is organized by batch, time steps and feature dimensionality.",
    tags: ["RNN", "time series"],
    difficulty: "easy",
  },
  {
    id: "l12-bptt",
    lessonCode: "L12",
    lessonId: "amla-2026-05-29-project-xai-sequential",
    prompt: "Why is training long RNN sequences difficult?",
    options: [
      "Unrolling through many time steps creates a deep graph with vanishing/exploding gradient issues.",
      "RNNs have no parameters.",
      "Backpropagation cannot be used with sequences.",
      "All sequence data is unordered.",
    ],
    correct: 0,
    explanation: "BPTT propagates gradients through the unrolled time graph.",
    tags: ["BPTT", "gradients"],
    difficulty: "medium",
  },
  {
    id: "l12-lstm-gates",
    lessonCode: "L12",
    lessonId: "amla-2026-05-29-project-xai-sequential",
    prompt: "Which statement best describes LSTM gates?",
    options: [
      "They learn what to store, forget and output from the cell state.",
      "They remove the need for data.",
      "They make memory unlimited.",
      "They are the same as decision-tree splits.",
    ],
    correct: 0,
    explanation: "Input, forget and output gates manage information flow through the LSTM.",
    tags: ["LSTM", "gates"],
    difficulty: "easy",
  },
  {
    id: "l12-vae-objective",
    lessonCode: "L12",
    lessonId: "amla-2026-05-29-project-xai-sequential",
    prompt: "Which statement best captures a VAE objective?",
    options: [
      "Balance reconstruction with latent regularization so sampling is meaningful.",
      "Only train a discriminator to detect fake samples.",
      "Only maximize pixel accuracy.",
      "Only choose random forest split thresholds.",
    ],
    correct: 0,
    explanation: "VAEs combine reconstruction loss with a latent-space regularization term.",
    tags: ["VAE", "latent space"],
    difficulty: "medium",
  },
  {
    id: "l12-gan-training",
    lessonCode: "L12",
    lessonId: "amla-2026-05-29-project-xai-sequential",
    prompt: "In GAN training, what happens during the generator phase?",
    options: [
      "The generator is updated to produce samples that the discriminator classifies as real.",
      "Only real images are edited manually.",
      "The discriminator is permanently deleted.",
      "The tokenizer is trained with BPTT.",
    ],
    correct: 0,
    explanation: "The generator improves through feedback from the discriminator.",
    tags: ["GAN", "generator"],
    difficulty: "medium",
  },
  {
    id: "l12-transformer-attention",
    lessonCode: "L12",
    lessonId: "amla-2026-05-29-project-xai-sequential",
    prompt: "What is the key conceptual shift from RNN language models to transformers?",
    options: [
      "Attention lets token representations relate directly to other tokens in context.",
      "Transformers are just decision trees with more leaves.",
      "Transformers remove embeddings.",
      "RNN hidden state becomes the only context source.",
    ],
    correct: 0,
    explanation: "The lecture highlights attention as the hinge between older sequence models and modern LLMs.",
    tags: ["transformers", "attention"],
    difficulty: "medium",
  },
];

const lessonLookup = new Map(AMLA_LESSONS.map((lesson) => [lesson.id, lesson]));
const LESSON_FILTERS = ["all", ...AMLA_LESSONS.map((lesson) => lesson.code)];
const DIFFICULTY_FILTERS = ["all", "easy", "medium", "hard"];
const TAG_FILTERS = ["all", ...Array.from(new Set(QUESTIONS.flatMap((question) => question.tags))).sort((a, b) => a.localeCompare(b))];

function optionLabel(index) {
  return String.fromCharCode(65 + index);
}

function QuestionCard({ question, index, answer, setAnswer, showFeedback, locked }) {
  const answered = answer !== undefined;
  const lesson = lessonLookup.get(question.lessonId);

  return (
    <article className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-black text-red-700">Q{index + 1}</span>
        <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-black text-stone-600">{question.lessonCode}</span>
        <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-black text-stone-600">{question.difficulty}</span>
        {question.tags.map((tag) => <span key={tag} className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-black text-stone-600">{tag}</span>)}
      </div>
      {lesson ? <a href={amlaLessonHref(lesson)} className="mt-3 inline-flex text-xs font-black uppercase tracking-[0.16em] text-red-700 hover:text-red-900">{lesson.title}</a> : null}
      <h2 className="mt-3 text-xl font-black leading-8 text-stone-950">{question.prompt}</h2>
      <div className="mt-4 grid gap-2">
        {question.options.map((option, optionIndex) => {
          const selected = answer === optionIndex;
          const correct = optionIndex === question.correct;
          const reveal = answered && showFeedback;
          return (
            <button
              key={option}
              type="button"
              disabled={locked}
              onClick={() => setAnswer(optionIndex)}
              className={`rounded-2xl border p-3 text-left text-sm font-bold leading-6 transition disabled:cursor-not-allowed ${
                reveal && correct
                  ? "border-emerald-300 bg-emerald-50 text-emerald-950"
                  : reveal && selected && !correct
                    ? "border-red-300 bg-red-50 text-red-950"
                    : selected
                      ? "border-stone-900 bg-stone-950 text-white"
                      : "border-stone-200 bg-stone-50 text-stone-700 hover:bg-white"
              }`}
            >
              {optionLabel(optionIndex)}. {option}
            </button>
          );
        })}
      </div>
      {answered && showFeedback ? (
        <p className="mt-4 rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-semibold leading-7 text-stone-700">
          Correct: {optionLabel(question.correct)}. {question.explanation}
        </p>
      ) : null}
    </article>
  );
}

export default function AMLAPracticeExamPage() {
  const [mode, setMode] = useState("practice");
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [lessonFilter, setLessonFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [tagFilter, setTagFilter] = useState("all");
  const [reviewMistakes, setReviewMistakes] = useState(false);

  const score = useMemo(() => QUESTIONS.filter((question) => answers[question.id] === question.correct).length, [answers]);
  const answeredCount = Object.keys(answers).length;
  const locked = mode === "mock" && submitted;
  const showFeedback = mode === "practice" || submitted;
  const canReviewMistakes = answeredCount > 0 && score < answeredCount;
  const filteredQuestions = useMemo(() => QUESTIONS.filter((question) => {
    const lessonMatch = lessonFilter === "all" || question.lessonCode === lessonFilter;
    const difficultyMatch = difficultyFilter === "all" || question.difficulty === difficultyFilter;
    const tagMatch = tagFilter === "all" || question.tags.includes(tagFilter);
    const mistakeMatch = !reviewMistakes || answers[question.id] !== undefined && answers[question.id] !== question.correct;
    return lessonMatch && difficultyMatch && tagMatch && mistakeMatch;
  }), [answers, difficultyFilter, lessonFilter, reviewMistakes, tagFilter]);
  const byLesson = useMemo(() => AMLA_LESSONS.map((lesson) => {
    const lessonQuestions = QUESTIONS.filter((question) => question.lessonId === lesson.id);
    const answered = lessonQuestions.filter((question) => answers[question.id] !== undefined).length;
    const correct = lessonQuestions.filter((question) => answers[question.id] === question.correct).length;
    return { lesson, count: lessonQuestions.length, answered, correct };
  }), [answers]);

  const setAnswer = (questionId, value) => {
    if (locked) return;
    setAnswers((current) => ({ ...current, [questionId]: value }));
  };

  const reset = (nextMode = mode) => {
    setMode(nextMode);
    setAnswers({});
    setSubmitted(false);
    setReviewMistakes(false);
  };

  const clearFilters = () => {
    setLessonFilter("all");
    setDifficultyFilter("all");
    setTagFilter("all");
    setReviewMistakes(false);
  };

  return (
    <main className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-8 md:pt-12">
      <nav className="mb-6 rounded-[2rem] border border-stone-200 bg-white/85 p-3 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <a href="#/" className="rounded-full border border-stone-200 bg-white px-4 py-2 text-center text-sm font-black text-stone-800 transition hover:bg-stone-50">Back to AMLA dashboard</a>
          <div className="rounded-full border border-stone-200 bg-white px-4 py-2 text-center text-xs font-black uppercase tracking-[0.2em] text-stone-500">AMLA full-course exam</div>
          <a href="#question-bank" className="rounded-full bg-stone-950 px-4 py-2 text-center text-sm font-black text-white transition hover:bg-red-800">Start</a>
        </div>
      </nav>

      <section className="grid overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white/85 shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
        <div className="bg-[#fbf4e8] p-8 md:p-12">
          <div className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-red-700">Full-course bank</div>
          <h1 className="mt-7 max-w-3xl text-5xl font-black tracking-tight text-stone-950 md:text-6xl">AMLA Practice Exam</h1>
          <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-stone-700">
            Seventy-two reasoning-oriented multiple-choice questions covering all 12 AMLA lessons. Practice mode gives immediate feedback; mock mode reveals explanations only after submission.
          </p>
        </div>
        <aside className="border-t border-stone-200 bg-white p-8 lg:border-l lg:border-t-0 md:p-10">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-3xl border border-red-200 bg-red-50 p-5 text-red-800"><div className="text-xs font-black uppercase tracking-[0.18em] opacity-70">Questions</div><div className="mt-2 text-3xl font-black">{QUESTIONS.length}</div></div>
            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Answered</div><div className="mt-2 text-3xl font-black text-stone-950">{answeredCount}</div></div>
            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">Score</div><div className="mt-2 text-3xl font-black text-stone-950">{score}</div></div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["practice", "mock"].map((option) => (
              <button key={option} type="button" onClick={() => reset(option)} className={`rounded-full border px-4 py-2 text-sm font-black ${mode === option ? "border-red-300 bg-red-50 text-red-800" : "border-stone-200 bg-white text-stone-700"}`}>
                {option === "practice" ? "Practice mode" : "Mock exam"}
              </button>
            ))}
          </div>
          {mode === "mock" ? <button type="button" onClick={() => setSubmitted(true)} className="mt-4 rounded-full bg-stone-950 px-5 py-3 text-sm font-black text-white hover:bg-red-800">Submit mock</button> : null}
          {locked ? <p className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-black leading-7 text-emerald-950">Final score: {score} / {QUESTIONS.length}</p> : null}
          <button
            type="button"
            onClick={() => setReviewMistakes((current) => !current)}
            disabled={!canReviewMistakes}
            className="mt-3 rounded-full border border-stone-200 bg-white px-5 py-3 text-sm font-black text-stone-700 transition hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-45"
          >
            {reviewMistakes ? "Show all filtered questions" : "Review mistakes"}
          </button>
        </aside>
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-stone-200 bg-white/80 p-5 shadow-sm">
          <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">Filters</div>
          <div className="mt-4 grid gap-3">
            <label className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">
              Lesson
              <select value={lessonFilter} onChange={(event) => setLessonFilter(event.target.value)} className="mt-2 w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm font-bold normal-case tracking-normal text-stone-700">
                {LESSON_FILTERS.map((value) => <option key={value} value={value}>{value === "all" ? "All lessons" : value}</option>)}
              </select>
            </label>
            <label className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">
              Difficulty
              <select value={difficultyFilter} onChange={(event) => setDifficultyFilter(event.target.value)} className="mt-2 w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm font-bold normal-case tracking-normal text-stone-700">
                {DIFFICULTY_FILTERS.map((value) => <option key={value} value={value}>{value === "all" ? "All difficulties" : value}</option>)}
              </select>
            </label>
            <label className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">
              Topic tag
              <select value={tagFilter} onChange={(event) => setTagFilter(event.target.value)} className="mt-2 w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm font-bold normal-case tracking-normal text-stone-700">
                {TAG_FILTERS.map((value) => <option key={value} value={value}>{value === "all" ? "All tags" : value}</option>)}
              </select>
            </label>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={clearFilters} className="rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-black text-stone-700">Clear filters</button>
            <span className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black text-red-700">{filteredQuestions.length} shown</span>
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-200 bg-white/80 p-5 shadow-sm">
          <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">Coverage and score by lesson</div>
          <div className="mt-4 grid gap-2 md:grid-cols-2">
            {byLesson.map(({ lesson, count, answered, correct }) => (
              <a key={lesson.id} href={amlaLessonHref(lesson)} className="rounded-2xl border border-stone-200 bg-stone-50 p-3 text-sm font-bold leading-6 text-stone-700 transition hover:bg-white">
                <span className="font-black text-stone-950">{lesson.code}</span> · {correct}/{answered || 0} correct · {count} total
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white/80 p-5 shadow-sm">
        <div className="text-xs font-black uppercase tracking-[0.22em] text-red-700">Review status</div>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {[
            ["Answered", `${answeredCount} / ${QUESTIONS.length}`],
            ["Correct", `${score}`],
            ["Current view", `${filteredQuestions.length} questions`],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="text-xs font-black uppercase tracking-[0.16em] text-stone-500">{label}</div>
              <div className="mt-1 text-2xl font-black text-stone-950">{value}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="question-bank" className="mt-10 scroll-mt-28 grid gap-5">
        {filteredQuestions.length === 0 ? (
          <div className="rounded-[2rem] border border-stone-200 bg-white p-6 text-sm font-bold leading-7 text-stone-600">
            No questions match the current filters.
          </div>
        ) : null}
        {filteredQuestions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            index={index}
            answer={answers[question.id]}
            setAnswer={(value) => setAnswer(question.id, value)}
            showFeedback={showFeedback}
            locked={locked}
          />
        ))}
      </section>
    </main>
  );
}
