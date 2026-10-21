import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import { Skeleton } from 'vulto-skeleton-native';

const COLORS = {
  background: '#F4F6F8',
  card: '#FFFFFF',
  text: '#17212B',
  muted: '#667482',
  accent: '#315E75',
  line: '#E5E7EB',
};

function ProfileSkeleton({ animation }) {
  return (
    <View style={styles.profileRow}>
      <Skeleton width={60} height={60} radius={30} animation={animation} />
      <View style={styles.flex}>
        <Skeleton width="62%" height={16} radius={8} animation={animation} />
        <View style={styles.gap8} />
        <Skeleton width="42%" height={12} radius={6} animation={animation} />
      </View>
    </View>
  );
}

function StorySkeleton({ animation }) {
  return (
    <View style={styles.storyCard}>
      <Skeleton height={148} radius={14} animation={animation} />
      <View style={styles.gap12} />
      <Skeleton width="72%" height={15} radius={7} animation={animation} />
      <View style={styles.gap8} />
      <Skeleton width="92%" height={11} radius={6} animation={animation} />
      <View style={styles.gap6} />
      <Skeleton width="58%" height={11} radius={6} animation={animation} />
    </View>
  );
}

function ProfileContent() {
  return (
    <View style={styles.profileRow}>
      <View style={styles.avatar}><Text style={styles.avatarText}>MA</Text></View>
      <View style={styles.flex}>
        <Text style={styles.personName}>Marina Alves</Text>
        <Text style={styles.caption}>Design e caminhadas</Text>
      </View>
    </View>
  );
}

function StoryContent() {
  return (
    <View style={styles.storyCard}>
      <View style={styles.photoPlaceholder}><Text style={styles.photoEmoji}>🌿</Text></View>
      <View style={styles.gap12} />
      <Text style={styles.storyTitle}>Uma manhã ao ar livre</Text>
      <Text style={styles.body}>Pequenas pausas também fazem parte do caminho.</Text>
    </View>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [pulse, setPulse] = useState(false);
  const animation = pulse ? 'pulse' : 'none';

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      <ScrollView contentContainerStyle={styles.screen}>
        <Text style={styles.eyebrow}>DEMO DA BIBLIOTECA</Text>
        <Text style={styles.title}>Vulto in React Native</Text>
        <Text style={styles.intro}>
          Veja os placeholders no lugar do conteúdo e alterne os controles abaixo.
        </Text>

        <View style={styles.controls}>
          <View style={styles.controlRow}>
            <View style={styles.flex}>
              <Text style={styles.controlTitle}>Estado de carregamento</Text>
              <Text style={styles.caption}>{loading ? 'Mostrando placeholders' : 'Mostrando conteúdo'}</Text>
            </View>
            <Switch value={loading} onValueChange={setLoading} trackColor={{ true: COLORS.accent }} />
          </View>
          <View style={[styles.controlRow, styles.controlDivider]}>
            <View style={styles.flex}>
              <Text style={styles.controlTitle}>Pulsação</Text>
              <Text style={styles.caption}>Respeita movimento reduzido do sistema</Text>
            </View>
            <Switch value={pulse} onValueChange={setPulse} trackColor={{ true: COLORS.accent }} />
          </View>
        </View>

        <Text style={styles.sectionLabel}>PERFIL</Text>
        <View style={styles.card}>{loading ? <ProfileSkeleton animation={animation} /> : <ProfileContent />}</View>

        <Text style={styles.sectionLabel}>CARTÃO DE CONTEÚDO</Text>
        {loading ? <StorySkeleton animation={animation} /> : <StoryContent />}

        <Text style={styles.note}>
          O app controla o estado. O pacote desenha somente as formas Vulto.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.background },
  screen: { padding: 22, paddingBottom: 40 },
  eyebrow: { color: COLORS.accent, fontSize: 11, fontWeight: '700', letterSpacing: 1.3, marginTop: 12 },
  title: { color: COLORS.text, fontSize: 27, fontWeight: '700', marginTop: 8 },
  intro: { color: COLORS.muted, fontSize: 15, lineHeight: 22, marginTop: 8, marginBottom: 22 },
  controls: { backgroundColor: COLORS.card, borderRadius: 16, paddingHorizontal: 16, marginBottom: 24 },
  controlRow: { minHeight: 72, flexDirection: 'row', alignItems: 'center', gap: 12 },
  controlDivider: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: COLORS.line },
  controlTitle: { color: COLORS.text, fontSize: 14, fontWeight: '600' },
  caption: { color: COLORS.muted, fontSize: 12, marginTop: 4 },
  sectionLabel: { color: COLORS.muted, fontSize: 11, fontWeight: '700', letterSpacing: 1, marginBottom: 10 },
  card: { backgroundColor: COLORS.card, borderRadius: 16, padding: 18, marginBottom: 22 },
  profileRow: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  flex: { flex: 1 },
  gap6: { height: 6 },
  gap8: { height: 8 },
  gap12: { height: 12 },
  storyCard: { backgroundColor: COLORS.card, borderRadius: 16, padding: 14 },
  avatar: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#D7E5E8', alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: COLORS.accent, fontWeight: '700', fontSize: 16 },
  personName: { color: COLORS.text, fontSize: 16, fontWeight: '700' },
  storyTitle: { color: COLORS.text, fontSize: 15, fontWeight: '700' },
  body: { color: COLORS.muted, fontSize: 13, lineHeight: 19, marginTop: 6 },
  photoPlaceholder: { height: 148, borderRadius: 14, backgroundColor: '#DCE9E0', alignItems: 'center', justifyContent: 'center' },
  photoEmoji: { fontSize: 32 },
  note: { color: COLORS.muted, fontSize: 12, lineHeight: 18, textAlign: 'center', marginTop: 20 },
});
